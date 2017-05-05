var axios = require('axios');

// OpenWeather Map API key can be viewed/created with a developer account at https://openweathermap.org
const openWeatherMapApiKey = process.env.OPENWEATHERMAPAPIKEY;
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${openWeatherMapApiKey}&units=imperial`;

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    },function(res) {
      throw new Error(res.data.message);
    });
  }
}
