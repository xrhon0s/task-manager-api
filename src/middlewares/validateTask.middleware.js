const { TASK_STATUS, TASK_PRIORITY } = require('../constants/task.constants');
const AppError = require('../errors/app.error');

const validateCreateTask = (req, res, next) => {
  const { title, priority } = req.body;

  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    return next(new AppError('Title is required and must be at least 3 characters long', 400));
  }

  if (
    priority &&
    !Object.values(TASK_PRIORITY).includes(priority)
  ) {
    return next(new AppError('Invalid priority value', 400));
  }

  next();
};

const validateUpdateTask = (req, res, next) => {
  const { title, description, priority } = req.body;

  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    return next(new AppError('Title is required and must be at least 3 characters long', 400));
  }

  if (typeof description !== 'string') {
    return next(new AppError('Description must be a string', 400));
  }

  if (!Object.values(TASK_PRIORITY).includes(priority)) {
    return next(new AppError('Invalid priority value', 400));
  }

  next();
};

const validateTaskStatus = (req, res, next) => {
  const { status } = req.body;

  if (!status || !Object.values(TASK_STATUS).includes(status)) {
    return next(new AppError('Invalid status value', 400));
  }

  next();
};

module.exports = {
  validateCreateTask,
  validateUpdateTask,
  validateTaskStatus
};