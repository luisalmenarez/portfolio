import { motion } from "framer-motion";
import styles from "./style.module.scss";

const SectionSkills = () => {
  return (
    <article className={styles.containerSkills}>
      <header className={styles.title}>
        <h3>Especializado en</h3>
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.2,
          }}>
          .
        </motion.span>
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.4,
          }}>
          .
        </motion.span>
      </header>
      <section className={styles.details}>
        <article className={styles.details__section}>
          <h2 className={styles.role}>01</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <h4>Diseño</h4>
            <p>
              Imagina un mundo donde cada línea de código es una obra maestra,
              donde la elegancia y la eficiencia se fusionan para crear
              experiencias digitales que desafían los límites de la imaginación.
            </p>
          </li>
          <div className={styles.stripMobile}></div>
        </article>
        <div className={styles.details__section}>
          <h2 className={styles.role}>02</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <h4>Desarrollo</h4>
            <p>
              Construyo sitios web escalables desde cero, que se adaptan
              perfectamente a cada diseño, me enfoco en la eficiencia y
              velocidad. Con ayuda de TypeScript, React, NextJS, Tailwind, entre
              otros. Busco trascender lo ordinario.
            </p>
          </li>
          <div className={styles.stripMobile}></div>
        </div>
        <div className={styles.details__section}>
          <h2 className={styles.role}>03</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <h4>Análisis</h4>
            <p>
              Traduzco ideas abstractas en productos tangibles. Soy más que un
              desarrollador, soy un arquitecto de soluciones, un visionario que
              transforma conceptos en realidades, siempre sobrepasando los
              límites de la creatividad y la innovación.
            </p>
          </li>
          <div className={styles.stripMobile}></div>
        </div>
      </section>
    </article>
  );
};

export default SectionSkills;
