import React from 'react';
import styles from './Body.module.css';

const Body: React.FC = () => {

  return (
    <section className={styles.body}>
      <p className={styles.text}>{`L'objectif de ce projet était de créer une API permettant d'enregistrer et d'afficher
      les données météos de cinq villes grâce au framework Flask.`}
      </p>
      <p className={styles.text}> {`En somme, cette API permettait de gérer la consommation électrique
      des datacenters de ces villes selon les conditions météorologiques extérieures.`}
      </p>
      <p className={styles.text}> {`Tout d'abord, il fallait récupérer les données météos
      (température, pression atmosphérique, taux d'humidité, etc.) sur le site "wttr.in",
      qui permet de consulter les données météos actuelles de toutes les villes à travers le monde.`}
      </p>
      <p className={styles.text}> {`Ces données, sous format JSON, durent ensuite être stockées dans une base de données grâce au SGBD SQLite.`}
      </p>
      <p className={styles.text}> {`Une page HTML avec un bouton permet de lancer une requête à "wttr.in" afin de récupérer les données météos actuelles
       et les mettre dans la base de données.`}
      </p>
      <p className={styles.text}> {`Après avoir récupéré un ensemble de données, nous pouvions afficher l'historique des températures de chaque ville
      dans des graphiques en courbes, grâce à la bibliothèque Python "Matplotlib".`}
      </p>
      <p className={styles.text}> {`Un formulaire permet de choisir la date de début et de fin d'observation afin de personnaliser le graphique.`}
      </p>
      <div className={styles.imagesContainer}>
        <img src="/pictures/schoolProjects/weatherReport/Form.jpg" alt="Form" className={styles.image1} />
        <img src="/pictures/schoolProjects/weatherReport/CurrentReadings.jpg" alt="Current Readings" className={styles.image2} />
      </div>
    </section>
  );
};

export default Body;
