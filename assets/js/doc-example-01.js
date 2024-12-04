//Add documentation to the following code.

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    const weatherData = await getWeatherData(city);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

async function getWeatherData(city) {
  const apiKey = 'YOUR_API_KEY';
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  const response = await axios.get(apiUrl);
  const weatherData = response.data;

  return {
    city: weatherData.location.name,
    temperature: weatherData.current.temp_c,
    condition: weatherData.current.condition.text,
  };
}

app.listen(port, () => {
  console.log(`Server is running on [http://localhost:$%7bport%7d%60]http://localhost:${port}`);
});