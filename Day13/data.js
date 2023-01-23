const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//creating a schema for database
const newSchema=new Schema({
	name:{
		type:String,
		required:true
	},
	age:{
		type:Number,
		required:true
	}
},{timestamps:true});

//creating a model
const data=mongoose.model('data',newSchema);

module.exports=data;