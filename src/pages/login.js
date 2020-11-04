import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import Input from '../components/input';
import styles from './login.module.scss';

const LogIn = () => {
  const { background, container } = styles;
  const initialForm = { email: '', password: '' };
  const [form, setForm] = useState(initialForm);

  const handleSubmit = e => {
    e.preventDefault();
    setForm(initialForm);
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
    <div className={background}>
      <div className={container}>
        <form onSubmit={handleSubmit}>
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

export default LogIn;
