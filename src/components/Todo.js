import React from 'react';
import PropTypes from 'prop-types';
import { User } from './User';
import './Todo.css';

export const Todo = ({ todo }) => (
  <>
    <td className="title">{todo.title}</td>
    <td className="status">{(todo.completed) ? 'yes' : 'no'}</td>
    <User user={todo.user} />
  </>
);

Todo.propTypes = {
  todo: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
};
