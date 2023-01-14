let p=new Promise((resolve,reject)=>{
	let a=1+3;
	if(a==2)
		resolve("ok");
	else
		reject("error");
})

//first method of using promise
p.then(
	(msg)=>{
	console.log("the result is "+msg);
	},

	(msg)=>{
		console.log("the result is "+msg);
	});

//second method of using promise
p.then((msg)=>{
	console.log("the result is "+msg);
	}).catch((msg)=>{
		console.log("the result is "+msg);
	});