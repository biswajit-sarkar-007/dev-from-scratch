// import { memo, useState } from "react";

// function App() {
//   const [title, setTitle] = useState("my name is biswajit");

//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title} />
//       <Header title="my name is adi" />
//       <Header title="my name is adi" />
//       <Header title="my name is adi" />
//       <Header title="my name is adi" />
//       <Header title="my name is adi" />
//       <Header title="my name is adi" />
//       <Header title="my name is adi" />
//       <Header title="my name is adi" />
//       <Header title="my name is adi" />
//       <Header title="my name is adi" />

//       <Header title="my name is adi" />
//     </div>
//   );
// }

// const Header = memo(function Header({ title }) {
//   return <div>{title}</div>;
// });

// export default App;

//TODO-App

//1.state
//2.re render
//3.components
// ---------------------------------------------------------------------------------------------

// import { useState } from "react";
// let counter = 0;
// export default function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "go to gym",
//       description: "7-9 hit the gym daily",
//     },
//     {
//       id: 2,
//       title: "go to gym",
//       description: "7-9 hit the gym daily",
//     },
//     {
//       id: 3,
//       title: "go to gym",
//       description: "7-9 hit the gym daily",
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: counter++,
//         title: "new todo",
//         description: "new todo description",
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//        {todos.map(todo=> <Todo key={todo.id} title={todo.title}  description={todo.description}/> )}

//     </div>
//   );

//   function Todo(props) {
//     return (
//       <div>
//         <h1>{props.title}</h1>
//         <p>{props.description}</p>
//       </div>
//     );
//   }
// }

//-------------------------------------------------------------------------

// bad way to define a wrapper
// export default function App() {
//   return (
//     <div>
//       <CardWapper innerComponent={<TextComponents />} />
//       <CardWapper innerComponent={<TextComponents />} />
//       <CardWapper innerComponent={<TextComponents />} />
//       <CardWapper innerComponent={<TextComponents />} />
//     </div>
//   );

//   function TextComponents() {
//     return <div>hi there good morning!</div>;
//   }
//   function CardWapper({ innerComponent }) {
//     return <div style={{ border: "2px solid black", padding:"25px" }}>{innerComponent}</div>;
//   }
// }

//------------------------------------------------------------------------------

// good way to wrapping
// export default function App() {
//   return (
//     <div>
//       <CradWrapper>hi there good morning!</CradWrapper>
//     </div>
//   );

//   function CradWrapper({children}) {
//     return <div style={{ border: "2px solid black", padding: "25px" }}>
//       {children }
//     </div>;
//   }
// }

// ----------------------------------------------------------------------------------

//hooks
// import { useEffect } from "react"

// export default function App(){

//   useEffect(function(){
//     alert("hi there")
//   },[])

//   return(
//     <div>
//        hi there
//     </div>
//   )
// }

//pooling from backend server

// useEffect(()=>{
//     setInterval(()=> {
//         fetch("http://todos-backend-server.com")
//            .then(async function(res){
//             const json = await res.json();
//             setTodos(json)
//            })
//     }, 1000)
// },[])

export default function App() {
  return <div>there all all code in commenst//</div>;
}
