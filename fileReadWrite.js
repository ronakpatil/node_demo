var fs = require('fs');


//Synchronous function calls
// var readMe = fs.readFileSync('readMe.txt','utf8');
// fs.writeFileSync('writeMe.txt',readMe);
// console.log(readMe);	

var readMe = fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('writeMe.txt', data);
});
	