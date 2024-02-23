import styles from "./style.module.scss";
import { useEffect } from "react";
import { SectionSkills, ImageAbout, TextAbout } from "./components";
import { off, slide } from "@/app/assets/anim";
import { motion } from "framer-motion";

const MainAbout = () => {
  // Load scroll for effect data-scroll locomotive library
  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({});
      }
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
    <section className={styles.mainAbout}>
      <motion.article {...anim(off)} className={styles.grid}>
        <TextAbout />
        <ImageAbout />
      </motion.article>
      <SectionSkills />
    </section>
  );
};

export default MainAbout;
