import React, { useState } from 'react';

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
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
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={todoText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>+</button>
    </div>
  );
};

export default TodoInput;
