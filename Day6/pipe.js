const fs=require('fs');

var readStream=fs.createReadStream(__dirname+'/read.txt');
var writeStream=fs.createWriteStream('writepipe.txt');	

//to write the data form read.txt to writepipe.txt
readStream.pipe(writeStream);
