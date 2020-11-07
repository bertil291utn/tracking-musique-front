import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import store from 'store';
import Button from '../components/button';
import Input from '../components/input';
import { addNewUser, getToken } from '../logic-operations/Api';
import storeKeys from '../assets/storeKeys';
import styles from './signup.module.scss';
import TagMessage from '../components/tag-message';

const SignUp = ({ history }) => {
  const { background, container } = styles;
  const [loading, setLoading] = useState(false);
  const initialForm = {
    name: '', email: '', password: '', error: false,
  };
  const [form, setForm] = useState(initialForm);

  const handleSubmit = async e => {
    e.preventDefault();
    const emptyForm = form.name === '' || form.email === '' || form.password === '';
    if (!emptyForm) {
      setLoading(true);
      const userResponse = await addNewUser(form);
      if (userResponse.status === 201) {
        const responseToken = await getToken(form);
        if (responseToken.status !== 401) {
          store.set(storeKeys.TOKEN_VAR, responseToken.data.token);
          store.set(storeKeys.SET_LOGIN, true);
          setForm(initialForm);
          history.push('/');
        }
      } else if (userResponse.status === 422) setForm({ error: true });
      setLoading(false);
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

  if (store.get(storeKeys.SET_LOGIN)) {
    return <Redirect to="/artists" />;
  }

  return (
    <div className={background}>
      {!loading
        ? (
          <div className={container}>
            <form onSubmit={handleSubmit}>
              {form.error && (
                <p>Email already exists</p>
              )}
              <Input
                placeholder="Name"
                name="name"
                value={form.name}
                onchange={handleInputChange}
              />
              <Input
                placeholder="Email"
                name="email"
                type="email"
                value={form.email}
                onchange={handleInputChange}
              />
              <Input
                placeholder="Password"
                name="password"
                type="password"
                value={form.password}
                onchange={handleInputChange}
              />
              <Button classType="primary" title="sign up" submit />
            </form>
            <Link to="/login">
              <Button classType="secondary" title="log in" />
            </Link>
          </div>
        )
        : <TagMessage title="Loading..." />}
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default SignUp;
