let tasksData = [];
/* 
    id: number
    title: string
    desc: string
    status: pending or completed
*/

exports.getTasksPage = (req, res) => {
  return res.render("index", {
    title: "Tasks",
    pendingTasks: tasksData.filter((task) => task.status === "pending"),
    completedTasks: tasksData.filter((task) => task.status === "completed"),
  });
};
exports.getNewTaskPage = (req, res) => {
  return res.render("todo-add", {
    title: "Add a new task",
  });
};
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
exports.getEditTaskPage = (req, res) => {
  const { id } = req.params;

  const initialValues = tasksData.find((item) => item.id.toString() === id);

  return res.render("todo-edit", {
    title: "Task edit",
    id,
    initialValues,
  });
};
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
exports.deleteTask = (req, res) => {};
