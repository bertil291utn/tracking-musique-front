import React from 'react';
import PropTypes from 'prop-types';
import styles from './primary_button.module.scss';

const PrimaryButton = props => {
  const { primary } = styles;
  const { title } = props;
  return (
    <button className={primary} type="button">{title.toUpperCase()}</button>
  );
};

PrimaryButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PrimaryButton;
