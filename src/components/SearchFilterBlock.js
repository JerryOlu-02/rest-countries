import FilterCard from './FilterCard';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import CountryContext from '../context/countryContext';

const SearchFilterBlock = function () {
  const { darkMode } = useContext(CountryContext);

  const regions = [
    { name: 'Africa', id: 'afr' },
    { name: 'America', id: 'ame' },
    { name: 'Asia', id: 'asi' },
    { name: 'Europe', id: 'eur' },
    { name: 'Oceania', id: 'oce' },
  ];

  const darkClass = darkMode ? 'search-filter-block-dark' : '';

  return (
    <div className={`search-filter-block ${darkClass}`}>
      <SearchBar />
      <FilterCard regions={regions} />
    </div>
  );
};

export default SearchFilterBlock;
