const express = require("express");
const router = express.Router();
const { CreateTask, EditTask, DeleteTask, AllTasks, IsDoneTasks, CheckTask} = require("controller");

router
.get("/list", AllTasks)
.get("/count", IsDoneTasks)
.post("/add", CreateTask)
.delete("/delete/:id", DeleteTask)
.patch("/checked/:id", CheckTask)
.patch("/update/:id", EditTask)
module.exports = router;