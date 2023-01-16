const fs=require('fs');

var readStream=fs.createReadStream(__dirname+'/read.txt');
var writeStream=fs.createWriteStream('write.txt');	

//to write the data form read.txt to write.txt
readStream.on('data',function(chunk){
	console.log("chunk of data received in text:");
	writeStream.write(chunk);
})
