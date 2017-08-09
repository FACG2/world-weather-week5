var functions= require('./functions.js');
const fs=require('fs');
const request=require('./request.js');
function publicHandler(req,res) {
  var url =req.url;
   if (url == '/') {
    url = '/public/index.html';
    }
    var parts = url.split('.');
    var fileExtention = parts[parts.length - 1];

    var contentTypes = {
      css: 'text/css',
      html: 'text/html',
      js: 'application/javascript',
      ico:'image/x-icon'
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
function searchHandler(req,res) {
  var allData='';
  req.on('data',function (chunk) {
allData+=chunk;
  });
  req.on('end',function () {
var result=functions.getTenCities(allData);
res.end(JSON.stringify(result));
  });
}
function submitHandler(req,res) {
  var allData='';
  var result;
  req.on('data',function (chunk) {
allData+=chunk;
  });
  req.on('end',function () {
result=functions.getCityIdBycityName(allData);
if (result===-1) {
  res.end('city does not exist');  
}
request.apiRequest(result,function (body) {
  res.end(JSON.stringify(body));
  });
});
}
function noPageHandler(req,res) {
  res.writeHead(404, { 'Content-Type': 'text/html'});
 res.end('<h1>Not found</h1>');
}
module.exports={
  publicHandler,
  searchHandler,
  submitHandler,
  noPageHandler
}
