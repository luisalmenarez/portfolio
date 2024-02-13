"use client";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import Curve from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 700);
  }, []);

  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h1>ABOUT ME</h1>
        <AnimatePresence>
          {isLoading && <Curve pageName="Sobre mí" />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
