import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CountryContext from '../context/countryContext';

const CountryCard = function ({ country }) {
  const navigate = useNavigate();

  const navigateToCountryPage = function () {
    navigate(`/countries/${country?.cca3}`);
  };

  const { darkMode } = useContext(CountryContext);

  const darkClass = darkMode ? 'country-card-dark' : '';

  return (
    <div
      onClick={navigateToCountryPage}
      className={`country-card ${darkClass}`}
    >
      <img src={country?.flags.png} alt={country?.flags.alt} />

      <div className="country-card-div">
        <h3>{country?.name?.common}</h3>

        <div>
          <p>
            <span>Population:</span> {country?.population}
          </p>
          <p>
            <span>Region:</span> {country?.region}
          </p>
          <p>
            <span>Capital:</span> {country?.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
