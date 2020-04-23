import React from 'react';
import './App.css';

import todos from './api/todos';
import users from './api/users';
import { TodoList } from './components/TodoList';

const preparedTodos = todos.map(todo => (
  {
    ...todo, user: users.find(user => user.id === todo.userId),
  }
));

function App() {
  return (
    <table className="App">
      <caption className="todos">Static list of todos</caption>
      <TodoList preparedTodos={preparedTodos} />
    </table>
  );
}

export default App;
