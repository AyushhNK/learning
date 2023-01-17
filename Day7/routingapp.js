//basic routing in node js
const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
	console.log('request was made at '+req.url);
	if(req.url==='/home'||req.url==='/'){						///home route serving a html page
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/index.html').pipe(res);
	}
	else if(req.url==='/contact'){								///contact route serving an html page
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/contact.html').pipe(res);
	}
	else if(req.url==='/api'){									///api route serving the json data
		res.writeHead(200,{'Content-Type':'application/JSON'});
		var data=[{name:'ayush',roll:13},{name:'ank',roll:31}];
		res.end(JSON.stringify(data));
	}
	else if(req.url==='/text'){									///text route serving a txt file
		res.writeHead(200,{'Content-Type':'text/plain'});
		fs.createReadStream(__dirname+'/read.txt').pipe(res);
	}
	else{														//error route
		res.writeHead(404,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/404.html').pipe(res);
	}
}).listen(3000);

console.log("server running at port 3000");
