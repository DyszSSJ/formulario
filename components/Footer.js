import React from "react";
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h2 className={styles.privacidad}>Cómo cuidamos tu Privacidad</h2>
      <p className={styles.parrafo}>
        Copyright © 1999-2022 Axel David Téllez Álvarez
      </p>
    </div>
  );
};

export default Footer;
