"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Description from "@/components/Description";
import SlidingImages from "@/components/SlidingImages";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 1500);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
