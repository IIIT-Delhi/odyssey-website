var express = require('express'),
    app = express();


app.get('/', function(req, res){
	app.use(express.static('./landing/'));
	res.sendFile('/landing/index.html');});

app.get('/lifestyle', function(req, 
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/lifestyle.html');});

app.get('/gaming', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/gaming.html');});

app.get('/digitalarts', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/digitalarts.html');});

app.get('/finearts', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/finearts.html');});


app.get('/music', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/music.html');});


app.get('/dance', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/dance.html');});

app.get('/chess', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/chess.html');});

app.get('/treasurehunt', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/treasurehunt.html');});

app.get('/literary', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/literary.html');});

app.get('/quizzing', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/quizzing.html');});

app.get('/theatre', function(req, res){
	app.use(express.static('./categories/'));
	res.sendFile('/root/odyssey/main/categories/theatre.html');});

app.get('/dt', function(req,res){
	res.sendFile('/root/odyssey/main/landing/dt.html');});


app.get('/team', function(req,res){
	app.use(express.static('./team-page/'));
	res.sendFile('/root/odyssey/main/team-page/index.html');});


app.listen(80);
