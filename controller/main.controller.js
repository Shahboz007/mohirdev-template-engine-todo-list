const tasksData = [];

exports.getTasksPage = (req, res) => {
  return res.render("index", {
    title: "Tasks",
  });
};
exports.getNewTaskPage = (req, res) => {};
exports.createNewTask = (req, res) => {};
exports.getEditTaskPage = (req, res) => {};
exports.updateTask = (req, res) => {};
exports.deleteTask = (req, res) => {};
