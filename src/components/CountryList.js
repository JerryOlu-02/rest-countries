import { useContext, useReducer } from 'react';
import CountryContext from '../context/countryContext';
import CountryCard from './CountryCard';
import Pagination from './Pagination';
import Spinner from './Spinner';

const reducer = function (state, action) {
  switch (action.type) {
    case 'paginate':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'set-current-page-to-1':
      return {
        ...state,
        currentPage: 1,
      };

    default:
      return state;
  }
};

const CountryList = function ({ countries }) {
  const { isShowing, darkMode } = useContext(CountryContext);

  const [state, dispatch] = useReducer(reducer, {
    countryPerPage: 8,
    currentPage: 1,
  });
  console.log(state);

  const darkClass = darkMode ? 'country-list-dark' : '';

  const indexOfLastCountry = state.currentPage * state.countryPerPage;
  const indexOfFirstCountry = indexOfLastCountry - state.countryPerPage;

  // Paginated Countries
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = function (number) {
    dispatch({
      type: 'paginate',
      payload: number,
    });
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
        countryPerPage={state.countryPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        darkMode={darkMode}
      />
    </>
  );
};

export default CountryList;
