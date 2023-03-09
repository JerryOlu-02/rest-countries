import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import RenderCountryCard from '../components/RenderCountryCard';
import Spinner from '../components/Spinner';
import CountryContext from '../context/countryContext';
import { AxiosCall } from '../helpers/AxiosCall';

const CountryPage = function () {
  const { countryId } = useParams();
  const { darkMode } = useContext(CountryContext);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const getCountryByCode = async function () {
      try {
        const responseData = await AxiosCall(`alpha/${countryId}`);

        setCountryData([...responseData]);
      } catch (error) {
        console.error(error.message);
      }
    };

    getCountryByCode();
  }, [countryId]);

  const darkClass = darkMode ? 'app-dark' : '';

  return (
    <div className={`app ${darkClass}`}>
      <NavBar />
      {countryData ? (
        <RenderCountryCard countryData={countryData[0]} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CountryPage;
