import {useState} from 'react';

const Home=()=>{

	const [name,setName]=useState('ayush');
	const [age,setAge]=useState(20);

	const handleClick=()=>{
		setName('ank');
		setAge(25)
	}
	
	return(
		<div className="home">
			<p>{name} is {age} years old.</p>
			<h2>Home page</h2>
			<button onClick={handleClick}>click me</button>
		</div>
		);
}

export default Home;