import React from 'react';
import styles from './app.module.css';
import Main from '../main/main';

function App() {
  return (
    <div className={styles.app} style={{ display: 'flex' }}>
      <Main />
    </div>
  );
}

export default App;
