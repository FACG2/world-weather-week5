var list = require('./list.json');
var fs = require("fs");
function newJson(jsonFile) {
	return jsonFile.reduce((json,item)=>{
		var obj={};
		obj["id"] = item["id"];
		obj["name"] = item["name"];
		obj["country"] = item["country"];
		json.push(obj)
		return json;
	},[])
}
fs.writeFile('outText.json' , JSON.stringify(newJson(list)) ,(err)=>{
	if(err)
		console.log(err)

});
