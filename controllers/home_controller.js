const db = require("../config/mongoose");
const ToDoList = require("../models/task");
var toDoList = [
  {
    task: "this is task 1",
    isCompleted: false,
    date: "04/04/2023",
    category: "school",
  },
  {
    task: "this is task 2",
    isCompleted: true,
    date: "24/07/2023",
    category: "extra",
  },
  {
    task: "this is task 3",
    isCompleted: false,
    date: "15/01/2023",
    category: "work",
  },
];
module.exports.home = function (req, res) {
  ToDoList.find({})
    .then((tasks) => {
      return res.render("home", {
        title: "toDoList",
        toDoList: tasks,
      });
    })
    .catch((err) => {
      if (err) {
        console.log("error in fetching tasks from db");
        return;
      }
    });
};
