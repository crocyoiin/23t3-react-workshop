import React, { useState } from 'react';
import TodoInput from "./HeaderComponent";
import TodoList from "./BodyComponent";
import './SolutionPage.css';

const ExamplePage: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos, text]);
  };

  const todoItems = [
    'Finish trainee project',
    'Watch 3311 lecture',
    'Take cat to vet',
  ];
  

  return (
    <div className="sol-wrapper">
      <style>
        {`
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background: linear-gradient(180deg, aquamarine, skyblue);
          }
        `}
      </style>
      <h1 className="todoheader"
        style={{
          color: 'white',
          fontSize: '40px',
        }}
      >
        To-Do List
      </h1>
      <div className="addtask"
        style={{
          padding: '10px',
        }}
      >
        <TodoInput onAddTodo={handleAddTodo} />
      </div>
      
      <div className="listtask"
        style={{
          padding: '10px',
          marginTop: '30px',
        }}
      >       
        <TodoList todos={todoItems} />
      </div>
    </div>
  );
};

export default ExamplePage;
