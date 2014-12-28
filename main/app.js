var express = require('express'),
    app = express();

var routes = require('./routes');
var path = require('path');

//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


//app.use(express.static('./WEB/WebFiles/'));

app.get('/', routes.mainPage);

app.get('/lifestyle', routes.lifestyle);
app.get('/finearts', routes.finearts);
app.get('/dance', routes.dance);
app.get('/theatre', routes.theatre);
app.get('/quizzing', routes.quizzing);
app.get('/chess', routes.chess);
app.get('/literary', routes.literary);
app.get('/gaming', routes.gaming);
app.get('/digitalarts', routes.digitalarts);
app.get('/treasurehunt', routes.treasurehunt);
app.get('/music', routes.music);
app.get('/team', routes.team);

app.get('/dt', function(req, res){
	app.use(express.static('./public/mainPage/'));
	res.sendFile('/root/odyssey/main/public/mainPage/dt.html');});

//app.listen(3000);
app.listen(80);

