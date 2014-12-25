var express = require('express'),
    app = express(),
    nodemailer = require('nodemailer');

app.use(express.static('.'));

app.get('/', function(req, res){
	res.sendFile('index.html');});

var smtpTransport = nodemailer.createTransport({
service: "Gmail",
auth: {
  user: "odyssey@iiitd.ac.in",
pass: "####pw"
}

});

app.post("/mail",function(res, req){
//  console.log(req.query.to);
  var mailOptions = {
    from: 'Odyssey  odyssey@iiitd.ac.in', // sender address
    to: 'naman13064@iiitd.ac.in,odyssey@iiitd.ac.in,'+req.query.to, // list of receivers
    subject: 'Hello! Thanks for Contacting Us.', // Subject line
    text: 'Hello! Thanks for showing interest in us. We will contact you shortly!', // plaintext body
//    html: '<b>Hello world </b>' // html body
  };
//  console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
}else{
console.log("Mail sent to: " + response.to);
}
});

});

app.listen(80);
