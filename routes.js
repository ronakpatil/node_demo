var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'content-Type': 'text/html' });
        var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'content-Type': 'text/html' });
        var myReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
        myReadStream.pipe(res);
    } else if (req.url === '/api/ninjas') {
        var ninjas = [{ name: 'Dawn', age: 23 }, { name: 'Joey', age: 34 }]
        res.writeHead(200, { 'content-Type': 'application/json' });
        res.end(JSON.stringify(ninjas));
    }
    else
    {
    	res.writeHead(404, { 'content-Type': 'text/html' });
        var myReadStream = fs.createReadStream(__dirname + '/404.html', 'utf8');
        myReadStream.pipe(res);
    }
});

server.listen(3009, '127.0.0.1');
console.log('Hey...Port 3009 is listening!');
