"use client";
import { Contact, CurveFooter, Footer, LoaderPage } from "@/components/index";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ContentWork from "./components/ContentWork";
import HeaderWork from "./components/HeaderWork";
import styles from "./style.module.scss";

const Work = () => {
  const isMobile = useMediaQuery({ maxWidth: 520 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Proyectos - Luis Almenarez";
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 700);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoaderPage pageName="Proyectos" />}
      </AnimatePresence>
      <main className={styles.main}>
        <HeaderWork />
        <ContentWork />
        <CurveFooter />
        {isMobile ? <Footer /> : <Contact />}
      </main>
    </>
  );
};

export default Work;
