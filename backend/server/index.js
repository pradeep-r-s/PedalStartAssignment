const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'taskmanager',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Endpoints
app.get('/tasks', (req, res) => {
  const query = 'SELECT * FROM tasks';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching tasks: ', error);
      res.status(500).json({ error: 'Error fetching tasks' });
      return;
    }
    res.json(results);
  });
});

app.post('/tasks', (req, res) => {
  const { title, description, dueDate } = req.body;
  const query = 'INSERT INTO tasks (title, description, dueDate) VALUES (?, ?, ?)';
  connection.query(query, [title, description, dueDate], (error, results) => {
    if (error) {
      console.error('Error creating task: ', error);
      res.status(500).json({ error: 'Error creating task' });
      return;
    }
    res.json({ id: results.insertId, title, description, dueDate });
  });
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM tasks WHERE id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error fetching task: ', error);
      res.status(500).json({ error: 'Error fetching task' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }
    res.json(results[0]);
  });
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, dueDate } = req.body;
  const query = 'UPDATE tasks SET title = ?, description = ?, dueDate = ? WHERE id = ?';
  connection.query(query, [title, description, dueDate, id], (error) => {
    if (error) {
      console.error('Error updating task: ', error);
      res.status(500).json({ error: 'Error updating task' });
      return;
    }
    res.json({ id, title, description, dueDate });
  });
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM tasks WHERE id = ?';
  connection.query(query, [id], (error) => {
    if (error) {
      console.error('Error deleting task: ', error);
      res.status(500).json({ error: 'Error deleting task' });
      return;
    }
    res.json({ message: 'Task deleted' });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
