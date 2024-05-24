# express-weather

A simple single-page weather website built with Node.js and Express.js.

## Features

- Fetches current weather data based on ZIP code.
- Displays weather information in a user-friendly format.

## Prerequisites

- Node.js installed on your machine.
- An API key from OpenWeatherMap. Either use the one provided to you via BlackBoard or Sign up [here](https://home.openweathermap.org/users/sign_up) to get one.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/deybyr647/CSCI39548-express-weather
    cd weather-website
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    ```env
    OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
express-weather/
├── bin/
│   └── www.js
├── public/
│   ├── images/
│   ├── javascripts/
|   │   └── main.js
│   └── stylesheets/
|       └── style.css
├── routes/
│   └── index.js
│   └── weather.js
├── util/
│   └── owm.js
├── views/
│   ├── error.ejs
│   ├── index.ejs
├── .env
|── .gitignore
├── app.js
├── package.json
└── README.md
