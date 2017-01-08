var http = require('http')
var fs = require('fs')


//advaantage of sreams over simple read/write: one can read data in small chunks using streams
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');


// myReadStream.on('data', function(chunk) {
//     console.log('new chunk received:');
//     console.log(chunk);
// })

// myReadStream.on('data', function(chunk) {
//     console.log('new chunk received');
//     myWriteStream.write(chunk);
// });

myReadStream.pipe(myWriteStream);