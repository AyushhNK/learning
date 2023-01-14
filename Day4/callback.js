function print(name){
	console.log(`hello my name is ${name}`);
}

function input(callback){
	var name= prompt('"what is your name:"');
	callback(name);
}

input(print);
