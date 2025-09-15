const express = require("express");
const cors = require("cors")
const { createTodo, updateTodo } = require("./type");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.use(cors());

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  // db setup
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed:false
  });
  res.json({
    msg: "Todo created.",
  });
});

app.put("/complete",async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent wrong input",
    });
    return;
  }

  await todo.update({
    _id:req.body.id
  }, {
    completed:true
  })
  res.json({
    msg:"Your todo is completd."
  })
});

app.listen(3000);
