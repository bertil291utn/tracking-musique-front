import React from 'react';
import PropTypes from 'prop-types';
import buttonType from './buttonType';
import './button.scss';

const Button = props => {
  const { primaryType, secondaryType } = buttonType;
  const { type, title } = props;
  let className;

  switch (type) {
    case primaryType:
      className = 'primary';
      break;
    case secondaryType:
      className = 'secondary';
      break;
    default:
      className = 'link';
      break;
  }

  return (
    <button className={`button ${className}`} type="button">{title.toUpperCase()}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
