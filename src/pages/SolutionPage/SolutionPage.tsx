import React, { useState } from 'react';
import TodoInput from "./HeaderComponent";
import TodoList from "./BodyComponent";
import './SolutionPage.css';

const ExamplePage: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos, text]);
  };

  return (
    <div className="sol-wrapper">
      <h1 className="todoheader">To-Do List</h1>
      <div className="addtask">
        <TodoInput onAddTodo={handleAddTodo} />
      </div>
      <h2 className="tasksheader">Tasks:</h2>
      <div className="listtask">       
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default ExamplePage;
