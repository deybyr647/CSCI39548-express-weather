require('dotenv').config()

const key = process.env.OPENWEATHERMAP_API_KEY;
const axios = require('axios');

// Function to fetch current weather data from OpenWeatherMap API using Axios
const getCurrentWeather = async (zipCode = 10017) => {

    // Axios request configuration, including query parameters
    const reqConfig = {
        method: "get",
        url:"https://api.openweathermap.org/data/2.5/weather",
        params: {
            zip: zipCode,
            appid: key,
            lang: "en",
            units: "imperial"
        }
    }

    // Await the response from the API
    const req = await axios(reqConfig);
    const currentWeatherData = req.data;

    // Process time data from Unix timestamp to human-readable format
    const unixTimestamp = currentWeatherData.dt;
    const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    const timeString = date.toLocaleTimeString();

    // Process the weather data to be sent to the client in a more readable/accessible format
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

    // Round all decimal values to whole numbers
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