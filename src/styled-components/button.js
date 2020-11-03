import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ classType, title, submit }) => (
  <>
    {submit
      ? (<button type="submit" className={`button ${classType}`}>{title.toUpperCase()}</button>)
      : (<button type="button" className={`button ${classType}`}>{title.toUpperCase()}</button>)}
  </>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  submit: PropTypes.bool,
};

Button.defaultProps = {
  submit: false,
};

export default Button;
