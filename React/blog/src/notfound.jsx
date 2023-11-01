import {Link} from 'react-router-dom';

const NotFound=()=>{
	return(
		<div>
		<p>page not found</p>
		<Link to="/">go back to the homepage</Link>
		
		</div>


		);
}

export default NotFound;