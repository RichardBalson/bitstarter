var express = require('express');

var app = express.createserver(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
 var buf = new Buffer(fs.readFileSync("index.html","utf-8"));
  response.send(buf.toString());
});
var port = process.env.port || 5000;
app.listen(port, function() {
  console.log("listening on " + port);
});
