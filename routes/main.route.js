const { Router } = require("express");

const {
  getTasksPage,
  getNewTaskPage,
  createNewTask,
  getEditTaskPage,
  updateTask,
  deleteTask,
  updateTaskStatus,
} = require("../controller/main.controller");
const { body } = require("express-validator");
const router = Router();

router.get("/", getTasksPage);
router.get("/task/new", getNewTaskPage);
router.post(
  "/task",
  body("title").isLength({
    min: 3,
  })
  .withMessage("Please add at least 3 characters to your title"),
  body("desc").isLength({
    min: 3,
  })
  .withMessage("Please add at least 3 characters to your description"),
  createNewTask
);
router.get("/task/:id/edit", getEditTaskPage);
router.post(
  "/task/:id/update", 
  body("title").isLength({
    min: 3,
  })
  .withMessage("Please add at least 3 characters to your title"),
  body("desc").isLength({
    min: 3,
  })
  .withMessage("Please add at least 3 characters to your description"),
  updateTask
);
router.get("/task/:id/update/status", updateTaskStatus);
router.post("/task/:id/delete", deleteTask);

module.exports = router;
