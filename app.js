var express = require('express')
  , app = express();
var path = require('path');

app.use(express.static(__dirname + '/web'));

app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    
    var result = path.join(__dirname, '/web/index.html');
    res.sendFile(result);
});

app.get('/browse', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    
    var result = path.join(__dirname, '/web/browse.html');
    res.sendFile(result);
});

app.get('/documentation', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    
    var result = path.join(__dirname, '/web/documentation.html');
    res.sendFile(result);
});


app.get('/submit-algorithm', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    
    var result = path.join(__dirname, '/web/submit-algorithm.html');
    res.sendFile(result);
});

app.get('/input-output-types', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    
    var result = path.join(__dirname, '/web/input-output-types.html');
    res.sendFile(result);
});

var server = app.listen(31331);
enableDestroy(server);

process.on('SIGINT', function () {
    server.destroy();
});
function enableDestroy(server) {
  var connections = {}

  server.on('connection', function(conn) {
    var key = conn.remoteAddress + ':' + conn.remotePort;
    connections[key] = conn;
    conn.on('close', function() {
      delete connections[key];
    });
  });

  server.destroy = function(cb) {
    server.close(cb);
    for (var key in connections)
      connections[key].destroy();
  };
}