import React from 'react';
import styles from './Body.module.css';
import Link from 'next/link';

const projectsData = [
  { name: 'Blackjack', image: '/pictures/personalProjects/blackjack/Blackjack.jpg', description: 'Jeu de Blackjack sur terminal développé en C' },
];

const Body: React.FC = () => {
  return (
    <section className={styles.body}>
      {projectsData.map((project, index) => (
         <Link className={styles.link} href="/personalProjects/blackjack">
        <div className={styles.projectItem} key={index}>
          <img src={project.image} alt={project.name} className={styles.projectImage} />
          <div className={styles.projectInfo}>
            <h2 className={styles.h2}>{project.name}</h2>
            <p className={styles.p}>{project.description}</p>
          </div>
        </div>
        </Link>
      ))}
    </section>
  );
};

export default Body;
