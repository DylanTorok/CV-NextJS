import React from 'react';
import styles from './Body.module.css';

const Body: React.FC = () => {

  return (
    <ul className={styles.ul}>
      <li className={styles.li}>{`Diplôme universitaire de trois ans en informatique | 2021 - Maintenant`}</li>
      <p className={styles.p1}> {`IUT de Lens, Université d'Artois, 62300, France`}</p>

      <li className={styles.li}> {`Baccalauréat | 2018 - 2021`}</li>
      <p className={styles.p2}> {`Voie technologique (Sciences et technologies de l'industrie et du développement durable),
      option SIN (Système d'information et numérique), Lycée Pasteur, Hénin-Beaumont, 62110, France`}
      </p>
    </ul>
  );
};

export default Body;
