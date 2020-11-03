import React from 'react';
import ArtistItems from '../components/artist-items';
import SearchIcon from '../assets/icons/icons.svg';
import './home.scss';

const Home = () => {
  const artistItems = [
    {
      id: 1,
      photoUrl: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      artistName: 'Martin Garrix',
    },
    {
      id: 2,
      photoUrl: 'https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg',
      artistName: 'Dua Lipa',
    },
  ];

  return (
    <div className="home">
      <div className="container">
        <div className="header">
          <svg className="svg-icon" id="search-button">
            <use href={`${SearchIcon}#search-symbol`} />
          </svg>
          <h3>MY MUSIC</h3>
        </div>
        <div className="artists-items">
          {artistItems.map(elem => (
            <ArtistItems
              key={elem.id}
              photoUrl={elem.photoUrl}
              artistName={elem.artistName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
