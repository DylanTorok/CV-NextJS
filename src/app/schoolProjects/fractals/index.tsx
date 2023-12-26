import React from 'react';
import styles from './Body.module.css';
import Image from 'next/image';

const Body: React.FC = () => {

  return (
    <section className={styles.body}>
      <p className={styles.text}>{`L'objectif de ce projet était de générer des fractales à l'aide de Java.
      En groupe de trois, nous nous sommes répartis de nombreuses tâches, dont le but final était d'obtenir différentes fractales.`}
      </p>
      <p className={styles.text}> {`Nous travaillions sur un dépôt gitLab commun afin de séparer chacune des tâches les unes des autres.`}
      </p>
      <p className={styles.text}> {`La difficulté de ce projet était à la fois programmatique et mathématique ; les fractales sont inhérentes aux nombres complexes.
       Il fallait donc connaître les calculs primaires de ces dernieres
      (addition, soustraction, multiplication, division, conjugué) pour démarrer le projet.`}
      </p>
      <p className={styles.text}> {`Ensuite, d'autres éléments étaient nécessaires à la génération des fractales : 
      la création d'un plan avec une abscisse et une ordonnée puis d'une image, des suites mathématiques
      permettant d'afficher des fractales différentes sur le plan, etc.`}
      </p>
      <p className={styles.text}> {`D'autres fractales spécifiques, comme le "tapis de Sierpinski", avaient besoin d'être codées récursivement.
      De multiples patrons de conception furent utilisés afin de rendre le projet cohérent et plus lisible.`}
      </p>
      <p className={styles.text}> {`À la fin, des scripts bash furent écrits pour générer automatiquement les images des fractales.`}
      </p>
      <div className={styles.imagesContainer}>
        <Image src="/pictures/schoolProjects/fractals/RedJulia.jpg" alt="Red Julia" width= "500" height="125" className={styles.image} />
        <Image src="/pictures/schoolProjects/fractals/RedMandelbrot.jpg" alt="Red Mandelbrot" width= "500" height="125" className={styles.image} />
      </div>
    </section>
  );
};

export default Body;
