const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const router = express.Router();

// Load environment variables
dotenv.config();

// API endpoint and your API key
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

const headers = {
  'Accept': 'application/json',
  'X-CMC_PRO_API_KEY': COINMARKETCAP_API_KEY
};

// Function to get filtered coins based on user criteria
async function getFilteredCoins({ minMarketCap = 0, maxPrice = 500, minLiquidity = 0, minVolume = 0 }) {
  const parameters = {
    'start': '1',
    'limit': '100', // Adjust this limit as needed
    'convert': 'USD'
  };

  try {
    const response = await axios.get(url, { headers, params: parameters });
    const data = response.data.data;

    // Filter coins based on the specified criteria
    return data.filter(coin => {
      const marketCap = coin.quote.USD.market_cap;
      const price = coin.quote.USD.price;
      const volume24h = coin.quote.USD.volume_24h;
      const totalSupply = coin.circulating_supply || 0;
      const liquidity = totalSupply * price;

      return (
        marketCap >= minMarketCap &&
        price <= maxPrice &&
        liquidity >= minLiquidity &&
        volume24h >= minVolume
      );
    }).map(coin => ({
      name: coin.name,
      symbol: coin.symbol,
      marketCap: coin.quote.USD.market_cap,
      price: coin.quote.USD.price,
      volume24h: coin.quote.USD.volume_24h,
      change24h: coin.quote.USD.percent_change_24h,
      liquidity: coin.circulating_supply * coin.quote.USD.price,
      launchDate: coin.date_added,
      quantity: coin.circulating_supply
    }));
  } catch (error) {
    console.error('Error fetching or filtering data:', error.message);
    return [];
  }
}

// Route to render the index page with filtered cryptocurrencies
router.get('/', async (req, res) => {
  try {
    const defaultFilters = {
      minMarketCap: 500000000,
      maxPrice: 500,
      minLiquidity: 100000000,
      minVolume: 0
    };
    const filteredCoins = await getFilteredCoins(defaultFilters);
    res.render('index', { coins: filteredCoins });
  } catch (error) {
    res.status(500).send('Error loading data. Please try again later.');
  }
});

// Route to filter cryptocurrencies dynamically via query parameters
router.get('/filter', async (req, res) => {
  try {
    const filters = {
      minMarketCap: parseFloat(req.query.minMarketCap) || 0,
      maxPrice: parseFloat(req.query.maxPrice) || 500,
      minLiquidity: parseFloat(req.query.minLiquidity) || 0,
      minVolume: parseFloat(req.query.minVolume) || 0
    };

    const filteredCoins = await getFilteredCoins(filters);

    // Send the filtered coins as JSON response
    res.json(filteredCoins);
  } catch (error) {
    console.error('Error applying filters:', error.message);
    res.status(500).json({ error: 'Failed to fetch filtered cryptocurrencies.' });
  }
});

module.exports = router;
