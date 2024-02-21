"use client";
import { Contact, Footer, LoaderPage } from "@/components/index";
import { AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ContentWork from "./components/ContentWork";
import HeaderWork from "./components/HeaderWork";
import styles from "./style.module.scss";

const Work = () => {
  const isMobile = useMediaQuery({ maxWidth: 520 });
  const [isLoading, setIsLoading] = useState(true);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
    touch: {
      enabled: true,
      sensitivity: 0.5,
      touchMultiplier: 2,
    },
  });

  useEffect(() => {
    document.title = "Proyectos - Luis Almenarez";
    const initLocomotiveScroll = async () => {
      if (typeof window !== "undefined") {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          el: document.body,
          smooth: true,
          smoothMobile: true,
          inertia: 0.2,
          touch: {
            enabled: true,
            sensitivity: 1.5,
            touchMultiplier: 5,
          },
        });
      }
    };

    initLocomotiveScroll();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 700);
  }, []);

  return (
    <main>
      <AnimatePresence>
        {isLoading && <LoaderPage pageName="Proyectos" />}
      </AnimatePresence>
      <HeaderWork />
      <ContentWork />
      {isMobile ? <Footer /> : <Contact />}
    </main>
  );
};

export default Work;
