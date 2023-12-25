import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';


const Navbar: React.FC = () => {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.h1}>Torok Dylan</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}> <Link className={styles.a} href="/oui">Formation</Link></li>
          <li className={styles.li}><a className={styles.a} href="/oui">Compétences</a></li>
          <li className={styles.li}><a className={styles.a} href="/oui">Projets personnels</a></li>
          <li className={styles.li}><a className={styles.a} href="/oui">Projets scolaires</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
