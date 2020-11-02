import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = props => {
  const {
    placeholder, name, value, password, onchange,
  } = props;

  return (
    <input
      className="input"
      name={name}
      type={password ? 'password' : 'text'}
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
  password: PropTypes.bool,
  onchange: PropTypes.func,
};

Input.defaultProps = {
  onchange: () => { },
  password: false,
  value: '',
};

export default Input;
