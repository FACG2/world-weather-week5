var request = require('request');
var apiKey = '4f40fa8cc23309f4e16f95790befd866';
var host = "api.openweathermap.org/data/2.5/weather?";


function apiRequest(id,cb) {
  var url = `${host}id=${id}&appid=${apikey}`;
  request(url , function(error, response, body) {
    cb(JSON.parse(body).main);
  });
}
