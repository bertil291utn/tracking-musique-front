import React, { useState } from 'react';
import PropTypes from 'prop-types';
import store from 'store';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../components/button';
import Input from '../components/input';
import styles from './login.module.scss';
import storeKeys from '../assets/storeKeys';
import { getToken } from '../logic-operations/Api';
import TagMessage from '../components/tag-message';
import { setLogin, setUser } from '../redux/actions';

const LogIn = ({
  history, setLogin, setUser, login,
}) => {
  const [loading, setLoading] = useState(false);

  const { background, container } = styles;
  const initialForm = { email: '', password: '', error: false };
  const [form, setForm] = useState(initialForm);

  const handleSubmit = async e => {
    e.preventDefault();
    const emptyForm = form.email === '' || form.password === '';
    if (!emptyForm) {
      setLoading(true);
      const responseToken = await getToken(form);
      if (responseToken.status !== 401) {
        store.set(storeKeys.TOKEN_VAR, responseToken.data.token);
        setLogin(true);
        setUser(responseToken.data.userId);
        setForm(initialForm);
        setLoading(false);
        history.push('/');
      } else setForm({ error: true });
      setLoading(false);
    }

    return {};
  };

  const handleInputChange = target => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  if (login) {
    return <Redirect to="/artists" />;
  }

  return (
    <div className={background}>
      {!loading
        ? (
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
        )
        : <TagMessage title="Loading..." />}
    </div>
  );
};

LogIn.propTypes = {
  history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
  login: PropTypes.bool.isRequired,
  setLogin: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = {
  setLogin,
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
