const tasks = require('../data/task.store');
const generateId = require('../utils/generateId');
const { TASK_STATUS, TASK_PRIORITY } = require('../constants/task.constants');

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
  return tasks.find(task => task.id === taskId);
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

module.exports = {
  getAllTasks,
  getTaskById,
  createTask
};