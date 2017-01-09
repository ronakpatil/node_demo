var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('request was made:' + req.url);
    res.writeHead(200, { 'content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3010, '127.0.0.1');
console.log('Hey...Port 3010 is listening!');
