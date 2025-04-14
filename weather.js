require('dotenv').config();
const axios = require('axios');

async function getWeather(city) {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) return '❌ API key não encontrada. Verifique seu arquivo .env';

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`
    );

    const { name, main, weather } = res.data;
    return `🌤️ O tempo em ${name}: ${weather[0].description}, ${main.temp}°C.`;
  } catch (error) {
    return `❌ Erro ao buscar clima de "${city}". Verifique o nome ou sua conexão.`;
  }
}

module.exports = getWeather;