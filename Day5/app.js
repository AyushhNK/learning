const http=require('http');			//requiring a http module

var server=http.createServer(function(req,res){		//creating a server 
	console.log("request was made: "+req.url);
	res.writeHead(200,{'content-type':'text/plain'});		//status and content type in response heading
	res.end('hello world');			//response end
});

server.listen(2000,'127.0.0.1');		//listening to port number 2000 in localhost
console.log('app listening to port 2000');