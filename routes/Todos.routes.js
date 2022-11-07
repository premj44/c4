const express = require("express");

const Todo = require("../models/Todos.model");

const app = express();
app.use(express.json());

app.get("/get", async (req, res) => {
  const todo = await Todo.find();
  try {
    res.status(200).send({
      message: "Get All Todos successfully",
      todos: todo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/post", (req, res) => {
  const newTodo = new Todo(req.body);

  newTodo.save((err) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      res.status(201).json({
        message: "Created Todo successfuly",
      });
    }
  });
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id: todoId } = req.params;
    const todo = await Todo.findByIdAndDelete(todoId);
    if (!todo) {
      return res.status(404).json({ message: `did't find todo by: ${todoId} id` });
    } else {
      res.status(200).json({
        message: "Todo deleted successfully",
        todo: todo,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
