const express = require('express');
const {getCurrentWeather} = require("../util/owm");
const router = express.Router();

/* GET users listing. */
router.get('/:zipcode', async (req, res, next) => {
  const currentWeather = await getCurrentWeather(req.params.zipcode);

  res.json(currentWeather);
});

module.exports = router;
