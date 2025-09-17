const express = require("express");

const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const todos = [
  {
    id: 1,
    title: "Go to gym",
    description: "Go to gym at 7:30pm",
  },
  {
    id: 2,
    title: "Go to college",
    description: "Go to college at 9:00am",
  },
  {
    id: 3,
    title: "Go to football",
    description: "Go to college at 9:00am",
  },
  {
    id: 4,
    title: "Go to ride",
    description: "Go to college at 9:00am",
  },
  {
    id: 5,
    title: "Go to hell",
    description: "Go to college at 9:00am",
  },
];

app.get("/todos", function (req, res) {
  const id = req.query.id;

  if (id) {
    const todo = todos.find((t) => t.id === parseInt(id));
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    return res.json(todo);
  }
  res.json(todos);
});

app.listen(3000);
