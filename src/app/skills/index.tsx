// Body.tsx
import React from 'react';
import styles from './Body.module.css';
import Image from 'next/image';

const languagesData = [
  { name: 'Java', image: '/pictures/languages/Java.jpg', width: 80, height: 135, level: 75 },
  { name: 'Python', image: '/pictures/languages/Python.jpg', width: 120, height: 135, level: 75 },
  { name: 'SQL', image: '/pictures/languages/SQL.jpg', width: 275, height: 135, level: 60 },
  { name: 'PHP', image: '/pictures/languages/PHP.jpg', width: 175, height: 135, level: 50 },
  { name: 'TypeScript', image: '/pictures/languages/TypeScript.jpg', width: 135, height: 135, level: 50 },
  { name: 'C', image: '/pictures/languages/C.jpg', width: 125, height: 135, level: 25 }
];

const softwaresData = [
  { name: 'Eclipse', image: '/pictures/softwares/Eclipse.jpg', width: 135, height: 135, level: 80 },
  { name: 'VS Code', image: '/pictures/softwares/VSCode.jpg', width: 135, height: 135, level: 80 },
  { name: 'Git', image: '/pictures/softwares/Git.jpg', width: 135, height: 135, level: 60 },
  { name: 'PhpStorm', image: '/pictures/softwares/PhpStorm.jpg', width: 135, height: 135, level: 60 },
  { name: 'PyCharm', image: '/pictures/softwares/PyCharm.jpg', width: 135, height: 135, level: 60 },
  { name: 'Docker', image: '/pictures/softwares/Docker.jpg', width: 200, height: 135, level: 50 }
];

const Body: React.FC = () => {
  return (
    <section className={styles.skillsSection}>
      <h1 className={styles.h1}>{`Langages`}</h1>
      <div className={styles.skillsContainer}>
        {languagesData.map((language, index) => (
          <div className={styles.skillItem} key={index}>
            <Image src={language.image} alt={language.name} width={language.width} height={language.height} />
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
            <Image src={software.image} alt={software.name} width={software.width} height={software.height} />
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
