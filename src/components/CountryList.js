import { useContext } from 'react';
import CountryContext from '../context/countryContext';
import CountryCard from './CountryCard';
import Spinner from './Spinner';

const CountryList = function ({ countries }) {
  const { isShowing, darkMode } = useContext(CountryContext);

  const renderedCountries = countries.map((country) => {
    return <CountryCard key={country.name.common} country={country} />;
  });

  const darkClass = darkMode ? 'country-list-dark' : '';

  return (
    <div className={`country-list ${darkClass}`}>
      {isShowing && <Spinner />}
      {renderedCountries}
    </div>
  );
};

export default CountryList;
