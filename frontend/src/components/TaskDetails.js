import React from 'react';

const TaskDetails = ({ task, setView }) => {
  if (!task) {
    return (
      <div style={styles.noTaskContainer}>
        <h2>No Task Selected</h2>
        <button onClick={() => setView('list')} style={styles.button}>Back to List</button>
      </div>
    );
  }
  //display date as per format
  const formatDueDate = (dateString) => {
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <div style={styles.taskContainer}>
      <h2>Task Details</h2>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description :</strong> {task.description}</p>
      <p><strong>Due Date    :</strong> {formatDueDate(task.dueDate)}</p>
      <button onClick={() => setView('list')} style={styles.button}>Back to List</button>
    </div>
  );
};

const styles = {
  taskContainer: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '90%',
    boxSizing: 'border-box',
  },
  noTaskContainer: {
    textAlign: 'center',
    padding: '20px',
    width: '90%',
    boxSizing: 'border-box',
    margin: '0 auto'
  },
  button: {
    padding: '10px 20px',
    marginTop: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box',
  },
  '@media (min-width: 600px)': {
    taskContainer: {
      maxWidth: '500px',
      padding: '24px',
    },
    button: {
      width: 'auto',
    }
  }
};

export default TaskDetails;
