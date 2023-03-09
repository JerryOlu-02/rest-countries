import axios from 'axios';

const AxiosCall = async function (urlEnd) {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/${urlEnd}`
    );

    if (response.statusText !== 'OK') {
      throw new Error(`${response.statusText}`);
    }

    const data = await response.data;

    return data;
  } catch (error) {
    throw error;
  }
};

export { AxiosCall };
