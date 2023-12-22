import React from 'react';
import Navbar from '../src/app/components/Navbar';
import Body from '../src/app/components/Body';
import stylesNavbar from '../src/app/components/Navbar/Navbar.module.css';

const Home: React.FC = () => {
  const navigationLinks = {
    about: '/about',
    skills: '/skills', 
  };

  return (
    <div className={stylesNavbar.background}>
      <Navbar navigation={navigationLinks} />
      <Body/>
    </div>
  );
};

export default Home;
