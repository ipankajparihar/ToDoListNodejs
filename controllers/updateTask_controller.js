const ToDoList = require("../models/task");
module.exports.updateTask = function (req, res) {
  let id = req.query.id;
  console.log(id, "id");
  console.log("isChecked", req.body.checkbox);
  let isChecked = req.body.checkbox;

  ToDoList.findByIdAndUpdate(
    { _id: id },
    {
      isChecked: isChecked,
    }
  )
    .then((newTask) => {
      console.log("updated task", newTask);
      return res.redirect("back");
    })
    .catch((err) => {
      console.log("error in updating a task in db");
      return;
    });
};
