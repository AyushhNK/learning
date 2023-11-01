import Navbar from './navbar';
import Home from './home';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './notfound';
import {BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';

function App() {
  return (
  	<Router>
	    <div className="App">
	      <Navbar />
	      <div className="content">
	      	<Switch>
	      		<Route exact path="/">
	      			<Home/>
	      			
	      		</Route>
	      		<Route path="/create">
	      			<Create/>
	      			
	      		</Route>
	      		<Route path="/blogs/:id" element={<BlogDetails />}>
	      			<BlogDetails/>
	      			
	      		</Route>
	      		<Route path='*'>
	      			<NotFound/>
	      		</Route>
	      	</Switch>
	      </div>
	    </div>
    </Router>
  )
}

export default App
