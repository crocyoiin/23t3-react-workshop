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
    <div>
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
      <h1
        style={{
          color: 'white',
          fontSize: '40px',
        }}
      >
        To-Do List
      </h1>
      <div className="addtask">
        <TodoInput onAddTodo={handleAddTodo} />
      </div>
      
      <div className="listtask">       
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default ExamplePage;
