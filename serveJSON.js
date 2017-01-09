var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
    res.writeHead(200, { 'content-Type': 'application/json' });
    var myJson = {
        name: 'Ryu',
        job: 'Ninja',
        age: 37
    };
    res.end(JSON.stringify(myJson));
});

server.listen(3010, '127.0.0.1');
console.log('Hey...Port 3010 is listening!');
