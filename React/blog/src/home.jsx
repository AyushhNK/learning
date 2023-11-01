import {useState,useEffect} from 'react';
import BlogList from './bloglist.jsx';
import useFetch from './useFetch.jsx';

const Home=()=>{

	const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs');
	
	
	return(
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs"/>}
			

		</div>
		);
}

export default Home;