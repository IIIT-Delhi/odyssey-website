var express = require('express'),
    app = express();

app.use(express.static('./landing/'));

app.get('/', function(req, res){
	res.sendFile('/landing/index.html');});

app.get('/lifestyle', function(req, res){
	res.sendFile('/root/odyssey/main/page/lifestyle.html');});

app.get('/gaming', function(req, res){
	res.sendFile('/root/odyssey/main/page/gaming.html');});

app.get('/digitalarts', function(req, res){
	res.sendFile('/root/odyssey/main/page/digitalarts.html');});

app.get('/finearts', function(req, res){
	res.sendFile('/root/odyssey/main/page/finearts.html');});


app.get('/music', function(req, res){
	res.sendFile('/root/odyssey/main/page/music.html');});


app.get('/dance', function(req, res){
	res.sendFile('/root/odyssey/main/page/dance.html');});

app.get('/chess', function(req, res){
	res.sendFile('/root/odyssey/main/page/chess.html');});

app.get('/treasurehunt', function(req, res){
	res.sendFile('/root/odyssey/main/page/treasurehunt.html');});

app.get('/literary', function(req, res){
	res.sendFile('/root/odyssey/main/page/literary.html');});

app.get('/quizzing', function(req, res){
	res.sendFile('/root/odyssey/main/page/quizzing.html');});

app.get('/theatre', function(req, res){
	res.sendFile('/root/odyssey/main/page/theatre.html');});

app.get('/dt', function(req,res){
	res.sendFile('/root/odyssey/main/landing/dt.html');});


app.get('/team', function(req,res){
	app.use(express.static('./team-page/'));
	res.sendFile('/root/odyssey/main/team-page/index.html');});


app.listen(80);
