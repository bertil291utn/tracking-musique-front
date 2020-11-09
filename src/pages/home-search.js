import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import store from 'store';
import ArtistItems from '../components/artist-items';
import ArrowBack from '../components/arrow-back';
import Input from '../components/input';
import PhoneContainer from '../components/phone-container';
import { addUserArtist, searchArtist } from '../logic-operations/Api';
import TagMessage from '../components/tag-message';
import './home-search.scss';
import storeKeys from '../assets/storeKeys';

const HomeSearch = () => {
  const initialStateForm = { search: '', loading: false };
  const [form, setForm] = useState(initialStateForm);
  const [result, setResult] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    setError(false);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const addToHome = () => {
    setLoading(true);
    addUserArtist(result.id, store.get(storeKeys.TOKEN_VAR)).then(response => {
      if (response.status === 201) {
        setLoading(false);
        history.push('/artists');
      } else {
        setError(true);
        setLoading(false);
      }
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

          <div className="body-home-search">
            {error
              && (
                <p>This artist is already on your library</p>
              )}
            {(result.length !== 0 && !form.loading && !loading)
              && (
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
              )}
          </div>
          {(form.loading || loading)
            && (
              <TagMessage title="Loading..." />
            )}
        </div>
      </div>
    </PhoneContainer>
  );
};

export default HomeSearch;
