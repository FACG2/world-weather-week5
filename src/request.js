
var request = require('request');
var functions = require('./functions')
var apiKey = '4f40fa8cc23309f4e16f95790befd866';
var host = "http://api.openweathermap.org/data/2.5/weather?";


function apiRequest(id,cb) {
  var url = `${host}id=${id}&appid=${apiKey}`;

  request(url , function(error, response, body) {
    var fullData=JSON.parse(body);
    var detalis={};
         detalis.description = fullData.weather[0].description;
         detalis.icon = "http://openweathermap.org/img/w/" + fullData.weather[0].icon+".png";
         detalis.temp=parseInt(functions.toCelsius(fullData.main.temp));
         detalis.pressure=fullData.main.pressure;
         detalis.humidity=fullData.main.humidity;

    cb(detalis);
  });
}
module.exports={
  apiRequest
}
