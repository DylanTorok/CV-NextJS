import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {

return (
  <header className={styles.footer}>
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}> 
          <svg className={styles.svg} width="49" height="48">
            <path fill="#fff" d="M 34.808594 0 L 14.191406 0 C 12.21875 0 10.625 1.601562 10.625 3.570312 L 10.625 45.433594 C 10.625 47.402344 12.21875 49 14.191406 49 L 34.808594 49 C 36.777344 49 38.375 47.402344 38.375 45.433594 L 38.375 3.570312 C 38.375 1.601562 36.777344 0 34.808594 0 Z M 19.414062 2.167969 L 29.589844 2.167969 C 29.847656 2.167969 30.058594 2.550781 30.058594 3.027344 C 30.058594 3.5 29.847656 3.886719 29.589844 3.886719 L 19.414062 3.886719 C 19.152344 3.886719 18.949219 3.5 18.949219 3.027344 C 18.949219 2.550781 19.152344 2.167969 19.414062 2.167969 Z M 24.5 45.476562 C 23.246094 45.476562 22.226562 44.457031 22.226562 43.199219 C 22.226562 41.941406 23.246094 40.921875 24.5 40.921875 C 25.753906 40.921875 26.773438 41.941406 26.773438 43.199219 C 26.773438 44.457031 25.753906 45.476562 24.5 45.476562 Z M 35.703125 37.675781 L 13.300781 37.675781 L 13.300781 6.023438 L 35.703125 6.023438 Z M 35.703125 37.675781 "/>
          </svg>
          #33766157961</li>
        <li className={styles.li}> 
          <svg className={styles.svg} fill="#fff" width="49" height="48">
            <path d="M 0 0 L 0 49 L 49 49 L 49 0 Z M 15.242188 40.707031 L 7.972656 40.707031 L 7.972656 18.835938 L 15.242188 18.835938 Z M 11.605469 15.851562 L 11.558594 15.851562 C 9.121094 15.851562 7.539062 14.171875 7.539062 12.070312 C 7.539062 9.925781 9.164062 8.292969 11.652344 8.292969 C 14.140625 8.292969 15.671875 9.925781 15.71875 12.070312 C 15.71875 14.171875 14.140625 15.851562 11.605469 15.851562 Z M 41.460938 40.707031 L 34.191406 40.707031 L 34.191406 29.007812 C 34.191406 26.066406 33.140625 24.0625 30.507812 24.0625 C 28.496094 24.0625 27.304688 25.410156 26.777344 26.71875 C 26.585938 27.1875 26.535156 27.835938 26.535156 28.492188 L 26.535156 40.707031 L 19.261719 40.707031 C 19.261719 40.707031 19.359375 20.886719 19.261719 18.835938 L 26.535156 18.835938 L 26.535156 21.933594 C 27.5 20.449219 29.226562 18.324219 33.089844 18.324219 C 37.875 18.324219 41.460938 21.449219 41.460938 28.164062 Z M 41.460938 40.707031 "/>
          </svg>
          <a className={styles.a} href="https://www.linkedin.com/in/dylan-torok/" target="_blank">
          LinkedIn</a></li>

        <li className={styles.li}>
          <svg className={styles.svg} width="49" height="48">
            <path fill="#fff" d="M 24.425781 0 C 10.917969 0 0 11 0 24.609375 C 0 35.488281 6.996094 44.695312 16.703125 47.953125 C 17.914062 48.199219 18.359375 47.425781 18.359375 46.773438 C 18.359375 46.203125 18.320312 44.246094 18.320312 42.210938 C 11.527344 43.675781 10.109375 39.277344 10.109375 39.277344 C 9.019531 36.421875 7.402344 35.691406 7.402344 35.691406 C 5.175781 34.183594 7.5625 34.183594 7.5625 34.183594 C 10.03125 34.347656 11.324219 36.710938 11.324219 36.710938 C 13.507812 40.457031 17.027344 39.398438 18.441406 38.746094 C 18.644531 37.15625 19.289062 36.058594 19.976562 35.445312 C 14.558594 34.875 8.855469 32.757812 8.855469 23.304688 C 8.855469 20.617188 9.828125 18.414062 11.363281 16.703125 C 11.121094 16.09375 10.273438 13.566406 11.605469 10.183594 C 11.605469 10.183594 13.667969 9.535156 18.320312 12.710938 C 20.3125 12.171875 22.363281 11.898438 24.425781 11.898438 C 26.488281 11.898438 28.59375 12.183594 30.535156 12.710938 C 35.183594 9.535156 37.246094 10.183594 37.246094 10.183594 C 38.582031 13.566406 37.730469 16.09375 37.488281 16.703125 C 39.066406 18.414062 39.996094 20.617188 39.996094 23.304688 C 39.996094 32.757812 34.296875 34.835938 28.835938 35.445312 C 29.726562 36.21875 30.492188 37.6875 30.492188 40.007812 C 30.492188 43.308594 30.453125 45.957031 30.453125 46.773438 C 30.453125 47.425781 30.898438 48.199219 32.109375 47.953125 C 41.816406 44.695312 48.8125 35.488281 48.8125 24.609375 C 48.851562 11 37.894531 0 24.425781 0 Z M 24.425781 0 "/>
          </svg>
          <a className={styles.a} href="https://github.com/DylanTorok/CV-NextJS" target="_blank"> 
          Code source</a></li>
      </ul>
    </nav>
  </header>
  );
};

export default Footer;