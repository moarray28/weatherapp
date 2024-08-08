const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(express.json());

const corsOptions = {
    origin: 'https://weatherapp-p90b5qjki-moarray28s-projects.vercel.app/', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  };
  
  app.use(cors(corsOptions));
app.get('/weather', async (req, res) => {
    const { location } = req.query;
    const apiKey = process.env.VITE_API_KEY;

    let url;
    if (location) {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=6`;
    } else {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Vasai&days=6`;
    }

    try {
        const response = await axios.get(url);
        res.json(response.data); // Ensure JSON response
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching weather data' }); // Ensure JSON error response
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
