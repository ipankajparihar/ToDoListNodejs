const express = require("express");
const router = express.Router();

const deleteTaskController = require("../controllers/deleteTasks_controller");

router.get("/", deleteTaskController.deleteTasks);

module.exports = router;
