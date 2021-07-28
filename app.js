// import the request module
const request = require("request");
// set the full  api's path
const base_url = "http://api.weatherstack.com/current?";
const token = "access_key=be0d617236c0e7dd1c5bb4bd097fa5fd&";
const location = "query=37.8267,-122.4233";
const metrics = "&units=f";
const url =
  "http://api.weatherstack.com/current?access_key=be0d617236c0e7dd1c5bb4bd097fa5fd&query=37.8267,-122.4233";

console.log(base_url + token + location + metrics);
console.log(url);

const newUrl = base_url + token + location + metrics;

// the use of request module
request({ url: newUrl, json: true }, (error, response) => {
  //console.log(response.body.current);
  const temperature = response.body.current.temperature; // Temperature Ok
  const precip = response.body.current.precip; // Preciptation OK
  const aparentemperature = response.body.current.feelslike; // Preciptation OK
  console.log(
    "Is currently " +
      temperature +
      " degrees out. There is a " +
      precip +
      " % chance of rain. And the outside temperature is " +
      aparentemperature +
      " degrees out side"
  );
});

// Goal: Print a small forecast to the user.
//
// 1.Print "Its currently 58.55 degrees out. There is a 0% chance of rain."
// 2.Test your work.
