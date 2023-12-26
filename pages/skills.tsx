import React from 'react';
import Navbar from '../src/app/staticComponents/Navbar';
import Body from '../src/app/skills';
import Footer from '../src/app/staticComponents/Footer';
import styles from '../styles/index.module.css';

const Skills: React.FC = () => {
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

export default Skills;