const { validationResult } = require("express-validator");

let tasksData = [
  {
    id: 1,
    title: "asd",
    desc: "asd",
    status: "pending",
  },
];
/* 
    id: number
    title: string
    desc: string
    status: pending or completed
*/

// Desc       Get all tasks page
// Route      GET /
exports.getTasksPage = (req, res) => {
  return res.render("index", {
    title: "Tasks",
    allTasks: tasksData,
  });
};

// Desc       Open a new task form
// Route      GET /task/new
exports.getNewTaskPage = (req, res) => {
  return res.render("todo-add", {
    title: "Add a new task",
    errMsg: "",
    initialValues: {
      title: "",
      desc: "",
    },
  });
};

// Desc       Create a new task
// Route      POSt /task
exports.createNewTask = (req, res) => {
  const result = validationResult(req);

  const { title, desc } = req.body;

  if (!result.isEmpty()) {
    return res.status(400).render("todo-add", {
      title: "Add a new task",
      errMsg: result.array()[0].msg,
      initialValues: {
        title,
        desc,
      },
    });
  }

  tasksData.push({
    id: tasksData.length > 0 ? tasksData[tasksData.length - 1] + 1 : 1,
    title,
    desc,
    status: "pending",
  });

  return res.redirect("/");
};

// Desc       Get updatable task
// Route      GET /task/:id/edit
exports.getEditTaskPage = (req, res) => {
  const { id } = req.params;

  const initialValues = tasksData.find((item) => item.id.toString() === id);

  return res.render("todo-edit", {
    title: "Task edit",
    id,
    initialValues,
  });
};

// Desc       Update task
// Route      POST /task/:id/update
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  tasksData = tasksData.map((task) => {
    if (task.id.toString() === id) {
      task.title = title;
      task.desc = desc;
    }

    return task;
  });

  return res.redirect("/");
};

// Desc       Update task status
// Route      GET /task/:id/update/status
exports.updateTaskStatus = (req, res) => {
  const { id } = req.params;

  tasksData = tasksData.map((task) => {
    if (task.id.toString() === id) {
      task.status = task.status === "pending" ? "completed" : "pending";
    }

    return task;
  });

  return res.redirect("/");
};

// Desc       Delete task
// Route      POST /task/:id/delete
exports.deleteTask = (req, res) => {
  const { id } = req.params;

  tasksData = tasksData.filter((task) => task.id.toString() !== id);

  return res.redirect("/");
};
