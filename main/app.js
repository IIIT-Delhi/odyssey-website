var express = require('express'),
    app = express();
    //nodemailer = require('nodemailer');

app.use(express.static('.'));

app.get('/', function(req, res){
	res.sendFile('index.html');});


app.get('/lifestyle', function(req, res){
	res.sendFile('lifestyle.html');});


app.get('/gaming', function(req, res){
	res.sendFile('gaming.html');});


app.get('/digitalarts', function(req, res){
	res.sendFile('digitalarts.html');});


app.get('/finearts', function(req, res){
	res.sendFile('finearts.html');});


app.get('/music', function(req, res){
	res.sendFile('music.html');});


app.get('/dance', function(req, res){
	res.sendFile('dance.html');});

app.get('/chess', function(req, res){
	res.sendFile('chess.html');});

app.get('/treasurehunt', function(req, res){
	res.sendFile('treasurehunt.html');});

app.get('/literary', function(req, res){
	res.sendFile('literary.html');});

app.get('/quizzing', function(req, res){
	res.sendFile('quizzing.html');});

app.get('/theatre', function(req, res){
	res.sendFile('theatre.html');});


app.listen(80);
