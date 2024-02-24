"use client";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Contact, Footer, LoaderPage } from "@/components/index";
import { HeaderAbout, MainAbout, DescriptionAbout } from "./components/";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 520 });

  useEffect(() => {
    document.title = "Sobre mí - Luis Almenarez";
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 700);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoaderPage pageName="Sobre mí" />}
      </AnimatePresence>
      <section className={styles.about}>
        <HeaderAbout />
        <MainAbout />
        <DescriptionAbout />
      </section>
      {/* {isMobile ? <Footer /> : <Contact />} */}
    </>
  );
};

export default About;
