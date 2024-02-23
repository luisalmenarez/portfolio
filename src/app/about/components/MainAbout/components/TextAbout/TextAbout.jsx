import styles from "./styles.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const TextAbout = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
    touch: {
      enabled: true,
      sensitivity: 0.5,
      touchMultiplier: 2,
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({});
      }
    };

    fetchData();
  }, []);

  //Rotate from arrow SVG
  const rotate = useTransform(scrollYProgress, [0, 1], [-45, 0]);

  return (
    <article
      data-scroll
      data-scroll-speed="-0.1"
      data-scroll-position="top"
      data-scroll-offset="0%, -50%"
      ref={container}
      className={styles.descriptionText}>
      <motion.svg
        style={{ rotate, scale: 2 }}
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
          fill="black"
        />
      </motion.svg>
      <p>
        Soy Luis Almenarez, un arquitecto del código. Explorando el desarrollo
        de software, busco fusionar creatividad y lógica en cada proyecto. Mi
        viaje está marcado por la búsqueda constante de la excelencia técnica y
        la innovación.
      </p>
      <p>
        Para mí, programar es más que una habilidad; es una exploración de los
        límites de la imaginación en el perpetuo universo digital.
      </p>
      <blockquote className={styles.descriptionPhrase}>
        La verdadera sabiduría reside en la búsqueda eterna, en la negativa a
        conformarse con respuestas superficiales...
      </blockquote>
    </article>
  );
};

export default TextAbout;
