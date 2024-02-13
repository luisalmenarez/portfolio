"use client";

import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";

const Contact = () => {
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
        <h1>CONTACTO</h1>
        <AnimatePresence>
          {isLoading && <LoaderPage pageName="Contacto" />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
