import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({
  classType, title, submit, onclickbutton,
}) => (
  <>
    {submit
      ? (<button type="submit" className={`button ${classType}`}>{title.toUpperCase()}</button>)
      : (<button type="button" className={`button ${classType}`} onClick={onclickbutton}>{title.toUpperCase()}</button>)}
  </>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  classType: PropTypes.string.isRequired,
  submit: PropTypes.bool,
  onclickbutton: PropTypes.func,
};

Button.defaultProps = {
  onclickbutton: () => { },
  submit: false,
};

export default Button;
