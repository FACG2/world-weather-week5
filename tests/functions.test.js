var test = require('tape');
var functions = require('../src/functions.js');
var sampleData = require('./sampleData.json');

test('get first 10 matches', (t) => {
  var actual = functions.getTenCities("l",sampleData);
  var expected = ['Laspi,UA', 'Lichtenrade,DE', 'Lhasa,CN',
   'Land Nordrhein-Westfalen,DE', 'Lisbon,PT'];


  t.deepEqual(actual, expected, 'should return an array of 10 city names');
  t.end();
});

test('get city id', (t) => {
  var actual = functions.getCityIdBycityName('Novinki,RU',sampleData);
  var expected = 519188;
  t.deepEqual(actual, expected, `should return ${expected}`);
  t.end();
});


test('to celsius', (t) => {
  var actual = functions.toCelsius(300);
  var expected = '26.85';
  t.deepEqual(actual, expected, `should return ${expected}`);
  t.end();
});

test('time Converter', (t) => {
  var actual = functions.timeConverter(1485799200);
  var expected = '30 Jan 2017';
  t.deepEqual(actual, expected, `should return ${expected}`);
  t.end();
});
