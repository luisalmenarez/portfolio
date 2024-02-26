"use client";

import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import TitleContact from "./components/HeaderContact/TitleContact";

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
        <div className="w-full py-6 bg-gray-100 dark:bg-[#141516]">
          <TitleContact />
        </div>
      </section>
    </>
  );
};

export default Contact;
