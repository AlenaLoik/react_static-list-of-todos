import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ user }) => (
  <td className="users">
    {user.name}
  </td>
);

User.propTypes = {
  user: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
};
