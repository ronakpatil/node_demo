var express = require('express');

var app = express();

//set view engine as ejs (embeded javascript)
app.set('view engine', 'ejs');

// app.get('/', function(req, res){
// 	res.send('This is the message');
// });

// app.get('/contact', function(req, res){
// 	res.send('This is a contact page');
// });

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

// app.get('/contact', function(req, res) {
//     res.sendFile(__dirname + '/contact.html');
// });

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/profile/:id', function(req, res) {

    var data = { job: 'Noddy', age: 23, hobbies: ['eating', 'fighting', 'fishing']};
    //'profile' is name of view (ejs view)
    res.render('profile', { person: req.params.id, data: data});
});

app.listen(3009);
console.log('Hey...Port 3009 is listening!');
