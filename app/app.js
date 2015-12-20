var express = require('express')
  , app = express();

app.use(express.static(__dirname + '/web'));

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