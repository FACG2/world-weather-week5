
var request = require('request');
var functions = require('./functions')
var apiKey = '4f40fa8cc23309f4e16f95790befd866';
var host1 = "http://api.openweathermap.org/data/2.5/weather?";
var host2="http://api.openweathermap.org/data/2.5/forecast?";


function currentWeather(id,cb) {
  var url = `${host1}id=${id}&appid=${apiKey}`;

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
function tommorrowWeather(id ,cb){
  var url = `${host2}id=${id}&appid=${apiKey}`;

  request(url , function(error, response, body) {
    var fullData=JSON.parse(body).list[9];

    var detalis={};
         detalis.description = fullData.weather[0].description;
         detalis.icon = "http://openweathermap.org/img/w/" + fullData.weather[0].icon+".png";
         detalis.temp=parseInt(functions.toCelsius(fullData.main.temp));
         detalis.pressure=fullData.main.pressure;
         detalis.humidity=fullData.main.humidity;
         detalis.date=functions.timeConverter(fullData.dt);

    cb(detalis);
  });
}
module.exports={
  currentWeather,
  tommorrowWeather
}
