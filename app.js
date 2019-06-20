var express = require("express");
var app = express();
var path = require("path");
app.get('/',function(req,res){
  console.log(__dirname);
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
//app.use('/content', express.static('public'))
app.use('/public', express.static('public'))
app.listen(8081);
console.log("Server running at Port 8081");