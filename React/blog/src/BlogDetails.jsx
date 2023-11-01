import {useParams,useHistory} from "react-router-dom";
import useFetch from './useFetch';

const BlogDetail=()=>{
	const {id}=useParams();
	const history=useHistory()
	const {data:blog, error, isPending}=useFetch('http://localhost:8000/blogs/'+id);
	const handleClik=()=>{
		fetch('http://localhost:8000/blogs/'+blog.id,{
			method:'DELETE'
		}).then(()=>{
			history.push('/')
		})
	}
	return(
		<div className="blog-detail">
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleClik}>delete</button>
				</article>
				)}
		</div>
		);
}

export default BlogDetail;

