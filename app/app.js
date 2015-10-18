var express = require('express')
  , app = express()
  , doT = require('express-dot')
  , pub = __dirname+'/public'
  , view = __dirname+'/views';

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
	var templateData = {title: "Search"};
	res.render('search.html', templateData);
});
app.get('/contact-us', function(req, res){
	var templateData = {title: "Contact Us"};
	res.render('contact-us.html', templateData);
});

var server = app.listen(31331);