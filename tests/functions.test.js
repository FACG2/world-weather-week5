var test = require('tape');
var functions = require('../src/functions.js');


test('get first 10 matches', (t) => {
  var actual = functions.getTenCities("l");
  var expected = ['Laspi,UA', 'Lichtenrade,DE', 'Lhasa,CN',
    'Land Nordrhein-Westfalen,DE', 'Lisbon,PT', 'La Portanière,FR',
    'Lede,BE', 'Laval,CA', 'Lusambo,CD', 'Luebo,CD'
  ];


  t.deepEqual(actual, expected, 'should return an array of 10 city names');
  t.end();
});

test('get city id', (t) => {
  var actual = functions.getCityIdBycityName('London,GB');
  var expected = 2643743;
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
