var list = require('../lib/list.json');


function getTenCities(input){
  var arr = [];
  for (var i = 0; i < list.length; i++) {
    if(list[i].name.toLowerCase().startsWith(input.toLowerCase())){
      arr.push(list[i].name + "," + list[i].country);
    }
    if (arr.length ==10) break;
  }
  return arr;
}

function getCityIdBycityName(input){
var sp = input.split(',');
var cityName = sp[0];
var countryName = sp[1];

for (var i = 0; i < list.length; i++) {
  if(list[i].name === cityName && list[i].country === countryName) return list[i].id;

}
return -1;
}

function toCelsius(kelvin){
  return (kelvin - 273.15).toFixed(2);
}

function timeConverter(UNIX_timestamp){
var a = new Date(UNIX_timestamp * 1000);
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var year = a.getFullYear();
var month = months[a.getMonth()];
var date = a.getDate();
var time = date + ' ' + month + ' ' + year;
return time;
}

module.exports = {
  getTenCities,
  toCelsius,
  getCityIdBycityName,
  timeConverter
}
