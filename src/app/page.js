"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Description from "@/components/Description";
import SlidingImages from "@/components/SlidingImages";
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader";
import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (
        typeof window !== "undefined" &&
        window.location.hostname !== "localhost"
      ) {
        const locomotiveScroll = new LocomotiveScroll({
          el: document.querySelector(".main"),
          smooth: true,
          smoothMobile: true,
          touch: {
            enabled: true,
            sensitivity: 1.5,
            touchMultiplier: 5,
          },
        });

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
        }, 1500);
      }
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
