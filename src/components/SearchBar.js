import { useState, useContext } from 'react';
import CountryContext from '../context/countryContext';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = function () {
  const [countryValue, setCountryValue] = useState('');

  const { getCountryBySearch, darkMode } = useContext(CountryContext);

  const handleSubmit = function (e) {
    e.preventDefault();
    getCountryBySearch(countryValue);
  };

  const handleChange = function (e) {
    setCountryValue(e.target.value);
  };

  const darkClass = darkMode ? 'search-bar-dark' : '';

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <div className={`search-bar ${darkClass}`}>
        <AiOutlineSearch />
        <input
          onChange={handleChange}
          value={countryValue}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
    </form>
  );
};
export default SearchBar;
