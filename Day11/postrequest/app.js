//post request and bodyparaser
const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })	//this is needed to use body-parser

app.get('/profile',(req,res)=>{
	var data={age:20,license:2100048,hobby:"coding"};
	res.render('profile',{data:data});
});
app.get('/contact',(req,res)=>{
	res.render('contact');
});
app.post('/contact',urlencodedParser,(req,res)=>{
	console.log(req.body);							//this takes the value that we enter in the form in contact.ejs and store it as a object
	res.render('contact-sucess',{person:req.body});	//after submit button is clicked contact.sucess.ejs is serverd and render acoording to entered data
});

app.listen(3000,()=>{
	console.log("server running at port 3000"); 
})