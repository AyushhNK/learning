//serving the JSON data
const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'application/JSON'});
	var person={
		name:"ayush",
		roll:13,
		lastname:"neupane"
	};
	res.end(JSON.stringify(person));
}).listen(3000);

console.log("server running at port 3000");