import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
}

const TodoList = ({ todos }: TodoListProps) => {
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
