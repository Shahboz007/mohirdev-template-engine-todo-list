let tasksData = [];
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
    pendingTasks: tasksData.filter((task) => task.status === "pending"),
    completedTasks: tasksData.filter((task) => task.status === "completed"),
  });
};

// Desc       Open a new task form
// Route      GET /task/new
exports.getNewTaskPage = (req, res) => {
  return res.render("todo-add", {
    title: "Add a new task",
  });
};

// Desc       Create a new task
// Route      POSt /task
exports.createNewTask = (req, res) => {
  const { title, desc } = req.body;

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
      task = {
        ...task,
        title,
        desc,
      };
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
