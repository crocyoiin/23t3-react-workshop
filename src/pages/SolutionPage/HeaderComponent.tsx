import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput = ({ onAddTodo }: TodoInputProps) => {
  const [todoText, setTodoText] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      onAddTodo(todoText);
      setTodoText('');
    }
  };

  return (
    <div 
      style={{
        marginLeft: '10px',
      }}
    >

      {/* the input bar */}
      <input
        type="text"
        placeholder="Add a new task"
        value={todoText}
        onChange={handleInputChange}
        style={{
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          color: '#879793',
          marginRight: '8px',
          width: '90%',
          backgroundColor: '#D5DBDA',
        }}
      />
      
      {/* the add button */}
      <button onClick={handleAddTodo}
      style={{
        backgroundColor: '#A0DACC',
        color: '#76B0A2',
      }}>
        +
      </button>
      
    </div>
  );
};

export default TodoInput;
