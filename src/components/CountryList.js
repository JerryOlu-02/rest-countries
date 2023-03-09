import { useContext, useState } from 'react';
import CountryContext from '../context/countryContext';
import CountryCard from './CountryCard';
import Pagination from './Pagination';
import Spinner from './Spinner';

const CountryList = function ({ countries }) {
  const { isShowing, darkMode } = useContext(CountryContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(9);

  const darkClass = darkMode ? 'country-list-dark' : '';

  const indexOfLastCountry = currentPage * countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countryPerPage;

  // Paginated Countries
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = function (number) {
    setCurrentPage(number);
  };

  const renderedCountries = currentCountries.map((country) => {
    return <CountryCard key={country.name.common} country={country} />;
  });

  return (
    <>
      <div className={`country-list ${darkClass}`}>
        {isShowing && <Spinner />}
        {renderedCountries}
      </div>

      <Pagination
        countryPerPage={countryPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        darkMode={darkMode}
      />
    </>
  );
};

export default CountryList;
