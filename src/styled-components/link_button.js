import React from 'react';
import PropTypes from 'prop-types';
import styles from './main_button.module.scss';

const MainButton = props => {
  const { link } = styles;
  const { title } = props;
  return (
    <button className={link} type="button">{title.toUpperCase()}</button>
  );
};

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MainButton;
