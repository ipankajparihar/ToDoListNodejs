const express = require("express");
const router = express.Router();

const updateTaskController = require("../controllers/updateTask_controller");

router.post("/", updateTaskController.updateTask);

module.exports = router;
