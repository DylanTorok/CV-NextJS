import React from 'react';
import styles from './Body.module.css';

const Body: React.FC = () => {

  const classes = `${styles.body} ${styles.text}`

  return (
    <>
    <p className={classes}>{`Bienvenue dans mon espace dédié à la programmation.
    Je m'appelle Torok Dylan, étudiant en 3ème année de BUT informatque à l'IUT de Lens`}.
    </p>
    <p className={classes}> {`Ce portfolio est une fenêtre sur mes projets personnels et académiques en programmation.
    Vous y découvrirez une collection de défis résolus, d'applications conçues et de technologies explorées. `}
    </p>
    <p className={classes}> {`En explorant ces pages, vous verrez comment mes compétences ont évolué, des premières lignes de code aux projets actuels.
    Merci de prendre le temps de parcourir mon travail.
    J'espère que cette immersion dans mon portfolio vous offrira un aperçu authentique de ma passion pour la programmation informatique.`}
    </p>
    </>
  );
};

export default Body;
