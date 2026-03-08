// AI-generated, reviewed and modified
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


let tasks = [
  {
    id: uuidv4(),
    title: 'Solve Assignments',
    priority: 'high',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    title: 'Build Projects',
    priority: 'medium',
    completed: true,
    createdAt: new Date().toISOString()
  }
];

app.get('/api/tasks', (req, res) => {
  try {
    res.json({ success: true, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch tasks' });
  }
});


app.post('/api/tasks', (req, res) => {
  try {
    const { title, priority } = req.body;

    if (!title || title.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Title is required and cannot be empty'
      });
    }

    const validPriorities = ['low', 'medium', 'high'];
    const taskPriority = priority || 'medium';

    if (!validPriorities.includes(taskPriority)) {
      return res.status(400).json({
        success: false,
        error: 'Priority must be low, medium, or high'
      });
    }

    const newTask = {
      id: uuidv4(),
      title: title.trim(),
      priority: taskPriority,
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    res.status(201).json({ success: true, data: newTask });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create task' });
  }
});


app.patch('/api/tasks/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { completed, title, priority } = req.body;

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Task not found'
      });
    }

    if (completed !== undefined) {
      tasks[taskIndex].completed = completed;
    }

    if (title !== undefined && title.trim() !== '') {
      tasks[taskIndex].title = title.trim();
    }

    if (priority !== undefined) {
      const validPriorities = ['low', 'medium', 'high'];
      if (validPriorities.includes(priority)) {
        tasks[taskIndex].priority = priority;
      }
    }

    res.json({ success: true, data: tasks[taskIndex] });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update task' });
  }
});

app.delete('/api/tasks/:id', (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Task ID is required'
      });
    }

    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Task not found'
      });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];
    res.json({ success: true, data: deletedTask });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete task' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
