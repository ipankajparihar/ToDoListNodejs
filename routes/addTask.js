const express = require("express");
const router = express.Router();

const addTaskController = require("../controllers/addTask_controller");

router.post("/", addTaskController.addTask);

module.exports = router;
