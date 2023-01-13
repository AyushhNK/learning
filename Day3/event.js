const events=require('events');		//requiring events module

var myEmitter=new events.EventEmitter();   //creating our own variable with events module and EventEmitter function 

myEmitter.on('someevent',function(msg){
	console.log(msg);
});

myEmitter.emit('someevent','my name is ayush neupane');