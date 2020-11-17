import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconsSvg from '../assets/icons/icons.svg';
import './arrow-back.scss';

const ArrowBack = ({ path }) => (
  <Link to={path}>
    <svg className="back-arrow-icon">
      <use href={`${IconsSvg}#back-arrow`} />
    </svg>
  </Link>
);

ArrowBack.propTypes = {
  path: PropTypes.string.isRequired,
};

export default ArrowBack;
