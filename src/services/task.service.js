const tasks = require('../data/task.store');
const generateId = require('../utils/generateId');
const { TASK_STATUS, TASK_PRIORITY } = require('../constants/task.constants');
const AppError = require('../errors/app.error');

const getAllTasks = (filters = {}) => {
  const { status, priority } = filters;

  let result = [...tasks];

  if (status) {
    result = result.filter(task => task.status === status);
  }

  if (priority) {
    result = result.filter(task => task.priority === priority);
  }

  return result;
};

const getTaskById = (taskId) => {
  const task = tasks.find(task => task.id === taskId);

  if (!task) {
    throw new AppError('Task not found', 404);
  }

  return task;
};

const createTask = ({ title, description, priority }) => {
  const now = new Date().toISOString();

  const newTask = {
    id: generateId(),
    title,
    description: description || '',
    status: TASK_STATUS.PENDING,
    priority: priority || TASK_PRIORITY.MEDIUM,
    createdAt: now,
    updatedAt: now
  };

  tasks.push(newTask);

  return newTask;
};

const updateTask = (taskId, taskData) => {
  const task = getTaskById(taskId);

  const { title, description, priority } = taskData;

  task.title = title;
  task.description = description;
  task.priority = priority;
  task.updatedAt = new Date().toISOString();

  return task;
};

const deleteTask = (taskId) => {
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex === -1) {
    throw new AppError('Task not found', 404);
  }

  const deletedTask = tasks[taskIndex];
  tasks.splice(taskIndex, 1);

  return deletedTask;
};

const updateTaskStatus = (taskId, status) => {
  const task = getTaskById(taskId);

  task.status = status;
  task.updatedAt = new Date().toISOString();

  return task;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus
};