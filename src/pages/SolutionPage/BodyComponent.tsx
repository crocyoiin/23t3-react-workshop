import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <TodoItem text={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
