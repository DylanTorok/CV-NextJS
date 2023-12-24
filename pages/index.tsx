import React from 'react';
import Navbar from '../src/app/components/Navbar';
import Body from '../src/app/components/Body';
import Footer from '../src/app/components/Footer';
import styles from '../styles/index.module.css';

const Home: React.FC = () => {
  const navigationLinks = {
    about: '/about',
    skills: '/skills',
  };

  return (
    <div>
      <Navbar navigation={navigationLinks}/>
    <div className={styles.center}>
      <Body/>
    </div> 
    <Footer/>

  </div>
  );
};

export default Home;
