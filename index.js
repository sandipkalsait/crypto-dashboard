const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;

// Load environment variables from .env file
dotenv.config();

// Import routes from app.js
const coinRoutes = require('./src/app');

// Set up middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Use the routes
app.use('/', coinRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
