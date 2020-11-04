import React from 'react';
import PropTypes from 'prop-types';
import ArrowBack from '../components/arrow-back';
import PhoneContainer from '../components/phone-container';
import './result-tracks.scss';

const ResultTrack = ({ location }) => {
  const { state } = location;
  console.log(state);
  const {
    artistName,
  } = state;
  return (
    <PhoneContainer tabActive="2">
      <div className="result-track-container">
        <div className="result-track-content">
          <div className="header result-track-content-header">
            <ArrowBack path="/results" />
          </div>
          <div className="result-track-content-body">
            <h2>{artistName}</h2>
          </div>
        </div>
      </div>
    </PhoneContainer>
  );
};

ResultTrack.propTypes = {
  location: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default ResultTrack;
