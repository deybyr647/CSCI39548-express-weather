require('dotenv').config()

const key = process.env.OPENWEATHERMAP_API_KEY;

const axios = require('axios');

const getCurrentWeather = async (zipCode = 10017) => {
    const req = await axios(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${key}&lang=en&units=imperial`);
    const currentWeatherData = req.data;

    const unixTimestamp = currentWeatherData.dt;
    const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

    const timeString = date.toLocaleTimeString();

    const processedWeatherData = {
        temperature: currentWeatherData.main.temp,
        feelsLike: currentWeatherData.main.feels_like,
        max: currentWeatherData.main.temp_max,
        min: currentWeatherData.main.temp_min,
        humidity: currentWeatherData.main.humidity,
        windSpeed: currentWeatherData.wind.speed,
        cityName: currentWeatherData.name,
        icon: currentWeatherData.weather[0].icon,
        description: currentWeatherData.weather[0].description,
        timeFetched: timeString
    }

    for (let key in processedWeatherData) {
        if (typeof processedWeatherData[key] === 'number') {
            processedWeatherData[key] = Math.round(processedWeatherData[key]);
        }
    }

    return processedWeatherData;
}

module.exports = {
    getCurrentWeather
}