import React from 'react';
import styles from './Body.module.css';

const Body: React.FC = () => {

  return (
    <section className={styles.body}>
      <p className={styles.text}>{`Je me suis lancé dans la création d'un jeu de blackjack en langage C afin 
      d'apprendre ce langage et avoir des prérequis pour apprendre ultérieurement le C++.`}.
      </p>
      <p className={styles.text}> {`Les règles du jeu sont simples : le joueur et la banque tire deux cartes chacune.
      Le joueur décide ensuite de tirer une nouvelle carte ou de rester. S'il reste, la banque tire des cartes tant qu'elle
      n'égalise ou n'excède pas 17 points. La banque ou le joueur perdent s'ils dépassent 21 points.
      Celui qui a obtenu le plus de points gagne la partie.`}
      </p>
      <p className={styles.text}> {`La valeur des cartes correspond à leur valeur nominale pour les cartes de 2 à 10.
      Le valet, la dame et le roi valent 10 points. Puis l'as vaut 11 points ou 1 point si le score du joueur plus les 11 points de l'as
      dépasse 21 points (exemple : dix + valet + as = 10 + 10 + 1 = 21 points. Sinon 10 + 10 + 11 = 31 points).
      La totalité de ces règles sont présentes dans ce blackjack. `}
      </p>
      <p className={styles.text}> {`Le jeu est jouable sur l'invite de commandes après avoir compilé le programme.`}
      </p>
      <div className={styles.imagesContainer}>
        <img src="/pictures/personalProjects/blackjack/Initialization.jpg" alt="Initialization" className={styles.image} />
        <img src="/pictures/personalProjects/blackjack/Stay.jpg" alt="Stay" className={styles.image} />
      </div>
    </section>
  );
};

export default Body;
