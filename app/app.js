var express = require('express')
  , app = express()
  , doT = require('express-dot')
  , pub = __dirname+'/public'
  , view = __dirname+'/views';
var db = require('./models/db.js');

//app.use(express.static(__dirname));
app.set('views', __dirname+'/views');
app.set('view engine', 'dot');
app.engine('html', doT.__express);
app.use('/css',express.static(__dirname+'/public/css'));
app.use('/images',express.static(__dirname+'/public/images'));
app.use('/js',express.static(__dirname+'/public/js'));
app.use('/fonts',express.static(__dirname+'/public/fonts'));
app.use('/resources',express.static(__dirname+'/public/resources'));

app.get('/', function(req, res){
	var templateData = {title: "AlgoRun", home_nav: "class='active'"};
	res.render('index.html', templateData);
});
app.get('/getting-started', function(req, res){
	var templateData = {title: "Getting Started", getting_started_nav: "class='active'"};
	res.render('getting-started.html', templateData);
});
app.get('/publish-your-algorithm', function(req, res){
	var templateData = {title: "Publish Your Algorithm", publish_your_algorithm_nav: "class='active'"};
	res.render('publish-your-algorithm.html', templateData);
});
app.get('/search', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    
    var search_criteria = req.query.q;
    db.searchName(search_criteria, function(name_rows){
        db.searchKeyword(search_criteria, function(keywords_rows){
            search_criteria = search_criteria.substring(0, 20) + ' ...';
            if(name_rows.length == 0 && keywords_rows.length == 0){
                var results = "<div class='row''><div class='col-sm-12'><h2>Sorry! We cannot find related algorithms :(</h2><h3>Please, check back soon. We keep updating our repository ..</h3></div></div>";
                var templateData = {title: "Search", q: search_criteria, result: results};
	            res.render('search.html', templateData);
            } else {
                var results = "";
                name_rows.forEach(function(entry) {
                    var result_instance = "<div class='row' style='outline: 1px solid #25aae1; margin-bottom: 10px;'><div class='col-sm-8'><h1 class='search-results'>" + entry.name +"</h1><h3>" + entry.description + "</h3><h4>" + entry.keywords + "</h4></div><div class='col-sm-4'><button class='btn btn-primary' style='width: 100%; margin-top:10vh;'>try it</button></div></div>";
                    results += result_instance;
                });
                keywords_rows.forEach(function(entry) {
                    var result_instance = "<div class='row' style='outline: 1px solid #25aae1; margin-bottom: 10px;'><div class='col-sm-8'><h1 class='search-results'>" + entry.name +"</h1><h3>" + entry.description + "</h3><h4>" + entry.keywords + "</h4></div><div class='col-sm-4'><button class='btn btn-primary' style='width: 100%; margin-top:10vh;'>try it</button></div></div>";
                    results += result_instance;
                });
                var templateData = {title: "Search", q: search_criteria, result: results};
	            res.render('search.html', templateData);
            }
        });
    });
});
app.get('/contact-us', function(req, res){
	var templateData = {title: "Contact Us"};
	res.render('contact-us.html', templateData);
});

var server = app.listen(31331);
enableDestroy(server);

process.on('SIGINT', function () {
    db.closeDB();
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