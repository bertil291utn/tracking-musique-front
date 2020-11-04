import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import Input from '../components/input';
import styles from './signup.module.scss';

const SignUp = () => {
  const { background, container } = styles;
  const initialForm = { name: '', email: '', password: '' };
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
    </div>
  );
};

export default SignUp;
