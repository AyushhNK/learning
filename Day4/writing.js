const fs=require('fs');		//requiring fs module

//synchronous code	
var readMe=fs.readFileSync('readme.txt','utf8');		//reading a file and storing it in readme variable
fs.writeFileSync('writeme.txt',readMe);					//writing the content in readMe variable to writeme.txt file

//asynchronous code
fs.readFile('readme.txt','utf8',(err,data)=>{
		fs.writeFile('writeme.txt',data);
});		
					