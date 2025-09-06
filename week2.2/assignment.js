// create a todo app that lets users store todos on the server

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let todos = [];

// get all the todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text, isDone: false };
  todos.push(newTodo);
  res.json(newTodo);
});
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  todos = todos.filter((todo) => todo.id !== id);
  res.json({ message: " Todo deleted sucessfully" });
});

app.listen(port, () => {
  console.log(`servre is listening on port  ${port}`);
});
