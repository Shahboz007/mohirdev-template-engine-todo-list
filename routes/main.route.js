const { Router } = require("express");

const {
  getTasksPage,
  getNewTaskPage,
  createNewTask,
  getEditTaskPage,
  updateTask,
  deleteTask,
} = require("../controller/main.controller");
const router = Router();

router.get("/", getTasksPage);
router.get("/task/new", getNewTaskPage);
router.post("/task", createNewTask);
router.get("/task/:id/edit", getEditTaskPage);
router.post("/task/:id/update", updateTask);
router.delete("/task/:id/delete", deleteTask);

module.exports = router;
