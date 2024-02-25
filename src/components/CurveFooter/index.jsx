import styles from "./style.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CurveFooter = () => {
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
      {/* <section ref={container} className={styles.box}></section> */}
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </>
  );
};

export default CurveFooter;
