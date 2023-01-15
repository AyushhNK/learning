const fs=require('fs');

//asynchronous mode

// //creating a directory
// fs.mkdir('ayush',()=>{
// 	console.log("directory is created");
// });


//deleting a directory
fs.rmdir('ayush',()=>{
	console.log("directory is deleted");
});