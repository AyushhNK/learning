const express=require('express');

const app=express();

app.get('/',(req,res)=>{
	res.send('this is home');
});

app.get('/contact',(req,res)=>{
	res.send('this is contact page');
});

app.listen(3000,()=>{
	console.log('server running at port 3000');
});