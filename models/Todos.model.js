const mongoose = require("mongoose");

const todoModel = mongoose.Schema({
  taskname: { type: String, required: true },
  status: { type: String },
  tag: { type: String },

});

const Todo = mongoose.model("c4", todoModel);

module.exports = Todo;
