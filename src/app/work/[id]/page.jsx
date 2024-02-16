"use client";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "@/app/assets/data";
import { opacity, slide } from "./components/TitleContent/anim";
import { motion } from "framer-motion";
import TitleContent from "./components/TitleContent";
import ContentGalery from "./components/ContentGalery";

const ItemProject = () => {
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

  const anim = (variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoaderPage pageName={nameProject} />}
      </AnimatePresence>
      <TitleContent />
      <ContentGalery />
    </>
  );
};

export default ItemProject;
