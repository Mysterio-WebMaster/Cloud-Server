var express = require('express');
var server = express();
var bodyParser = require('body-parser');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

server.get("/data", function(req, res){
      let name = req.query.name;
      let phone = req.query.phone

      res.json({Name: name, Phone: phone});
})

server.listen(3001, function(){
      console.log("Listening to 3001");
})