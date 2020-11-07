import React, { useState } from 'react';
import PropTypes from 'prop-types';
import store from 'store';
import { Link, Redirect } from 'react-router-dom';
import Button from '../components/button';
import Input from '../components/input';
import styles from './login.module.scss';
import storeKeys from '../assets/storeKeys';

const LogIn = ({ history }) => {
  const { background, container } = styles;
  const initialForm = { email: '', password: '', error: false };
  const [form, setForm] = useState(initialForm);

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = form;
    setForm({ error: false });
    if (!(email === 'george@email.com' && password === '123456')) {
      return setForm({ error: true });
    }

    history.push('/');

    return setForm(initialForm);
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
      <div className={container}>
        <form onSubmit={handleSubmit}>
          {form.error && (
            <p>Invalid email/password. Try again!</p>
          )}
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
          <Button classType="primary" title="log in" submit />
        </form>
        <Link to="/signup">
          <Button classType="secondary" title="sign up" />
        </Link>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default LogIn;
