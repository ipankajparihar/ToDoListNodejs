const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);

router.use("/addTask", require("./addTask"));

router.use("/deleteTasks", require("./deleteTasks"));
router.use("/updateTask/", require("./updateTask"));

module.exports = router;
