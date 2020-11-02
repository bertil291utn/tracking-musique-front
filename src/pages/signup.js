import React from 'react';
import Button from '../styled-components/button';
import Input from '../styled-components/input';
import styles from './signup.module.scss';
import { buttonType, inputType } from '../styled-components/elementType';

const SignUp = () => {
  const { primaryType, linkType } = buttonType;
  const { textType, passwordType } = inputType;
  const { background, container } = styles;
  return (
    <div className={background}>
      <div className={container}>
        <Input placeholder="Name" value="name" name="name" type={textType} />
        <Input placeholder="Email" value="email" name="email" type={textType} />
        <Input placeholder="Password" value="password" name="password" type={passwordType} />
        <Button type={primaryType} title="sign up" />
        <Button type={linkType} title="log in" />
      </div>
    </div>
  );
};

export default SignUp;
