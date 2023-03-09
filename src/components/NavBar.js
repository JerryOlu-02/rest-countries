import { useContext } from 'react';
import CountryContext from '../context/countryContext';
import { RiMoonLine } from 'react-icons/ri';

const NavBar = function () {
  const { toggleDarkMode, darkMode } = useContext(CountryContext);

  const handlClick = function () {
    toggleDarkMode();
  };

  const darkClass = darkMode ? 'navbar-dark' : '';

  return (
    <div className={`navbar ${darkClass}`}>
      <h2>Where in the world?</h2>

      <button onClick={handlClick}>
        <RiMoonLine />
        <p>Dark Mode</p>
      </button>
    </div>
  );
};

export default NavBar;
