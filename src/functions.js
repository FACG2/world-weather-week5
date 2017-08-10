function getTenCities(input,data){
  var arr = [];
  for (var i = 0; i < data.length; i++) {
    if(data[i].name.toLowerCase().startsWith(input.toLowerCase())){
      arr.push(data[i].name + "," + data[i].country);
    }
    if (arr.length ==10) break;
  }
  return arr;
}

function getCityIdBycityName(input,data){
var sp = input.split(',');
var cityName = sp[0];
var countryName = sp[1];

for (var i = 0; i < data.length; i++) {
  if(data[i].name === cityName && data[i].country === countryName) return data[i].id;
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
