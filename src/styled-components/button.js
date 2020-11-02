import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = props => {
  const { type, title } = props;

  return (
    <button className={`button ${type}`} type="button">{title.toUpperCase()}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
