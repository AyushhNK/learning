//chalk have been changed to ESM from chalk@5 so install chalk@4.1.2
const chalk=require('chalk');

console.log(chalk.green("Sucess!"));	//change the color of sucess to green 
console.log(chalk.red.bgCyan("Sucess!")); //change the text color to red and background color to cyan
console.log(chalk.bold("Sucess!"));		//bold the text
console.log(chalk.inverse("Sucess!"));	//inverse the font color and background color