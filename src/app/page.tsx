import React from 'react';
import Navbar from './components/Navbar';
import stylesNavbar from './components/Navbar/Navbar.module.css';

const Home: React.FC = () => {
  const navigationLinks = {
    about: '/about',
    skills: '/skills', 
  };

  return (
    <div className={stylesNavbar.background}>
      <Navbar navigation={navigationLinks} />
      {/* Le reste du contenu de votre page */}
    </div>
  );
};

export default Home;
