import {useState} from 'react';
import BlogList from './bloglist.jsx';

const Home=()=>{

	const [blogs,setBlogs]=useState([
		{body:"i am ayush",title:"ayushname",author:"ayush",id:0},
		{body:"i am hari",title:"hariname",author:"hari",id:1},
		{body:"i am sita",title:"sitaname",author:"sita",id:2}])
		

	
	return(
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs"/>

		</div>
		);
}

export default Home;