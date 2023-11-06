const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const ToDoList = mongoose.model("ToDoList", taskSchema);

module.exports = ToDoList;
