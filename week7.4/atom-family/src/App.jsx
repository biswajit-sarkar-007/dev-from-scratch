import "./App.css";
import { RecoilRoot, useSetRecoilState ,useRecoilState} from "recoil";
import { todosAtomFamily } from "./atom";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <UpdaterComp />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function UpdaterComp() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2));
  useEffect(() => {
    setTimeout(() => {
      updateTodo({
        id: "2",
        title: "new todo",
        description: "update a new todo ",
      });
    }, 5000);
  }, []);

  return <div></div>;
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  );
}

export default App;
