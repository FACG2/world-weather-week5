var test = require('tape');
var functions = require('../src/functions.js');

test('get city information by id', (t) => {
  var actual = functions.getCityByID(708546);
  var expected = {
    "id": 708546,
    "name": "Holubynka",
    "country": "UA",
    "coord": {
      "lon": 33.900002,
      "lat": 44.599998
    }
  };
  t.deepEqual(actual, expected, 'should return city information');
  t.end();
});

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
