module.exports.deleteTasks = function (req, res) {
  //   let id = req.query.id;
  //   Contact.findByIdAndDelete(id)
  //     .then(() => {
  //       return res.redirect("back");
  //     })
  //     .catch((err) => {
  //       console.log("error in deleting a contact in db");
  //       return;
  //     });
  const taskIdsToDelete = Array.isArray(req.body.checkbox)
    ? req.body.checkbox
    : [req.body.checkbox];
  console.log("checkbox", taskIdsToDelete);
  return res.redirect("back");
};
