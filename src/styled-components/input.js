import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = props => {
  const { placeholder, value, type } = props;

  return (
    <input className="input" type={type} placeholder={placeholder} value={value} />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
