var express = require('express')
  , app = express()
  , doT = require('express-dot')
  , pub = __dirname+'/public'
  , view = __dirname+'/views';
var db = require('./models/db.js');
var email = require('./email/email.js');
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
    
	var templateData = {title: "AlgoRun", home_nav: "class='active'"};
	res.render('index.html', templateData);
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
app.get('/search', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    if(isEmpty(req.cookies)){
        res.cookie('algorun', uuid.v4());
    }
    
    var search_criteria = req.query.q;
    db.searchName(search_criteria, function(name_rows){
        db.searchKeyword(search_criteria, function(keywords_rows){
            search_criteria = search_criteria.substring(0, 20) + ' ...';
            if(name_rows.length == 0 && keywords_rows.length == 0){
                var results = "<div class='row''><div class='col-sm-12'><h2>Sorry! We cannot find related algorithms :(</h2><h3>Please, check back soon. We keep updating our repository ..<br>You can try using 'bio' or 'engineering' for the search or check <a href='/#recent-works'>our recently published algorithm</a></h3></div></div>";
                var templateData = {title: "Search", q: search_criteria, result: results};
	            res.render('search.html', templateData);
            } else {
                var results = "";
                var buttons = [];
                var rows = arrayUnique(name_rows.concat(keywords_rows));
                rows.forEach(function(entry) {
                    var result_instance = "<div class='row' style='outline: 1px solid #25aae1; margin-bottom: 10px;'><div class='col-sm-8'><h1 class='search-results'>" + entry.name +"</h1><h3>" + entry.description + "</h3><h4>" + entry.keywords + "</h4></div><div class='col-sm-4'><button class='btn btn-primary' style='width: 100%; margin-top:10vh;' id='" +entry.docker_image.replace('/','-') + "'>try it</button></div></div>";
                    results += result_instance;
                    buttons.push(entry.docker_image.replace('/', '-'));
                });
                var templateData = {title: "Search", q: search_criteria, result: results, buttons: buttons};
	            res.render('search.html', templateData);
            }
        });
    });
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
/*app.post('/send-contact', upload.array(), function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    
    var name = req.body.name;
    var mail = req.body.email;
    var message = req.body.message;
    
    email.sendContactConfirmation(name, mail, message, function(result){
        if(result === "success"){
            res.send("We received your message. Thank you!");
        } else {
            res.send("Something went wrong and we can't get your message. Try agian later!");
        }
    });
});*/
app.post('/publish-request', upload.array(), function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status = 200;
    
    var name = req.body.name;
    var mail = req.body.email;
    var docker = req.body.docker;
    var experience = req.body.experience;
    
    email.sendPublishConfirmation(name, mail, docker, experience, function(result){
        if(result === "success"){
            res.send("We received your algorithm details. Thank you!");
        } else {
            res.send("Something went wrong and we can't get your algorithm details. Try agian later!");
        }
    });
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
function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(JSON.stringify(a[i]) === JSON.stringify(a[j]))
                a.splice(j--, 1);
        }
    }
    return a;
}