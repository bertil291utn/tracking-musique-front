import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import store from 'store';
import Button from '../components/button';
import Input from '../components/input';
import { addNewUser } from '../logic-operations/Api';
import storeKeys from '../assets/storeKeys';
import styles from './signup.module.scss';
import TagMessage from '../components/tag-message';
import { setLogin, setUser } from '../redux/actions';

const SignUp = ({
  history, setLogin, setUser, login,
}) => {
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
        store.set(storeKeys.TOKEN_VAR, userResponse.data.token);
        setLogin(true);
        setUser(userResponse.data.user.id);
        setForm(initialForm);
        history.push('/');
        history.go(0);
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
