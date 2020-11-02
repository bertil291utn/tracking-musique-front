import React, { useState } from 'react';
import Button from '../styled-components/button';
import Input from '../styled-components/input';
import styles from './signup.module.scss';
import buttonType from '../styled-components/elementType';

const SignUp = () => {
  const { primaryType, linkType } = buttonType;
  const { background, container } = styles;
  const initialForm = { name: '', email: '', password: '' };
  const [form, setForm] = useState(initialForm);

  const handleSubmit = e => {
    e.preventDefault();
    setForm(initialForm);
    console.log(form);
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
            value={form.email}
            onchange={handleInputChange}
          />
          <Input
            placeholder="Password"
            name="password"
            value={form.password}
            onchange={handleInputChange}
            password
          />
          <Button classType={primaryType} title="sign up" submit />
        </form>
        <Button classType={linkType} title="log in" />
      </div>
    </div>
  );
};

export default SignUp;
