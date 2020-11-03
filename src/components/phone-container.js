import React from 'react';
import PropTypes from 'prop-types';
import TabNavigation from './tab-navigation';
import './phone-container.scss';

const PhoneContainer = ({ children, tabActive }) => (
  <div className="phone-container">
    <div className="phone-content">
      {children}
    </div>
    <TabNavigation
      active={tabActive}
    />
  </div>
);

PhoneContainer.propTypes = {
  tabActive: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PhoneContainer;
