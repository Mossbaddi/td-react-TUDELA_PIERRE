import React from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul data-cy="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : ''}`}
          onClick={() => toggleTask(task.id)}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          data-cy="task-item"
        >
          {task.text}
          <button onClick={(e) => {
            e.stopPropagation();
            toggleTask(task.id);
          }}>
            {task.completed ? 'Décompléter' : 'Compléter'}
          </button>
          <button onClick={(e) => {
            e.stopPropagation();
            deleteTask(task.id);
          }}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;