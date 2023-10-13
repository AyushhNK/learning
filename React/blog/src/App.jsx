import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const title="Welcome to the blog!!";
  const likes=50;
  {/*//objects are not valid in react
    // const obj={name:"ayush",age:10}
    // */}
    const link="http://www.google.com";


  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{likes}</p>
        <p>{Math.random()*10}</p>
        <a href={link}>Google link</a>


      </div>
    </div>
  )
}

export default App
