const Home=()=>{
	const handleClick=(e)=>{
		console.log("hello world",e.target);
	}
	const handleClickAgain=(name)=>{
		console.log("hello"+name);
	}
	return(
		<div className="home">
			<h2>Home page</h2>
			<button onClick={handleClick}>click me</button>
			<button onClick={()=>handleClickAgain("ayush")}>click me again</button>
		</div>
		);
}

export default Home;