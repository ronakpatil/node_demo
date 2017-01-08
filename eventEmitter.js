var events = require('events');
var util = require('util');
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(msg){
//     console.log(msg);
// })

// myEmitter.emit('someEvent','the event was emmited');
var person = function(name) {
    this.name = name;
}


//person inherits events.EventEmitter
util.inherits(person, events.EventEmitter);

var james = new person('james');
var Andrew = new person('Andrew');
var jamyy = new person('jamyy');
people = [james, Andrew, jamyy];

people.forEach(function(person) {
    person.on('speak', function(arg) {
        // body...
        console.log(person.name + ' said: ' + arg);
    });
});

james.emit('speak', 'Hey dude');
Andrew.emit('speak', 'Hey ninjas');
