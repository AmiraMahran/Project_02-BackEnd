
const request = require("request")


const forecast = (latitude, longtitude, callback) => {
  const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude

  request({ url, json: true }, (error, response) => {
    const databody = response.body;
    if (error) {
      callback("unable to connect weather api service", undefined)
    } else if (databody.error) {
      callback(databody.error.message, undefined)
    } else {

      callback(undefined, databody)
    }
  })
}

module.exports = forecast

