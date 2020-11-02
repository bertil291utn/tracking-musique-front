import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = props => {
  const {
    placeholder, name, value, type, onchange,
  } = props;
  return (
    <input
      className="input"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onchange(e.target)}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onchange: PropTypes.func,
};

Input.defaultProps = {
  onchange: () => { },
  type: 'text',
  value: '',
};

export default Input;
