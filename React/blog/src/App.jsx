import Navbar from './navbar';
import Home from './home';
import Create from './create';
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
	      	</Switch>
	      </div>
	    </div>
    </Router>
  )
}

export default App
