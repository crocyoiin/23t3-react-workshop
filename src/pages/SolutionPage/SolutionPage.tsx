import React, { useState } from 'react';
import TodoInput from "./HeaderComponent";
import TodoList from "./BodyComponent";
import './SolutionPage.css';
import { taskData } from './Data';

const ExamplePage: React.FC = () => {
  const [todos, setTodos] = useState<string[]>(taskData); 

  const handleAddTodo = (text: string) => {
    setTodos([...todos, text]);
  };

  return (
    <div className="sol-wrapper">
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            background: linear-gradient(180deg, aquamarine, skyblue);
            backgroundRepeat: no-repeat;
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
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default ExamplePage;
