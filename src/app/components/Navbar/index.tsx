import React from 'react';
import styles from './Navbar.module.css';

interface NavigationProps {
  about: string;
  skills: string;
}

interface NavbarProps {
  navigation: NavigationProps;
}

const Navbar: React.FC<NavbarProps> = ({ navigation }) => {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.h1}>Torok Dylan</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}><a className={styles.a} href={navigation.about}>À propos</a></li>
          <li className={styles.li}><a className={styles.a} href={navigation.skills}>Compétences</a></li>
          <li className={styles.li}><a className={styles.a} href={navigation.about}>Projets personnels</a></li>
          <li className={styles.li}><a className={styles.a} href={navigation.skills}>Projets scolaires</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
