import {useState,useEffect} from 'react';
import BlogList from './bloglist.jsx';

const Home=()=>{

	const [blogs,setBlogs]=useState(null)
	const [isPending,setIsPending]=useState(true);
	const [error,setError]=useState()
		
	useEffect(()=>{
		fetch("http://localhost:8000/blogss").then(res=>{
			console.log(res)
			if(!res.ok){
				throw Error('could not fetch data for that resource')
			}
			return res.json();
		}).then(data=>{
			setBlogs(data)
			setIsPending(false);
			setError(null)
		}).catch(err=>{
			setIsPending(false)
			setError(err.message)
		})
	},[]);

	
	return(
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>loading...</div>}
			{blogs && <BlogList blogs={blogs} title="All Blogs"/>}
			

		</div>
		);
}

export default Home;