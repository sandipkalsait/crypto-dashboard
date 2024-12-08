document.getElementById('filter-form').addEventListener('submit', async event => {
    event.preventDefault();
  
    const minMarketCap = document.getElementById('minMarketCap').value || 0;
    const maxPrice = document.getElementById('maxPrice').value || 500;
  
    const response = await fetch(`/api/cryptos?minMarketCap=${minMarketCap}&maxPrice=${maxPrice}`);
    const data = await response.json();
  
    const tbody = document.querySelector('#crypto-table tbody');
    tbody.innerHTML = data.results.map(coin => `
      <tr>
        <td>${coin.name}</td>
        <td>${coin.symbol}</td>
        <td>${coin.price.toFixed(2)}</td>
        <td>${coin.marketCap.toFixed(2)}</td>
        <td>${coin.rsi.toFixed(2)}</td>
        <td>${coin.alert}</td>
      </tr>
    `).join('');
  });
  