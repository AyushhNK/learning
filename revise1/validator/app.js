//requiring the validator module after install validator
const validator=require('validator');

//using isEmail method inside the validator module
let validEmail=validator.isEmail('neupaneayush3@gmail.com');
if(validEmail==true)
	console.log('the entered email is valid');
else
	console.log('the entered email is not valid');


//using isURL method in the validator module
let validUrl=validator.isURL('http://example.com');
if(validUrl==true)
	console.log('the entered URL is valid');
else
	console.log('the entered URL is not valid');