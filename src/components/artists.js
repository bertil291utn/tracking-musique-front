import React from 'react';
import { Link } from 'react-router-dom';
import ArtistItems from './artist-items';
import IconsSvg from '../assets/icons/icons.svg';
import PhoneContainer from './phone-container';
import artistItems from '../assets/artistItems';
import TagMessage from './tag-message';
import './artists.scss';

const Artists = () => (
  <PhoneContainer tabActive="1">
    <div className="header">
      <Link to="/artists/search">
        <svg className="search-icon">
          <use href={`${IconsSvg}#search-symbol`} />
        </svg>
      </Link>
      <h3>MY MUSIC</h3>
    </div>
    {artistItems.length !== 0
      ? (
        <>
          <div className="artists-items">
            {artistItems.map(elem => (
              <Link
                key={elem.id}
                to={`/artists/${elem.idString}`}
              >
                <ArtistItems
                  photoUrl={elem.photoUrlIcon}
                  artistName={elem.artistName}
                  tracks={elem.tracks}
                />
              </Link>
            ))}
          </div>
        </>
      )
      : (
        <TagMessage
          title="No data available"
          subtitle="Search your favorite artist"
        />
      )}
  </PhoneContainer>
);

export default Artists;
