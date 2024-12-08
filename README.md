
# Cryptocurrency Filter and Technical Indicators App

This Node.js application fetches cryptocurrency data from the CoinMarketCap API, filters the data based on user-specified criteria, calculates technical indicators (like RSI), and provides the following functionalities:

1. **Console Output**: Displays filtered cryptocurrency data as a formatted table.
2. **Web Interface**: A dynamic web UI for filtering and visualizing cryptocurrencies.

---

## Features

- **Filter Criteria**:
  - Market Cap (min/max)
  - Price (min/max)
  - Liquidity
  - Coin Listing Date
  - Platforms
  - Quantity
- **Technical Indicators**:
  - **Average Price**: Calculates the average price of filtered cryptocurrencies.
  - **Relative Strength Index (RSI)**: Indicates overbought or oversold conditions.
  - **Alerts**: Flags coins based on RSI thresholds (e.g., overbought or oversold).
- **Web UI**:
  - Intuitive interface for setting filter parameters.
  - Interactive table to display filtered cryptocurrencies.
- **Console Table**: Clean and formatted output using `console.table`.

---

## Prerequisites

- **Node.js** (v14 or higher)
- **NPM** (comes with Node.js)
- A valid **CoinMarketCap API Key**.

---

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/sandipkalsait/crypto-dashboard.git
   cd crypto-dashboard
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   COINMARKETCAP_API_KEY=your_api_key
   ```

4. Start the server:
   ```
   npm start
   ```

---

## Usage

### **Web Interface**
1. Open your browser and navigate to `http://localhost:3000`.
2. Use the filter options to set parameters for cryptocurrencies (e.g., min price, max market cap).
3. View the filtered results and technical indicators in the interactive table.

### **Console Output**
1. The filtered results will also be displayed in the console when the server is running.
2. Adjust filter criteria in the `getFilteredCoins` function in `app.js` to customize console output.

---

## File Structure

```
project-root/
├── public/
│   ├── css/
│   │   └── style.css   # Styling for the web UI
│   ├── js/
│   │   └── script.js   # Dynamic functionality for the UI
├── routes/
│   └── index.js        # Routes for API calls and rendering pages
├── views/
│   ├── index.ejs       # Main UI template
├── .env                # Environment variables (e.g., API key)
├── app.js              # Main application logic
├── package.json        # Project configuration
├── README.md           # Documentation
```

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework.
- **EJS**: Templating engine for dynamic HTML.
- **Axios**: For API requests.
- **CSS/JavaScript**: For styling and interactivity.
- **dotenv**: For managing environment variables.

---

## Future Improvements

- Add more advanced technical indicators.
- Implement a database to store favorite coins or user preferences.
- Enhance UI with additional graphs or charts (e.g., using Chart.js).

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
