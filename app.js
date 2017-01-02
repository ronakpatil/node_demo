var counter = require('./count');
var stuff = require('./stuff');

//var time = 0;
console.log('hey ninjas');



console.log(counter.counter(['Shaun', 'Crystal', 'Reyan']));
console.log(stuff.adder(2,1));
console.log(stuff.adder(stuff.pi,5));
//setTimeout(function(){
//	console.log('3 seconds have passed')
//}, 3000)

// var timer = setInterval(function() {
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000);


// console.log(__dirname);
// console.log(__filename);

// function callFunction(Fun) {
//     Fun();
// };

// var sayBye = function() {
//     console.log('Bye');
// }

// callFunction(sayBye);
