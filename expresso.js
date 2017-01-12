var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('This is the message');
});

app.get('/contact', function(req, res){
	res.send('This is a contact page');
});

app.listen(3009);
console.log('Hey...Port 3009 is listening!');