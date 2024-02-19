"use client";
import styles from "./style.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import Curve from "@/components/LoaderPage";
import { AnimatePresence, motion } from "framer-motion";
import { opacity, slide } from "../work/anim";
import Rounded from "@/common/RoundedButton";
import Link from "next/link";
import HeaderAbout from "./components/HeaderAbout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 520 });

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({});
      }

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 700);
    };

    fetchData();
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Curve pageName="Sobre mí" />}
      </AnimatePresence>
      <section className={styles.about}>
        <HeaderAbout />
        <article className={styles.descriptionContent}>
          <div className={styles.descriptionText}>
            <p>
              Soy Luis Almenarez, un arquitecto del código. Explorando el
              desarrollo de software, busco fusionar creatividad y lógica en
              cada proyecto. Mi viaje está marcado por la búsqueda constante de
              la excelencia técnica y la innovación. Para mí, programar es más
              que una habilidad; es una exploración de los límites de la
              imaginación en el perpetuo universo digital.
            </p>
            <p className={styles.descriptionPhrase}>
              Descubrimiento constante...
            </p>
          </div>
          <div className={styles.gridImage}>
            <div
              data-scroll
              data-scroll-speed={-0.2}
              data-scroll-position={"top"}
              className={styles.overlay}></div>
          </div>
        </article>
      </section>
      {isMobile ? <Footer /> : <Contact />}
    </>
  );
};

export default About;
