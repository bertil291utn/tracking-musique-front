import React from 'react';
import styles from './App.scss';

const App = () => {
  const { background } = styles;
  return (
    <div className={background}>
      <h1> Hello world </h1>
    </div>
  );
};

export default App;
