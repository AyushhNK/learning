var time=0;
var timer=setInterval(function(){
	time=time+3;
	console.log(time+"second have passed");
	if (time>=10) {
		clearInterval(timer);					//clearInterval global function acts as the exit to the loop created by setInterval
	}
},3000);

