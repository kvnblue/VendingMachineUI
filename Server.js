const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname + '/dist/vending-app'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/vending-app/index.html'));
  });
var server_port = process.env.PORT || 4200;
var server_host = '0.0.0.0';

app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});