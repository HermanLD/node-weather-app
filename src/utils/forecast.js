const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e9daf6bdba08e2ec4d7523d17086e394&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const currWeather = body.current;
      callback(
        undefined,
        `
      It is ${currWeather.temperature} degrees out but, it feels like ${
          currWeather.feelslike
        } degrees with ${currWeather.precip * 100}% chance of rain.
      `
      );
    }
    // body.current.temperature
    // body.current.feelslike
    // body.current.precip
    // body.current.wind_speed
    // body.current.wind_dir
  });
};

module.exports = forecast;
