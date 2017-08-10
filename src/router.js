var handler = require("./handler.js");

function router(req,res) {
  var url=req.url;
  if (url==='/'||url.startsWith('/public')) {
	handler.publicHandler(req,res);
  }else if (url==='/submit') {
  	handler.submitHandler(req,res);
  }else if (url==='/suggest') {
    handler.searchHandler(req,res);
  }else {
	handler.noPageHandler(req,res);
  }

}
module.exports = router;
