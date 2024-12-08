function calculateAverage(values) {
    if (!values.length) return 0;
    return values.reduce((sum, val) => sum + val, 0) / values.length;
  }
  
  function calculateRSI(changes, period = 14) {
    if (changes.length < period) return Array(changes.length).fill(null);
  
    let gains = 0, losses = 0;
  
    for (let i = 0; i < period; i++) {
      if (changes[i] >= 0) gains += changes[i];
      else losses -= changes[i];
    }
  
    const rsis = [];
    rsis.push(100 - (100 / (1 + (gains / losses || 0.0001))));
  
    for (let i = period; i < changes.length; i++) {
      const change = changes[i];
      if (change >= 0) {
        gains = (gains * (period - 1) + change) / period;
        losses = (losses * (period - 1)) / period;
      } else {
        gains = (gains * (period - 1)) / period;
        losses = (losses * (period - 1) - change) / period;
      }
      rsis.push(100 - (100 / (1 + (gains / losses || 0.0001))));
    }
  
    return rsis;
  }
  
  module.exports = { calculateAverage, calculateRSI };
  