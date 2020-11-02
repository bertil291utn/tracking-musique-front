import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = props => {
  const { classType, title, submit } = props;

  return (
    <button className={`button ${classType}`} type={submit ? 'submit' : 'button'}>{title.toUpperCase()}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  submit: PropTypes.bool,
};

Button.defaultProps = {
  submit: false,
};

export default Button;
