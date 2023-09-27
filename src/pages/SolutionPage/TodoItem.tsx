import React, { useState } from 'react';

interface TodoItemProps {
  text: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ text }) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  // each item is in its own card
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    width: '80%',
    margin: 'auto',
    marginBottom: '10px',
    marginTop: '10px',
    backgroundColor: completed ? '#E9EEEE' : '#D5DBDA',
    textDecoration: completed ? 'line-through' : 'none',
  };
  
  return (
    <div style={cardStyle}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
    </div>
  );
};

export default TodoItem;
