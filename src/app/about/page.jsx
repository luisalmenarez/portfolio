"use client";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Curve from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeaderAbout from "./components/HeaderAbout";
import MainAbout from "./components/MainAbout";
import styles from "./style.module.scss";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 520 });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 700);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Curve pageName="Sobre mí" />}
      </AnimatePresence>
      <section className={styles.about}>
        <HeaderAbout />
        <MainAbout />
      </section>
      {isMobile ? <Footer /> : <Contact />}
    </>
  );
};

export default About;
