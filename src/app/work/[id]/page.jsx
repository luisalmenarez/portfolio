"use client";
import styles from "./style.module.scss";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "@/app/assets/data";
import TitleContent from "./components/TitleContent";
import ContentGalery from "./components/ContentGalery";
import { useMediaQuery } from "react-responsive";
import { Contact, Footer, CurveFooter } from "@/components";

const ItemProject = () => {
  const isMobile = useMediaQuery({ maxWidth: 520 });
  const pathname = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const title = pathname.id;

  const project = projects.find(
    (project) => project.title.toLowerCase().replace(/\s/g, "-") === title
  );

  const nameProject = project.title;

  useEffect(() => {
    document.title = `${nameProject} - Luis Almenarez`;
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
    <>
      <AnimatePresence>
        {isLoading && <LoaderPage pageName={nameProject} />}
      </AnimatePresence>
      <main className={styles.main}>
        <TitleContent />
        <ContentGalery />
        <CurveFooter />
        {isMobile ? <Footer /> : <Contact />}
      </main>
    </>
  );
};

export default ItemProject;
