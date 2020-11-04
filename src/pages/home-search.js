import React, { useState } from 'react';
import ArtistItems from '../components/artist-items';
import ArrowBack from '../components/arrow-back';
import Input from '../components/input';
import './home-search.scss';
import PhoneContainer from '../components/phone-container';

const HomeSearch = () => {
  const [form, setForm] = useState({ search: '' });

  const handleInputChange = target => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <PhoneContainer tabActive="1">
      <div className="home-search">
        <div className="home-search-content">
          <div className="header">
            <ArrowBack path="/artists" />
            {/* <form onSubmit={handleSubmit}> */}
            <form>
              <Input
                placeholder="Search artist"
                name="search"
                value={form.search}
                onchange={handleInputChange}
              />
            </form>
          </div>

          <div className="body-home-search">
            <ArtistItems
              photoUrl="https://pbs.twimg.com/profile_images/688228009900285953/FsNTD7F7.jpg"
              artistName="David Bowie"
            />
          </div>
        </div>
      </div>
    </PhoneContainer>
  );
};

export default HomeSearch;
