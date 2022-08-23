import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, name, testId, value, handleChange } = this.props;
    return (
      <label htmlFor={ testId }>
        {label}
        <input
          data-testid={ testId }
          type={ type }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  testId: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Input;
