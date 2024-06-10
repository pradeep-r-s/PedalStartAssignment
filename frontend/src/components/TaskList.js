import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ setTaskToEdit, setView }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
    setView('edit');
  };

  const handleViewDetails = (task) => {
    setTaskToEdit(task);
    setView('details');
  };

  return (
    <div>
      <h2>Task List</h2>
      <button className="warning-button" onClick={() => setView('create')}>
      Add New Task
    </button>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <div>
              <button onClick={() => handleEdit(task)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(task.id)}>Delete</button>
              <button onClick={() => handleViewDetails(task)}>View Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;