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

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
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

      {/* title */}
      <h1
        style={{
          color: 'white',
          fontSize: '40px',
        }}
      >
        To-Do List
      </h1>

      {/* the header component */}
      <div className="addtask">
        <TodoInput onAddTodo={handleAddTodo} />
      </div>

      {/* the list component */}
      <div className="listtask">       
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      </div>

    </div>
  );
};

export default ExamplePage;
