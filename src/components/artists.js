import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import { getUserArtistStats } from '../logic-operations/Api';

import ArtistItems from './artist-items';
import IconsSvg from '../assets/icons/icons.svg';
import PhoneContainer from './phone-container';
import TagMessage from './tag-message';
import storeKeys from '../assets/storeKeys';
import './artists.scss';

const Artists = () => {
  const [artists, setArtistsData] = useState([]);
  const [loadingArtists, setLoadingArtists] = useState(true);

  useEffect(() => {
    getUserArtistStats(store.get(storeKeys.TOKEN_VAR))
      .then(response => {
        if (response.status === 200) {
          setLoadingArtists(false);
          setArtistsData(response.data.data);
        }
      });
  }, []);

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
      {artists.length !== 0 && !loadingArtists
        && (
          <>
            <div className="artists-items">
              {artists.map(elem => {
                const { attributes } = elem;
                return (
                  <Link
                    key={elem.id}
                    to={{ pathname: `/artists/${elem.id}`, artist: attributes }}
                  >
                    <ArtistItems
                      photoUrl={attributes.photoUrl}
                      artistName={attributes.name}
                    />
                  </Link>
                );
              })}
            </div>
          </>
        )}
      {
        artists.length === 0 && loadingArtists
        && (
          <TagMessage title="Loading..." />
        )
      }
      {
        artists.length === 0 && !loadingArtists
        && (
          <TagMessage
            title="No data available"
            subtitle="Search your favorite artist"
          />
        )
      }
    </PhoneContainer>
  );
};

export default Artists;
