import React from 'react';
import {partial} from '../../lib/utils';
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  const handleRemove = partial(props.handleRemove, props.id);
  return (
    <li>
      <span className="delete-item">
        <a href="#" onClick={ handleRemove }>X</a>
      </span>
      <input
        onChange={ handleToggle }
        type="checkbox"
        checked={ props.isComplete } /> { props.name }
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool
};
