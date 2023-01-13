const method1=require('./method1');		//requiring module form method1.js
const method2=require('./method2');		//requiring module form method2.js
const method3=require('./method3');		//requiring module form method3.js

//using module form method1.js
console.log(method1.name());
console.log(method1.add(2,5));
console.log(method1.mul(2,5));

//using module form method2.js
console.log(method2.name());
console.log(method2.add(3,5));
console.log(method2.mul(3,5));

//using module form method3.js
console.log(method3.name());
console.log(method3.add(4,5));
console.log(method3.mul(4,5));