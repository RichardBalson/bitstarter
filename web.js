var express = require('express');

var app = express.createserver(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
 var buf = new buffer(fs.readfilesync('index.html'),'utf-8');
  response.send(buf.tostring());
});
var port = process.env.port || 5000;
app.listen(port, function() {
  console.log("listening on " + port);
});
