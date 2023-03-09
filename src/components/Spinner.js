import { CgSpinner } from 'react-icons/cg';
import { useContext } from 'react';
import CountryContext from '../context/countryContext';

const Spinner = function () {
  const { darkMode } = useContext(CountryContext);

  const darkClass = darkMode ? 'spinner-dark' : '';

  return (
    <div className={`spinner ${darkClass}`}>
      <CgSpinner />
    </div>
  );
};

export default Spinner;
