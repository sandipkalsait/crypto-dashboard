// Calculate Relative Strength Index (RSI)
const calculateRSI = (priceChanges) => {
    let gains = 0, losses = 0;
  
    priceChanges.forEach(change => {
      if (change > 0) gains += change;
      else losses -= change; // Losses are positive for RSI calculation
    });
  
    const averageGain = gains / priceChanges.length;
    const averageLoss = losses / priceChanges.length;
  
    if (averageLoss === 0) return 100; // If no losses, RSI is 100
    const rs = averageGain / averageLoss;
  
    return 100 - (100 / (1 + rs));
  };
  
  // Calculate average price
  const calculateAveragePrice = (coins) =>
    coins.reduce((sum, coin) => sum + coin.quote.USD.price, 0) / coins.length;
  
  module.exports = { calculateRSI, calculateAveragePrice };
  