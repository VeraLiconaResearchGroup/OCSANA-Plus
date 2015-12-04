var express = require('express')
  , app = express()
  , doT = require('express-dot')
  , pub = __dirname+'/public'
  , view = __dirname+'/views';
var db = require('./models/db.js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var uuid = require('node-uuid');
var request = require('request');

app.set('views', __dirname+'/views');
app.set('view engine', 'dot');
app.engine('html', doT.__express);
app.use(cookieParser());
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/css',express.static(__dirname+'/public/css'));
app.use('/images',express.static(__dirname+'/public/images'));
app.use('/js',express.static(__dirname+'/public/js'));
app.use('/fonts',express.static(__dirname+'/public/fonts'));
app.use('/resources',express.static(__dirname+'/public/resources'));

app.get('/', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;  
    if(isEmpty(req.cookies)){
        res.cookie('algorun', uuid.v4());
    }
    
	var templateData = {title: "AlgoRun"};
	res.render('index.html', templateData);
});
app.get('/browse', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;  
    if(isEmpty(req.cookies)){
        res.cookie('algorun', uuid.v4());
    }
    
	var templateData = {title: "Browse Algorithms", browse_nav: "class='active'"};
	res.render('browse.html', templateData);
});
app.get('/getting-started', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    if(isEmpty(req.cookies)){
        res.cookie('algorun', uuid.v4());
    }
    
	var templateData = {title: "Getting Started", getting_started_nav: "class='active'"};
	res.render('getting-started.html', templateData);
});
app.get('/publish-your-algorithm', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    if(isEmpty(req.cookies)){
        res.cookie('algorun', uuid.v4());
    }
    
	var templateData = {title: "Publish Your Algorithm", publish_your_algorithm_nav: "class='active'"};
	res.render('publish-your-algorithm.html', templateData);
});
app.get('/try-it', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    var docker_image = req.query.image;
    var id = req.cookies.algorun;
    var algomanager = "http://manager.algorun.org";
    
    request.post(algomanager + '/api/v1/deploy', 
             { form: { image: docker_image.replace("-", "/"), node_id: id } },
            function(error, response, body){        
                if (!error && response.statusCode == 200) {
                    var deploy_result = JSON.parse(body);
                    res.send(deploy_result);
                } else {
                    res.send("error");
                }
            });
});
app.get('/contact-us', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    
	var templateData = {title: "Contact Us"};
	res.render('contact-us.html', templateData);
});


// Handle 404
app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 404;
    
	var templateData = {title: "Not Found"};
	res.render('404.html', templateData);
});
 
// Handle 500
app.use(function(error, req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 500;
    
	var templateData = {title: "Not Found"};
	res.render('500.html', templateData);
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
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}