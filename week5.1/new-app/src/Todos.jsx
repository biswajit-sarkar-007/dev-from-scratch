import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "go to the gym 5-9",
      complete: false,
    },
    {
      title: "Study the DSA",
      description: "practice DSA algo from 10-2",
      complete: true,
    },
    {
      title: "Study the COM",
      description: "practice DSA algo from 10-2",
      complete: true,
    },
    {
      title: "Study the WEB3",
      description: "practice DSA algo from 10-2",
      complete: true,
    },
  ]);

  function addTodo(){
    setTodos([... todos, {
        title:"new todo",
        description:"new todo des",
        complete:false
    }])
  }
  return (
    <div>
      {/* {JSON.stringify(todos)} */}
      {/* <TodoStruct
        title={todos[0].title}
        description={todos[0].description}
        complete={todos[0].complete}
      />
      <TodoStruct
        title={todos[1].title}
        description={todos[1].description}
        complete={todos[1].complete}
      />
      <TodoStruct
        title="todo title2"
        description="todo description2"
        complete="true"
      />
      <TodoStruct
        title="todo title3"
        description="todo description3"
        complete="true"
      /> */}

 {/*   newArr=[1.,2,3,4,5,6,].map((e)=>e*2) */}
      {todos.map(function(todo) {
        return (
          <TodoStruct
            title={todo.title}
            description={todo.description}
            complete={todo.complete}
          />
        );
      })}
      <button onClick={addTodo}>Add new todo</button>
    </div>
  );
}

function TodoStruct(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.complete}</p>

    </div>
  );
}
export default Todos;
