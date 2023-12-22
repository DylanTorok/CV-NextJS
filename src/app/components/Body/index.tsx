import React from 'react';
import styles from './Body.module.css';

const Body: React.FC = () => {

  const classes = `${styles.body} ${styles.text}`

  return (
    <>
    <p className={classes}>{`Vous trouverez ici mon parcours scolaire sous forme de frise chronologique, la liste de mes compétences techniques que j'ai acquises
    à l'IUT ainsi que mes projets effectués lors des cours et ceux dans un cadre personnel.
    Je vous souhaite une bonne visite !`}</p>
    </>
  );
};

export default Body;
