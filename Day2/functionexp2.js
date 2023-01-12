//calling one function from another function
function sayName(fun){
	fun();
}
function name(){
	console.log("my name is ayush");
}
sayName(name);


// //call using function expression
// var name=function(){
// 	console.log("my name is ayush ");
// };