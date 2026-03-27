const taskService = require('../services/task.service');

const getTasks = (req, res, next) => {
  try {
    const { status, priority } = req.query;
    const tasks = taskService.getAllTasks({ status, priority });

    res.status(200).json({
      success: true,
      data: tasks
    });
  } catch (error) {
    next(error);
  }
};

const getTask = (req, res, next) => {
  try {
    const { id } = req.params;
    const task = taskService.getTaskById(id);

    res.status(200).json({
      success: true,
      data: task
    });
  } catch (error) {
    next(error);
  }
};

const createTask = (req, res, next) => {
  try {
    const { title, description, priority } = req.body;

    const newTask = taskService.createTask({
      title: title.trim(),
      description: description ? description.trim() : '',
      priority
    });

    res.status(201).json({
      success: true,
      data: newTask
    });
  } catch (error) {
    next(error);
  }
};

const updateTask = (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, priority } = req.body;

    const updatedTask = taskService.updateTask(id, {
      title: title.trim(),
      description: description.trim(),
      priority
    });

    res.status(200).json({
      success: true,
      data: updatedTask
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTask = taskService.deleteTask(id);

    res.status(200).json({
      success: true,
      data: deletedTask
    });
  } catch (error) {
    next(error);
  }
};

const updateTaskStatus = (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedTask = taskService.updateTaskStatus(id, status);

    res.status(200).json({
      success: true,
      data: updatedTask
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus
};