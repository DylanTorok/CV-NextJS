import React from 'react';
import Navbar from '../src/app/staticComponents/Navbar';
import Body from '../src/app/education';
import Footer from '../src/app/staticComponents/Footer';
import styles from '../styles/index.module.css';

const Formation: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.center}>
        <Body/>
      </div> 
    <Footer/>
    </div>
  );
};

export default Formation;