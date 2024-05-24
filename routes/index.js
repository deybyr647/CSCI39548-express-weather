const express = require('express');
const {getCurrentWeather} = require("../util/owm");
const router = express.Router();

/* GET home page & initial weather data fetch */
router.get('/', async (req, res, next) => {
  const currentWeather = await getCurrentWeather("10017");
  res.render('index', { title: 'express-weather', weather: currentWeather});
});

module.exports = router;
