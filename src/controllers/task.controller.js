const taskService = require('../services/task.service');

const getTasks = (req, res) => {
  const { status, priority } = req.query;

  const tasks = taskService.getAllTasks({ status, priority });

  res.status(200).json({
    success: true,
    data: tasks
  });
};

const getTask = (req, res) => {
  const { id } = req.params;
  const task = taskService.getTaskById(id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: 'Task not found'
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
};

const createTask = (req, res) => {
  const { title, description, priority } = req.body;

  const newTask = taskService.createTask({
    title,
    description,
    priority
  });

  res.status(201).json({
    success: true,
    data: newTask
  });
};

module.exports = {
  getTasks,
  getTask,
  createTask
};