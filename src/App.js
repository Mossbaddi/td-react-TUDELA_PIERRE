import React, { useState, useEffect } from 'react';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import uuid from 'react-uuid';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    return storedTasks || [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
  const addTask = (text) => {
    const newTask = { id: uuid(), text: text, completed: false }; 
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const deleteAllTasks = () => {
    localStorage.removeItem('tasks');
    setTasks([]);
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.completed;
    if (filter === 'undone') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <div>
        <button onClick={() => setFilter('all')} data-cy="filter-btn-all">
          Toutes
        </button>
        <button onClick={() => setFilter('done')} data-cy="filter-btn-done">
          Complétées
        </button>
        <button onClick={() => setFilter('undone')} data-cy="filter-btn-undone">
          Non complétées
        </button>
        <button onClick={deleteAllTasks}>Supprimer tout</button>
      </div>
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;