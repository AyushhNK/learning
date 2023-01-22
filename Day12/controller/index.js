const bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var data=['write homeworrk','go to walk','dance'];

module.exports=function(app){
	app.get('/todo',(req,res)=>{
		res.render('todo',{data:data});
	});
	app.post('/todo',urlencodedParser,(req,res)=>{
		console.log(req.body);
		data.push(req.body.todo);
		res.render('todo-enter',{data:data});
	})
};