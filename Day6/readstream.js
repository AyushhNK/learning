const fs=require('fs');

var readBufferStream=fs.createReadStream(__dirname+'/read.txt');
var readTextStream=fs.createReadStream(__dirname+'/read.txt','utf8');	//to convert the data into the human readable text

//to log the data in buffer
readBufferStream.on('data',function(chunk){				
	console.log("chunk of data received in buffer:");
	console.log(chunk);
})

//to log the data in human readable text
readTextStream.on('data',function(chunk){
	console.log("chunk of data received in text:");
	console.log(chunk);
})
