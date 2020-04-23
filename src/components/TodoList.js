import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from './Todo';
import './TodoList.css';

export const TodoList = ({ preparedTodos }) => (
  <>
    <tr>
      <th>Todos</th>
      <th>Is completed</th>
      <th>Users</th>
    </tr>
    {preparedTodos.map(todo => (
      <tr className="todo" key={todo.id}>
        <Todo todo={todo} />
      </tr>
    ))}
  </>
);

TodoList.propTypes = {
  preparedTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
