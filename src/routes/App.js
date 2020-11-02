import React from 'react';
import styles from './App.module.scss';
import SignUp from '../pages/signup';

const App = () => {
  const { background } = styles;
  return (
    <div className={background}>
      <SignUp />
    </div>
  );
};

export default App;
