import React from 'react';
import {partial} from '../../lib/utils';
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  return (
    <li>
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
}
