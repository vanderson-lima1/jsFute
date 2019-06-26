var express = require("express");
var app = express();
var path = require("path");
//var Dotenv = require("dotenv-webpack");

app.get('/',function(req,res){
  console.log(__dirname);
  //api = new Dotenv().API_SPORTMONKS;  
  //console.log(api);
  res.sendFile(path.join(__dirname+'/src/index.html'));
  //__dirname : It will resolve to your project folder.
});

//app.use('/content', express.static('public'))
app.use('/public', express.static('src/public'))
app.listen(8081);
console.log("Server running at Port 8081");