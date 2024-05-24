const zipForm = document.querySelector('#zipForm')
const cityName = document.querySelector('#cityName')
const timeFetched = document.querySelector('#timeFetched')
const refreshButton = document.querySelector('#refreshButton')

const icon = document.querySelector('#icon')
const weatherDescription = document.querySelector('#description')

const temp = document.querySelector('#temperature')
const feelsLike = document.querySelector('#feelsLike')
const humidity = document.querySelector('#humidity')
const wind = document.querySelector('#windSpeed')
const maxTemp = document.querySelector('#maxTemp')
const minTemp = document.querySelector('#minTemp')

let currentZip = 10017;

const updateWeather = async (zipcode) => {
    const response = await fetch(`/weather/${zipcode}`)
    const data = await response.json();
    cityName.innerText = data.cityName;
    timeFetched.innerText = `Updated at ${data.timeFetched}`;
    icon.src = `http://openweathermap.org/img/wn/${data.icon}.png`;
    weatherDescription.innerText = data.description;
    temp.innerText = `Temperature: ${data.temperature} °F`;
    feelsLike.innerText = `Feels Like: ${data.feelsLike} °F`;
    humidity.innerText = `Humidity: ${data.humidity} %`;
    wind.innerText = `Wind Speed: ${data.windSpeed} MPH`;
    maxTemp.innerText = `Max Temp: ${data.max} °F`;
    minTemp.innerText = `Min Temp: ${data.min} °F`;
}

zipForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    currentZip = e.target[0].value;
    e.target[0].value = "";
    await updateWeather(currentZip);
})

refreshButton.addEventListener("click", async () => {
    await updateWeather(currentZip);
})


