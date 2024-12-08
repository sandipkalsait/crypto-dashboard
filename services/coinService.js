const axios = require('axios');
require('dotenv').config();

const API_URL = process.env.COINMARKETCAP_API_URL;
const API_KEY = process.env.COINMARKETCAP_API_KEY;

// Fetch cryptocurrency data
const fetchCryptocurrencies = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: { 'X-CMC_PRO_API_KEY': API_KEY },
      params: {
        start: 1,
        limit: 100,
        convert: 'USD',
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};

module.exports = { fetchCryptocurrencies };
