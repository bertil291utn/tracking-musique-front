import React from 'react';
import PropTypes from 'prop-types';
import TabNavigation from './tab-navigation';
import './phone-container.scss';

const PhoneContainer = ({
  children, tabActive, playerActive, trackId,
}) => {
  const iframeUrl = `https://open.spotify.com/embed/track/${trackId}`;
  return (
    <div className="phone-container">
      <div className="phone-content">
        {children}
      </div>
      {playerActive
        && (
          <iframe
            title={trackId}
            src={iframeUrl}
            height="100"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            className="iframeStyle"
          />
        )}
      <TabNavigation
        active={tabActive}
      />
    </div>
  );
};

PhoneContainer.propTypes = {
  tabActive: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  playerActive: PropTypes.bool,
  trackId: PropTypes.string,
};

PhoneContainer.defaultProps = {
  playerActive: false,
  trackId: '',
};

export default PhoneContainer;
