const events=require('events');
const util=require('util');

var person=function(name){
	this.name=name;
};

util.inherits(person,events.EventEmitter);

var ayush=new person('ayush');
var ram=new person('ram');
var ank=new person('ank');
var people=[ayush,ram,ank];

people.forEach(function(person){
	person.on('speak',function(msg){
		console.log(person.name+' said: '+msg);
	});
});

ayush.emit('speak','hey dude');
ram.emit('speak','hello');
ank.emit('speak','hi');
