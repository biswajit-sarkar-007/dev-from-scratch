// import { useEffect, useState } from "react";

 

// function App() {
//   const [id, setId] = useState(1);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setId(id + 1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={() => {
//           setId(id + 1);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={() => {
//           setId(id + 1);
//         }}
//       >
//         3
//       </button>
//       <button
//         onClick={() => {
//           setId(id + 1);
//         }}
//       >
//         4
//       </button>
//       <button
//         onClick={() => {
//           setId(id + 1);
//         }}
//       >
//         5
//       </button>
//       <Todo id={id} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch(`http://localhost:3000/todos?id=${id}`).then(async (res) => {
//       const json = await res.json();
//       setTodo(json); // because backend returns the todo object directly
//     });
//   }, [id]); // dependency array

//   return (
//     <div>
//       <h2>{todo.title}</h2>
//       <h5>{todo.description}</h5>
//     </div>
//   );
// }

// export default App;

// ------------------------------------------------------------------------------------

// export default function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);
//   const [count, setCount] = useState(0)

//   //  let count = 0;
//   //  for(let i = 1;i<=inputValue;i++){
//   //   count = count + i;
//   //  }
//    let finalCount  = 0;

//   useEffect(() => {
   
//     for (let i = 1; i <= inputValue; i++) {
//       finalCount =  finalCount + i;
//     }
//     setCount(finalCount);
//   }, [inputValue]);

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={function (e) {
//           setInputValue(e.target.value);
//         }}
//         placeholder="Find the sum of 1 to n: "
//       />{" "}
//       <br />
//       <p>
//         Sum of 1 to n {inputValue} is : {count}{" "}
//       </p>
//       <button onClick={() => setCounter(counter + 1)}>
//         Counter {counter}{" "}
//       </button>
//     </div>
//   );
// }

// ---------------------------------------------------------------------------------------------
import { memo, useEffect, useState } from "react";
export default function App(){
  function logSomething(){
    console.log("child re render");
    
  }
  return(
    <div>
      <ButtonComp inputFn={logSomething}/>

    </div>
  
  )
}
   
  const  ButtonComp = memo(({inputFn}) =>{
    console.log("child render");
    
    return(
      <div>
        <button onClick={inputFn}>Clicked Me</button>
      </div>
    )
  })
