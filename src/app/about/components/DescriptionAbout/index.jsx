import { useRef } from "react";
import styles from "./style.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { Contact } from "@/components";

const DescriptionAbout = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
    touch: {
      enabled: true,
      sensitivity: 0.5,
      touchMultiplier: 2,
    },
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <>
      <article ref={container} className={styles.descriptionAbout}>
        <div className={styles.gridImage}>
          <div
            data-scroll
            data-scroll-speed={-0.2}
            data-scroll-position={"top"}
            className={styles.overlay}></div>
        </div>
        <div
          data-scroll
          data-scroll-speed="0.1"
          data-scroll-position="top"
          data-scroll-offset="0%, -50%"
          className={styles.descriptionText}>
          <header className={styles.title}>
            <h3>Un poco más sobre mí</h3>
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
          <p>
            Me encanta explorar nuevos lugares, especialmente en el hermoso
            departamento de Antioquia, donde encuentro inspiración en la diversa
            fauna y flora. Cada viaje es una aventura que alimenta mi
            creatividad y enriquece mi enfoque hacia el trabajo.
          </p>
          <p>
            Además, soy un ávido lector de filosofía. Siempre busco libros que
            me desafíen a crecer tanto personal como profesionalmente. Creo
            firmemente en el poder del conocimiento y la educación continua para
            alcanzar el éxito en cualquier campo.
          </p>
        </div>
      </article>
    </>
  );
};

export default DescriptionAbout;
