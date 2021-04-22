const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=b479c713066c0ac4f6ba32df8b1bee3c&query=' + latitude + ',' + longitude + '&units=m'

  request({ url, json: true }, (error, { body }) => {
    console.log(body.current)
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is currently " + body.current.humidity + "%.")
    }
  })
}

module.exports = forecast