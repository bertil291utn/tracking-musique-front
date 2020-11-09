import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getArtists, getUserArtists } from '../logic-operations/Api';

import ArtistItems from './artist-items';
import IconsSvg from '../assets/icons/icons.svg';
import PhoneContainer from './phone-container';
import TagMessage from './tag-message';
import './artists.scss';

const Artists = ({ user }) => {
  const [artists, setArtists] = useState([]);
  const [idStrings, setIdStrings] = useState([]);
  const [loadingArtists, setLoadingArtists] = useState(true);

  useEffect(() => {
    if (user !== 0) {
      getUserArtists(user)
        .then(response => response.data.included.map(tracks => tracks.attributes.id_string))
        .then(idStrings => {
          if (idStrings.length !== 0) {
            setIdStrings(idStrings);
            getArtists(idStrings).then(response => {
              setArtists(response.artists);
              setLoadingArtists(false);
            });
          }
          setLoadingArtists(false);
        });
    }
  }, [user]);

  return (
    <PhoneContainer tabActive="1">
      <div className="header">
        <Link to="/artists/search">
          <svg className="search-icon">
            <use href={`${IconsSvg}#search-symbol`} />
          </svg>
        </Link>
        <h3>MY MUSIC</h3>
      </div>
      {idStrings.length !== 0 && !loadingArtists
        && (
          <>
            <div className="artists-items">
              {artists.map(elem => (
                <Link
                  key={elem.id}
                  to={`/artists/${elem.id}`}
                >
                  <ArtistItems
                    photoUrl={elem.images?.[elem.images.length - 1].url}
                    artistName={elem.name}
                  />
                </Link>
              ))}
            </div>
          </>
        )}
      {idStrings.length === 0 && loadingArtists
        && (
          <TagMessage title="LoadingArtists..." />
        )}
      {idStrings.length === 0 && !loadingArtists
        && (
          <TagMessage
            title="No data available"
            subtitle="Search your favorite artist"
          />
        )}
    </PhoneContainer>
  );
};

Artists.propTypes = {
  user: PropTypes.number,
};

Artists.defaultProps = {
  user: 0,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Artists);
