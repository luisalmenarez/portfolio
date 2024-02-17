"use client";
import styles from "./style.module.scss";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "@/app/assets/data";
import TitleContent from "./components/TitleContent";
import ContentGalery from "./components/ContentGalery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CurveFooter from "@/components/CurveFooter";
import { useMediaQuery } from "react-responsive";

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
      <main className={styles.main}>
        <AnimatePresence>
          {isLoading && <LoaderPage pageName={nameProject} />}
        </AnimatePresence>
        <TitleContent />
        <ContentGalery />
      </main>
      <CurveFooter />

      {isMobile ? <Footer /> : <Contact />}
    </>
  );
};

export default ItemProject;
