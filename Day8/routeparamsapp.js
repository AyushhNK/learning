//route params
const express=require('express');

const app=express();

app.get('/profile/:username',(req,res)=>{
	res.send('you wanted to see the profile of '+req.params.username);
});
app.listen(3000,()=>{
	console.log('server running at port 3000');
});