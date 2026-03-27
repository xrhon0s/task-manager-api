const express = require('express');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Task Manager API is running'
  });
});

app.use('/api/tasks', taskRoutes);

module.exports = app;