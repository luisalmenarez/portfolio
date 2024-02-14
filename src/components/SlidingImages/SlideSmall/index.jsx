import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import { useRef } from "react";

export default function Index() {
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

  const height = useTransform(scrollYProgress, [0, 1], [15, 0]);

  return (
    <>
      <section ref={container} className={styles.box}></section>

      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </>
  );
}
