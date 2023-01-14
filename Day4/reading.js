const fs=require('fs');  //for reading and writing a file we need to require fs module

//synchronous code 
var readMe=fs.readFileSync('readme.txt',"utf8");		//the two paramerter are txt filename and character encoding and storing it in a variable
console.log(readMe); 

//asynchronous code
fs.readFile('readme.txt','utf8',(err,data)=>{
	console.log(data);
});		

