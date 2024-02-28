"use client";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ContentContact from "./components/ContectContact/ContentContact";
import TitleContact from "./components/HeaderContact/TitleContact";
import styles from "./style.module.scss";
import ContactDetails from "./components/ContactDetails/ContactDetails";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Contacto - Luis Almenarez";
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 700);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoaderPage pageName="Contacto" />}
      </AnimatePresence>
      <section className={styles.contact}>
        <TitleContact />
        <ContentContact />
      </section>
    </>
  );
};

export default Contact;
