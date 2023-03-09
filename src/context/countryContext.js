import { createContext, useCallback, useState } from 'react';
import { AxiosCall } from '../helpers/AxiosCall';

const CountryContext = createContext();

const CountryProvider = function ({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = function () {
    setDarkMode(!darkMode);
  };

  const getCountries = useCallback(async function () {
    try {
      // Render Spinner
      setIsShowing(true);

      const data = await AxiosCall('all');

      data ? setIsShowing(false) : setIsShowing(true);

      // const countriesInitial = [
      //   'Germany',
      //   'United States',
      //   'Brazil',
      //   'Iceland',
      //   'Afghanistan',
      //   'Åland Islands',
      //   'Albania',
      //   'Algeria',
      // ];

      // const filteredData = data.filter((country) => {
      //   return countriesInitial.includes(country.name.common);
      // });

      setAllCountries([...data]);
    } catch (error) {
      setIsShowing(true);
      console.error(error.message);
    }
  }, []);

  const getCountriesByRegion = async function (region) {
    try {
      setIsShowing(true);

      const data = await AxiosCall(`region/${region}`);

      data ? setIsShowing(false) : setIsShowing(true);

      setAllCountries([...data]);
    } catch (error) {
      console.error(error.message);
      setIsShowing(true);
    }
  };

  const getCountryBySearch = async function (country) {
    try {
      setIsShowing(true);

      const data = await AxiosCall(`name/${country}`);

      data ? setIsShowing(false) : setIsShowing(true);

      setAllCountries([...data]);
    } catch (error) {
      console.error(error.message);
      setIsShowing(true);
    }
  };

  const sharedData = {
    getCountries,
    getCountriesByRegion,
    getCountryBySearch,
    toggleDarkMode,
    darkMode,
    allCountries,
    isShowing,
  };

  return (
    <CountryContext.Provider value={sharedData}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider };
export default CountryContext;
