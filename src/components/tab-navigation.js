import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconsSvg from '../assets/icons/icons.svg';
import './tab-navigation.scss';

const TabNavigation = ({ active }) => (
  <div className="container-tab">
    <div className="content-tab">
      <div className={`icon library ${active === '1' && 'active'}`}>
        <Link to="/artists">
          <svg className="library-icon">
            <use href={`${IconsSvg}#library`} />
          </svg>
          <span>Library</span>
        </Link>
      </div>

      <div className={`icon results ${active === '2' && 'active'}`}>
        <Link to="/results">
          <svg className="results-icon">
            <use href={`${IconsSvg}#results`} />
          </svg>
          <span>Results</span>
        </Link>
      </div>

      <div className={`icon profile ${active === '3' && 'active'}`}>
        <svg className="profile-icon">
          <use href={`${IconsSvg}#profile`} />
        </svg>
        <span>Profile</span>
      </div>
    </div>
  </div>
);

TabNavigation.propTypes = {
  active: PropTypes.string.isRequired,
};

export default TabNavigation;
