var express = require('express');

var app = express.createserver(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
   response.send(fs.readFileSync('index.html','utf8'));
});
var port = process.env.port || 5000;
app.listen(port, function() {
  console.log("listening on " + port);
});
