// Body.tsx
import React from 'react';
import styles from './Body.module.css';

const languagesData = [
  { name: 'Java', image: '/pictures/languages/Java.png', width: 80, height: 135, level: 75 },
  { name: 'Python', image: '/pictures/languages/Python.png', width: 120, height: 135, level: 75 },
  { name: 'SQL', image: '/pictures/languages/SQL.png', width: 275, height: 135, level: 60 },
  { name: 'PHP', image: '/pictures/languages/PHP.png', width: 175, height: 135, level: 50 },
  { name: 'TypeScript', image: '/pictures/languages/TypeScript.png', width: 135, height: 135, level: 50 },
  { name: 'C', image: '/pictures/languages/C.png', width: 125, height: 135, level: 25 }
];

const softwaresData = [
  { name: 'Eclipse', image: '/pictures/softwares/Eclipse.png', width: 135, height: 135, level: 80 },
  { name: 'VS Code', image: '/pictures/softwares/VSCode.png', width: 135, height: 135, level: 80 },
  { name: 'Git', image: '/pictures/softwares/Git.png', width: 135, height: 135, level: 60 },
  { name: 'PhpStorm', image: '/pictures/softwares/PhpStorm.png', width: 135, height: 135, level: 60 },
  { name: 'PyCharm', image: '/pictures/softwares/PyCharm.png', width: 135, height: 135, level: 60 },
  { name: 'Docker', image: '/pictures/softwares/Docker.png', width: 200, height: 135, level: 50 }
];

const Body: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.h1}>{`Langages`}</h1>
      <div className={styles.skillsContainer}>
        {languagesData.map((language, index) => (
          <div className={styles.skillItem} key={index}>
            <img src={language.image} alt={language.name} width={language.width} height={language.height} />
            <div className={styles.skillInfo}>
              <p className={styles.p}>{language.name}</p>
            </div>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBar} style={{ width: `${language.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <hr/>
      <h1 className={styles.h1}>{`Logiciels`}</h1>
      <div className={styles.skillsContainer}>
        {softwaresData.map((software, index) => (
          <div className={styles.skillItem} key={index}>
            <img src={software.image} alt={software.name} width={software.width} height={software.height} />
            <div className={styles.skillInfo}>
              <p className={styles.p}>{software.name}</p>
            </div>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBar} style={{ width: `${software.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Body;
