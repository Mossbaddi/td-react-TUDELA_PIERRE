import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} data-cy="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nouvelle tâche"
        data-cy="task-input"
      />
      <button type="submit" data-cy="add-task-btn">
        Ajouter
      </button>
    </form>
  );
};

export default TaskForm;