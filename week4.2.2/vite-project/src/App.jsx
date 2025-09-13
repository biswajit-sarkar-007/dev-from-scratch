import { useState } from 'react'
 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     {/* ()=>setCount((count)=>count+1) */}
    <button onClick={function(){
      setCount(Math.random)
    }}>Count is {count}</button>
   </div>
  )
}

export default App
