const db = require("../config/mongoose");
const ToDoList = require("../models/task");

module.exports.addTask = function (req, res) {
  ToDoList.create({
    task: req.body.task,
    isChecked: false,
    date: req.body.date,
    category: req.body.category,
  })
    .then((newTask) => {
      console.log("newTask", newTask);
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("error in posting the task in db");
      return;
    });
};
