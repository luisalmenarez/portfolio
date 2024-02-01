"use client";
import styles from "./style.module.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./animation";
import { useRef } from "react";
import Rounded from "@/common/RoundedButton";
import Link from "next/link";

export default function Index() {
  const phrase =
    "De Medellín, Colombia 🇨🇴. Especializado en crear aplicaciones FullStack que dan vida a soluciones innovadoras.";
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  custom={index}
                  variants={slideUp}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}>
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : "closed"}>
          Mi viaje en el desarrollo de software se distingue por no conformarme
          con lo ordinario. Cada línea de código es un paso hacia la excelencia,
          y cada diseño es una expresión de creatividad.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Link href="/about">
            <Rounded className={styles.button}>
              <p>Sobre mí</p>
            </Rounded>
          </Link>
        </div>
      </div>
    </section>
  );
}
