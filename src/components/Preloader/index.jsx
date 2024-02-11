import { useEffect, useState } from "react";
import { opacity, slideUp } from "./anim";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const words = [
  "Luis Almenarez",
  "Software",
  "Engineer",
  "Analista",
  "Developer",
  "Desarrollador",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(
      () => setIndex(index + 1),
      index === 0 ? 1000 : 150
    );

    return () => clearTimeout(timeout);
  }, [index]);

  const controlPointY = dimension.height * 1.5;

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${controlPointY} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.section
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}>
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"></motion.path>
          </svg>
        </>
      )}
    </motion.section>
  );
}
