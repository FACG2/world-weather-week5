const test = require('tape');
const shot = require('shot');
const router = require('../src/router.js');

test('Home route', (t) => {
  shot.inject(router, {method:'get' , url:'/'}, (res) => {
    t.equal(res.statusCode, 200 , 'respond with 200');
    t.end();
  })
})

test('Home route returns a status code of 404' , (t) => {
shot.inject(router, { method:'get' , url: '/qqqqq'}, (res) => {
  t.equal(res.statusCode, 404 , 'respond with 404');
  t.deepEqual(res.payload, '<h1>Not found</h1>', 'should return error in the payload');
  t.end();
})
})

test('suggestion route returns a status code of 200' , (t) => {
shot.inject(router, { method:'get' , url: '/suggest', payload: 'g'}, (res) => {
  t.deepEqual(res.statusCode, 200, 'respond with 200');
  t.equal(res.payload, '["Gorkhā,NP","Ghūra,IN","Gumist’a,GE","Gatow,DE","Guliston,UZ","Gemeente Wervershoof,NL","Grandate,IT","Golcar,GB","Grebnevo,RU","Gustavia,BL"]', 'should return error in the payload');
  t.end();
})
})


test('submit route returns a status code of 200' , (t) => {
shot.inject(router, { method:'get' , url: '/submit', payload: 'Gaza Strip,PS'}, (res) => {
  t.equal(res.statusCode, 200, 'respond with 200');
  t.deepEqual(res.payload, '{"description":"clear sky","icon":"http://openweathermap.org/img/w/01d.png","temp":304.15,"pressure":1010,"humidity":62}', 'should return error in the payload');
  t.end();
})
})
