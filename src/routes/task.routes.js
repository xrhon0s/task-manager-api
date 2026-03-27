const express = require('express');
const taskController = require('../controllers/task.controller');
const {
  validateCreateTask,
  validateUpdateTask,
  validateTaskStatus
} = require('../middlewares/validateTask.middleware');

const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTask);
router.post('/', validateCreateTask, taskController.createTask);
router.put('/:id', validateUpdateTask, taskController.updateTask);
router.patch('/:id/status', validateTaskStatus, taskController.updateTaskStatus);
router.delete('/:id', taskController.deleteTask);

module.exports = router;