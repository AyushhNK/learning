//third method of exporting module by using object literal
var name=function(){
	return("my name is ayush neupane");
};

var add=function(a,b){
	return `the value of addition is ${a+b}`;
};

var mul=function(a,b){
	return `the value after multiplication is ${a*b}`;
};

module.exports={
	name:name,
	add:add,
	mul:mul
};