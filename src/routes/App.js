import React from 'react';
import styles from './App.module.scss';
import Home from '../pages/home';

const App = () => {
  const { background } = styles;
  return (
    <div className={background}>
      <Home />
    </div>
  );
};

export default App;
