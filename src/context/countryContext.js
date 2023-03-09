import axios from 'axios';
import { createContext, useCallback, useState } from 'react';

const CountryContext = createContext();

const CountryProvider = function ({ children }) {
  const [allCountries, setAllCountries] = useState([]);
  const [countryCodeData, setCountryCodeData] = useState([]);
  const [isShowing, setIsShowing] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = function () {
    setDarkMode(!darkMode);
  };

  const getCountries = useCallback(async function () {
    try {
      // Render Spinner
      setIsShowing(true);

      const response = await axios.get(`https://restcountries.com/v3.1/all`);

      if (response.statusText === 'OK') {
        // Remove Spinner
        setIsShowing(false);
      }

      const data = await response.data;

      const countriesInitial = [
        'Germany',
        'United States',
        'Brazil',
        'Iceland',
        'Afghanistan',
        'Åland Islands',
        'Albania',
        'Algeria',
      ];

      const filteredData = data.filter((country) => {
        return countriesInitial.includes(country.name.common);
      });

      setAllCountries([...filteredData]);
    } catch (error) {
      setIsShowing(true);
      console.error(error.message);
    }
  }, []);

  const getCountriesByRegion = async function (region) {
    try {
      setIsShowing(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );

      if (response.statusText === 'OK') {
        setIsShowing(false);
      }

      const data = await response.data;

      setAllCountries([...data]);
    } catch (error) {
      console.error(error.message);
      setIsShowing(true);
    }
  };

  const getCountryBySearch = async function (country) {
    try {
      setIsShowing(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`
      );

      if (response.statusText === 'OK') {
        setIsShowing(false);
      }

      const data = await response.data;

      setAllCountries([...data]);
    } catch (error) {
      console.error(error.message);
      setIsShowing(true);
    }
  };

  const getCountryByCode = useCallback(async function (code) {
    try {
      setIsShowing(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );

      if (response.statusText === 'OK') {
        setIsShowing(false);
      }

      setCountryCodeData([...response.data]);
    } catch (error) {
      console.error(error.message);
      setIsShowing(true);
    }
  }, []);

  const sharedData = {
    getCountries,
    getCountriesByRegion,
    getCountryBySearch,
    toggleDarkMode,
    getCountryByCode,
    darkMode,
    allCountries,
    isShowing,
    countryCodeData,
  };

  return (
    <CountryContext.Provider value={sharedData}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountryProvider };
export default CountryContext;
