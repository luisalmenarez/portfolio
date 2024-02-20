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
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import { useMediaQuery } from "react-responsive";

const useRouter = dynamic(() => import("next/router"), { ssr: false });

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 520 });

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const initLocomotiveScroll = async () => {
      if (typeof window !== "undefined") {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          el: document.body,
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
        }, 1400);
      }
    };

    initLocomotiveScroll();
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && router.pathname !== "/" && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      {isMobile ? <Footer /> : <Contact />}
    </main>
  );
}
