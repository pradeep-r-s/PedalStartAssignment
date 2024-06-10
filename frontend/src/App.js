// src/App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetails from './components/TaskDetails';
import './styles.css';

const App = () => {
  const [view, setView] = useState('list');
  const [taskToEdit, setTaskToEdit] = useState(null);

  return (
    <div className="App">
      <div className="container">
        {view === 'list' && <TaskList setTaskToEdit={setTaskToEdit} setView={setView} />}
        {view === 'create' && <TaskForm setView={setView} />}
        {view === 'edit' && <TaskForm taskToEdit={taskToEdit} setView={setView} />}
        {view === 'details' && <TaskDetails task={taskToEdit} setView={setView} />}
      </div>
    </div>
  );
};

export default App;
