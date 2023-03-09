import { useEffect, useContext } from 'react';
import CountryContext from '../context/countryContext';
import NavBar from '../components/NavBar';
import SearchFilterBlock from '../components/SearchFilterBlock';
import CountryList from '../components/CountryList';

const Homepage = function () {
  const { getCountries, allCountries, darkMode } = useContext(CountryContext);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const darkClass = darkMode ? 'app-dark' : '';

  return (
    <div className={`app ${darkClass}`}>
      <NavBar />
      <SearchFilterBlock />
      <CountryList countries={allCountries} />
    </div>
  );
};

export default Homepage;
