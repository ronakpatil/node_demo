var express = require('express');

var app = express();

// app.get('/', function(req, res){
// 	res.send('This is the message');
// });

// app.get('/contact', function(req, res){
// 	res.send('This is a contact page');
// });

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:id', function(req, res){
	res.send('You requested to see id of '+ req.params.id);
});

app.listen(3009);
console.log('Hey...Port 3009 is listening!');