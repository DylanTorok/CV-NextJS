import React from 'react';
import styles from './Body.module.css';
import Link from 'next/link';

const projectsData = [
  { name: 'Blackjack', image: '/pictures/personalProjects/blackjack/Blackjack.jpg', description: 'Jeu de Blackjack sur terminal développé en C', link : "/personalProjects/blackjack", width : 300, height : 200 }
];

const Body: React.FC = () => {
  return (
    <section className={styles.body}>
      {projectsData.map((project, index) => (
         <Link key={index} className={styles.link} href={project.link}>
        <div className={styles.projectItem}>
          <img src={project.image} alt={project.name} width={project.width} height={project.height} />
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
