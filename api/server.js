const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not set
const frontendurl = process.env.VITE_FRONTEND_URL;
// Enable CORS with explicit configuration
app.use(cors({
    origin: frontendurl, // Your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Route to get weather data
app.get('/weather', async (req, res) => {
    const { location } = req.query;
    const apiKey = process.env.VITE_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API key is missing' });
    }

    let url;
    if (location) {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7`;
    } else {
        url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Vasai&days=7`;
    }

    try {
        const response = await axios.get(url);
        res.json(response.data); // Ensure JSON response
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Error fetching weather data' }); // Ensure JSON error response
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
