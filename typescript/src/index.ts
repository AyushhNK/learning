//data types
let age:number= 123456789;
let course:string="TypeScript"
let condition:boolean=true;

//if not given types then it becomes of type any
let level;


function render(document:any){
    return document;
}


//array in typescript
let Numbers:number[]=[]
Numbers.forEach(n=>n.toExponential) //using typescript make it easy for recommendation


//tuple
let user:[number,string]=[1,'ayush']
user[0].toExponential
user[1].anchor
user.push(1)

//enum
enum Size {small=1,medium,large}
let mySize:Size=Size.medium
console.log(mySize)

//function    
function value(income:number):number{
    return 0;
}