var functions = require('./functions.js');
const fs = require('fs');
const request = require('./request.js');
var list = require('../lib/list.json');

function publicHandler(req, res) {
  var url = req.url;
  if (url == '/') {
    url = '/public/index.html';
  }
  var parts = url.split('.');
  var fileExtention = parts[parts.length - 1];

  var contentTypes = {
    css: 'text/css',
    html: 'text/html',
    js: 'application/javascript',
    ico: 'image/x-icon'
  };
  fs.readFile(__dirname + '/..' + url, (err, data) => {
    if (err) {
      res.writeHead(500, {
        'Content-Type': 'text/html'
      });
      res.end('<h1>Internal Server Error</h1>');
    } else {
      res.writeHead(200, {
        'Content-Type': contentTypes[fileExtention]
      });
      res.end(data);
    }
  });
}

function searchHandler(req, res) {
  var allData = '';
  req.on('data', function(chunk) {
    allData += chunk;
  });
  req.on('end', function() {
    var result = functions.getTenCities(allData,list);
    res.end(JSON.stringify(result));
  });
  req.on('error', function() {
    res.end('no suggestion');
  })
}

function submitHandler(req, res) {
  var allData = '';
  var result;
  req.on('data', function(chunk) {
    allData += chunk;
  });
  req.on('end', function() {
    result = functions.getCityIdBycityName(allData,list);

    if (result === -1) {
      res.end(JSON.stringify('city does not exist'));
    } else {
      request.currentWeather(result, function(today) {
        request.tommorrowWeather(result, function(tommorrow) {
          var body = {
            'today': today,
            'tommorrow': tommorrow
          }
          res.end(JSON.stringify(body));


        });
      });
    }
  });

  req.on('error', function() {
    res.end('city does not exist');
  })
}

function noPageHandler(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html'
  });
  res.end('<center><h1>404 Page Not found</h1></center>');
}
module.exports = {
  publicHandler,
  searchHandler,
  submitHandler,
  noPageHandler
}
