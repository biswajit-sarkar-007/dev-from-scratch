// import { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import './App.css'

// const Dashboard = lazy(() => import('./components/Dashbord'))
// const Landing = lazy(() => import('./components/Landing'))

// function App() {

//   // Suspense API
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//             <Route path="/dashboard" element={ <Suspense fallback={"loading..."}><Dashboard /></Suspense> } />
//             <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return <div>
//       <div>
//         <button onClick={() => {
//           navigate("/");
//         }}>Landing page</button>

//         <button onClick={() => {
//           navigate("/dashboard");
//         }}>Dashboard</button>

//       </div>
//   </div>
// }

// export default App



// -----------------------------------------------------------
// props drilling

// import { useState } from "react";
// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Count count={count} />
//       <Button count={count} setCount={setCount} />
//     </div>
//   );
// }

// function Count({count}) {
//   return <div>{count}</div>;
// }

// function Button({count,setCount}) {
//   return (
//     <div>
//       <button onClick={()=>{setCount(count + 1)}}>Increment</button>
//       <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
//     </div>
//   );
// }




//--------------------------------------------------------
// context api

import { useContext, useState } from "react"
import { CountContext } from "./context";


function App() {
  const [count, setCount] = useState(0);
  
  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>
    {count}
  </div>
}

function Buttons({setCount}) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App