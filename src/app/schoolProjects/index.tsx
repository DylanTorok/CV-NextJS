import React from 'react';
import styles from './Body.module.css';
import Link from 'next/link';

const projectsData = [
  { name: 'Julia', image: '/pictures/schoolProjects/fractals/Julia.jpg', description: 'Génération de fractales en Java', link : "/schoolProjects/fractals", width : 250, height : 250 },
  { name: 'Meteo', image: '/pictures/schoolProjects/weatherReport/Welcome.jpg', description: "Création d'une API méteo", link : "/schoolProjects/weatherReport", width : 450, height : 200 }
];

const Body: React.FC = () => {
  return (
    <section className={styles.body}>
      {projectsData.map((project, index) => (
        <Link className={styles.link} href={project.link}>
        <div className={styles.projectItem} key={index}>
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
