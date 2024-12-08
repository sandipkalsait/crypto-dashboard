const { table } = require('table');
const chalk = require('chalk');

// Display results in a formatted table
const displayTable = (filteredCoins) => {
  const tableData = [
    [
      chalk.blue('Name'),
      chalk.blue('Symbol'),
      chalk.blue('Price (USD)'),
      chalk.blue('Market Cap (USD)'),
      chalk.blue('Liquidity'),
      chalk.blue('RSI'),
    ],
  ];

  filteredCoins.forEach((coin) => {
    tableData.push([
      coin.name,
      coin.symbol,
      coin.quote.USD.price.toFixed(2),
      coin.quote.USD.market_cap.toFixed(2),
      (coin.quote.USD.volume_24h / coin.quote.USD.price).toFixed(2), // Liquidity approx.
      coin.rsi.toFixed(2),
    ]);
  });

  console.log(table(tableData));
};

module.exports = { displayTable };
