//serving a html page
const http=require('http');
const fs=require('fs');

var server=http.createServer((req,res)=>{
	res.writeHead(200,{'Content-Type':'text/html'});
	var readstream=fs.createReadStream(__dirname+'/index.html');
	readstream.pipe(res);
});

server.listen(3000);
console.log("server started at port 3000");