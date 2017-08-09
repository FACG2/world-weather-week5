var list = require('../lib/list.json');

function getCityByID(cityId) {
  for (var i = 0; i < list.length; i++) {
    if(list[i].id === cityId) return list[i];
  }
}

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

module.exports = {
  getCityByID,
  getTenCities,
  toCelsius,
  getCityIdBycityName
}
