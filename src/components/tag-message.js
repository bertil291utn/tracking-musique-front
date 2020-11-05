import React from 'react';
import PropTypes from 'prop-types';
import './tag-message.scss';

const TagMessage = ({ title, subtitle }) => (
  <div className="no-content">
    <div className="no-content-container">
      <h3>{title}</h3>
      {subtitle && (<p>{subtitle}</p>)}
    </div>
  </div>
);

TagMessage.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

TagMessage.defaultProps = {
  subtitle: false,
};

export default TagMessage;
