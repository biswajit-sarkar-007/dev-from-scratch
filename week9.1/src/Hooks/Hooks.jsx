import { useEffect, useState } from "react";
 
import axios from "axios";

// own hooks
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    //   axios.get("http://localhost:8080/todos").then((response) => {
    //     setTodos(response.data.todos);
    //     setLoading(false);
    //   });
    // }, 3000);

    // poll the backend server every 5  sec
    const value = setInterval(() => {
      axios.get("http://localhost:8080/todos").then((response) => {
        setTodos(response.data.todos);
        setLoading(false);
      });
    }, n * 1000);
    axios.get("http://localhost:8080/todos").then((response) => {
      setTodos(response.data.todos);
      setLoading(false);
    })

    return ()=> {
      clearInterval(value);
    }
  }, [n]);
  return { todos, loading };
}

function Hooks() {
  const { todos, loading } = useTodos(5);

  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

// function MyComponenet() {
//   const [count, setCount] = useState(0);
//   //life cycle
//   useEffect(() => {
//     console.log("component mounted");
//     return () => {
//       console.log("component unmounted");
//     };
//   }, [count]);
//   return (
//     <div>
//       <p>{count} </p>
//       <button
//         onClick={() => {
//           setCount((count) => count + 1);
//         }}
//       >
//         Click Me
//       </button>
//     </div>
//   );
// }

function Todo({ todo }) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
}

export default Hooks;
