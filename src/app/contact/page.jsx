"use client";
import styles from "./style.module.scss";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { TitleContact, ContentContact, FooterContact } from "./components";

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
        <FooterContact />
      </section>
    </>
  );
};

export default Contact;
