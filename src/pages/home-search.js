import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArtistItems from '../components/artist-items';
import ArrowBack from '../components/arrow-back';
import Input from '../components/input';
import PhoneContainer from '../components/phone-container';
import searchArtist from '../logic-operations/Api';
import TagMessage from '../components/tag-message';
import './home-search.scss';

const HomeSearch = ({ history }) => {
  const initialStateForm = { search: '', loading: false };
  const [form, setForm] = useState(initialStateForm);
  const [result, setResult] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setResult([]);
    if (form.search !== '') {
      setForm({ ...form, loading: true });
      searchArtist(form.search).then(data => {
        if (data !== null) setForm(initialStateForm);
        setResult(data.artists.items[0]);
      });
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

  const addToHome = () => {
    console.log('send to the database');
    // loading saving
    // when is saved push
    history.push('/artists');
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
                <div
                  onClick={addToHome}
                  onKeyUp={() => { }}
                  role="button"
                  tabIndex="0"
                >
                  <ArtistItems
                    key={result.id}
                    photoUrl={result?.images[result.images.length - 1]?.url}
                    artistName={result.name}
                  />
                </div>
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

HomeSearch.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default HomeSearch;
