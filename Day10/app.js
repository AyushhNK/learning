//middleware
const express=require('express');

const app=express();

app.use('/assets',express.static('assets'));	//using the middleware

app.set('view engine','ejs');		//setting the view engine to ejs

app.get('/profile',(req,res)=>{
	var data={age:20,occupation:'developer',hobbies:['eating','playing','music']};						
	res.render("profile",{data:data});	//rendering the data in profile.ejs in views folder
});
app.get('/contact',(req,res)=>{

	res.render("contact",{qs:req.query});	//query string
})
app.listen(3000,()=>{
	console.log('server running at port 3000');
});