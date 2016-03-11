var express = require('express');
var app = express();
var index = require('./routes/index.js')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); //add this line to begin removing anguler and adding jquery

app.use("/", index);

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("Listening on port: ",port);

});
