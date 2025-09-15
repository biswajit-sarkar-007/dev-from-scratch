import { useState } from "react";

// state, components

// -----> in react this is not currect way to define a state variable
// let state = {
//   count:0
// }

function CountButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyOwnButton count={count} setCount={setCount} />
      <MyOwnButton count={count + 1} setCount={setCount} />
      <MyOwnButton count={count + 2} setCount={setCount} />
      <MyOwnButton count={count + 3} setCount={setCount} />
    </div>
  );
}
 
// component

function MyOwnButton(props) {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default CountButton;
