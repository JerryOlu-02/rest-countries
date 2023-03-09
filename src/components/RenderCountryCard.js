import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useContext } from 'react';
import CountryContext from '../context/countryContext';

const RenderCountryCard = function ({ countryData }) {
  console.log(countryData);
  const { darkMode } = useContext(CountryContext);

  const renderedButtons = countryData?.borders?.map((border) => {
    return <button key={border}>{border}</button>;
  });

  const darkClass = darkMode ? 'rendered-country-card-dark' : '';

  return (
    <div className={`rendered-country-card ${darkClass}`}>
      <button className="back-btn">
        <Link to="/">
          <BiArrowBack /> <span>Back</span>
        </Link>
      </button>

      <div className="rendered-country-card-div">
        <div className="rendered-country-card-img">
          <img src={countryData?.flags?.png} alt={countryData?.flags?.alt} />
        </div>

        <div className="rendered-country-card-right">
          <h3>{countryData?.name?.common}</h3>

          <div className="rendered-country-card-content">
            <div>
              <p>
                <span>Native Name: </span>

                {Object.values(countryData?.name?.nativeName)[0]?.official}
              </p>
              <p>
                <span>Population:</span> {countryData?.population}
              </p>
              <p>
                <span>Region:</span> {countryData?.region}
              </p>
              <p>
                <span>Sub Region:</span> {countryData?.subregion}
              </p>
              <p>
                <span>Capital:</span> {countryData?.capital}
              </p>
            </div>

            <div>
              <p>
                <span>Top Level Domain:</span> {countryData?.tld}
              </p>
              <p>
                <span>Currencies: </span>
                {Object.values(countryData?.currencies)[0]?.name}
              </p>
              <p>
                <span>Languages: </span>
                {Object.values(countryData?.languages)[0]}
              </p>
            </div>
          </div>

          <div className="border-countries">
            <span>Border Countries: </span>
            {renderedButtons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderCountryCard;
