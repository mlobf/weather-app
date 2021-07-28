const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=be0d617236c0e7dd1c5bb4bd097fa5fd&query=37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
