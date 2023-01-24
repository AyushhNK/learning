//requiring the modules
const express=require('express');
const mongoose=require('mongoose');
const data=require('./data.js')

const app=express();

//connecting to the database
const dbUrl='mongodb+srv://Ayush:helloworld55@cluster0.ymbuzeq.mongodb.net/node?retryWrites=true&w=majority';
mongoose.connect(dbUrl)
 .then((result)=>app.listen(3000))
 .catch((err)=>console.log(err));

//entering data to the database using mongoose
 app.get("/add",(req,res)=>{
 	const newdata=new data({
 		name:'vin',
 		age:20
 	});
 	newdata.save()
 		.then((result)=>{
 			res.send(result);
 		})
 		.catch((err)=>{
 			console.log(err);
 		});
 });

 //finding all the data in the database
 app.get('/find',(req,res)=>{
 	data.find()
 		.then((result)=>{
 			res.send(result);
 		})
 		.catch((err)=>{
 			console.log(err);
 		});
 });

 //finding the data with the id and displaying it as response
  app.get('/findSingle',(req,res)=>{
 	data.findById("63ce630fe15dbbac435ec69f")
 		.then((result)=>{
 			res.send(result);
 		})
 		.catch((err)=>{
 			console.log(err);
 		});
 });


