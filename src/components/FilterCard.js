import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useState, useRef, useEffect, useContext } from 'react';
import CountryContext from '../context/countryContext';

const FilterCard = function ({ regions }) {
  const { getCountriesByRegion, darkMode } = useContext(CountryContext);

  const [filterOpen, setFilterOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(-1);

  const filterEl = useRef();

  // Set Filter to Close if any other element is clicked
  useEffect(() => {
    const handler = function (e) {
      if (!filterEl.current) return;

      if (filterEl.current.contains(e.target)) return;

      setFilterOpen(false);
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const toggleFilterOpen = function () {
    setFilterOpen(!filterOpen);
  };

  const handleSelectedOption = function (nextIndex, region) {
    setActiveOption((currentSelectedIndex) => {
      return currentSelectedIndex === nextIndex ? -1 : nextIndex;
    });
    // Get Selected Region if selected
    getCountriesByRegion(region);
  };

  const renderedRegions = regions.map((reg, index) => {
    const isSelected = activeOption === index;

    return (
      <div
        key={reg.id}
        onClick={handleSelectedOption.bind(this, index, reg.name)}
        className={`region-option ${isSelected ? 'region-option-active' : ''}`}
      >
        <p>{reg.name}</p>
      </div>
    );
  });

  const darkClass = darkMode ? 'filter-card-dark' : '';

  return (
    <div ref={filterEl} className={`filter-card ${darkClass}`}>
      <p onClick={toggleFilterOpen}>
        Filter by Region {filterOpen ? <BsChevronDown /> : <BsChevronUp />}
      </p>

      <div className={`filter-list ${filterOpen ? 'filter-list-active' : ''}`}>
        {renderedRegions}
      </div>
    </div>
  );
};
export default FilterCard;
