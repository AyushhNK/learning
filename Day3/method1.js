//first method of exporting module
var name=function(){
	return("my name is ayush neupane");
};

var add=function(a,b){
	return `the value of addition is ${a+b}`;
};

var mul=function(a,b){
	return `the value after multiplication is ${a*b}`;
};

module.exports.name=name;
module.exports.add=add;
module.exports.mul=mul;