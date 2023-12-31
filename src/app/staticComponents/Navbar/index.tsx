import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';


const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.h1}><Link className={styles.backMenu} href="/">Torok Dylan</Link></h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}> <Link className={styles.link} href="/education">Formation</Link></li>
          <li className={styles.li}> <Link className={styles.link} href="/skills">Compétences</Link></li>
          <li className={styles.li}> <Link className={styles.link} href="/personalProjects">Projets personnels</Link></li>
          <li className={styles.li}> <Link className={styles.link} href="/schoolProjects">Projets scolaires</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
