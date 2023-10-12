import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  )
}

export default App
