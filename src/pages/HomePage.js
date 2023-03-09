import { useEffect, useContext } from 'react';
import CountryContext from '../context/countryContext';
import NavBar from '../components/NavBar';
import SearchFilterBlock from '../components/SearchFilterBlock';
import CountryList from '../components/CountryList';

const Homepage = function () {
  const { getCountries, allCountries } = useContext(CountryContext);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <div className="app">
      <NavBar />
      <SearchFilterBlock />
      <CountryList countries={allCountries} />
    </div>
  );
};

export default Homepage;
