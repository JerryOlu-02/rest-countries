import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import RenderCountryCard from '../components/RenderCountryCard';
import Spinner from '../components/Spinner';

const CountryPage = function () {
  const { countryId } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const getCountryByCode = async function () {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${countryId}`
        );

        setCountryData([...response.data]);
      } catch (error) {
        console.error(error.message);
      }
    };

    getCountryByCode();
  }, [countryId]);

  return (
    <div className="app">
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
