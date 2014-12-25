var express = require('express'),
    app = express();
    //nodemailer = require('nodemailer');

app.use(express.static('.'));

app.get('/', function(req, res){
	res.sendFile('page/index.html');});

app.get('/lifestyle', function(req, res){
	res.sendFile('page/lifestyle.html');});

app.get('/gaming', function(req, res){
	res.sendFile('page/gaming.html');});

app.get('/digitalarts', function(req, res){
	res.sendFile('page/digitalarts.html');});

app.get('/finearts', function(req, res){
	res.sendFile('page/finearts.html');});


app.get('/music', function(req, res){
	res.sendFile('page/music.html');});


app.get('/dance', function(req, res){
	res.sendFile('page/dance.html');});

app.get('/chess', function(req, res){
	res.sendFile('page/chess.html');});

app.get('/treasurehunt', function(req, res){
	res.sendFile('page/treasurehunt.html');});

app.get('/literary', function(req, res){
	res.sendFile('page/literary.html');});

app.get('/quizzing', function(req, res){
	res.sendFile('page/quizzing.html');});

app.get('/theatre', function(req, res){
	res.sendFile('page/theatre.html');});


app.listen(80);
