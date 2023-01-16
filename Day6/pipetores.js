//program to send data form text file to the server
const http=require('http');
const fs=require('fs');

var server=http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/plain'});
	var readStream=fs.createReadStream(__dirname+"/read.txt",'utf8');

	readStream.pipe(res);		//sending from pipe to the response 
});

server.listen(2000,()=>{
	console.log("server running at port 2000");
});