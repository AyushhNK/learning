//requiring the modules and package
const express=require('express');
var controller=require('./controller/index.js');

const app=express();

//static files
app.use('/assets',express.static("assets"));

//setting the view engine
app.set('view engine','ejs');


//fire controller
controller(app);

//server running at port 3000
app.listen(3000,()=>{
	console.log("listening to port 3000");
});