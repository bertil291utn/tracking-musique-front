import React, { useState } from 'react';
import ArtistItems from '../components/artist-items';
import ArrowBack from '../components/arrow-back';
import Input from '../components/input';
import PhoneContainer from '../components/phone-container';
import searchArtist from '../logic-operations/Api';
import TagMessage from '../components/tag-message';
import './home-search.scss';

const HomeSearch = () => {
  const [form, setForm] = useState({ search: '', loading: null });
  const [result, setResult] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (form.search !== '') {
      setForm({ loading: true });
      searchArtist(form.search).then(data => {
        if (data !== null) setForm({ loading: false });
        setResult(data.artists.items[0]);
      });
      setForm({ search: '' });
    }
  };

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
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="Search artist"
                name="search"
                value={form.search}
                onchange={handleInputChange}
              />
            </form>
          </div>
          {result.length !== 0 && !form.loading
            && (
              <div className="body-home-search">
                <ArtistItems
                  key={result.id}
                  photoUrl={result?.images[0]?.url}
                  artistName={result.name}
                />
              </div>
            )}
          {form.loading
            && (
              <TagMessage title="Loading..." />
            )}
        </div>
      </div>
    </PhoneContainer>
  );
};

export default HomeSearch;
