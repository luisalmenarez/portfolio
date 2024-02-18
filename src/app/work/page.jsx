"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";
import Rounded from "@/common/RoundedButton";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { opacity, slide } from "./anim";
import ResponsiveProjects from "./components/ResponsiveProject";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Work = () => {
  const isMobile = useMediaQuery({ maxWidth: 520 });
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

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

  const height = useTransform(scrollYProgress, [0, 1], [15, 0]);

  useEffect(() => {
    const initLocomotiveScroll = async () => {
      if (typeof window !== "undefined") {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          el: document.querySelector(".main"),
          smooth: true,
          smoothMobile: false,
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
    const initAnimations = () => {
      if (typeof window !== "undefined" && typeof document !== "undefined") {
        //Move Container
        xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
          duration: 0.8,
          ease: "power3",
        });
        yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
          duration: 0.8,
          ease: "power3",
        });
        //Move cursor
        xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
          duration: 0.5,
          ease: "power3",
        });
        yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
          duration: 0.5,
          ease: "power3",
        });
        //Move cursor label
        xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
          duration: 0.45,
          ease: "power3",
        });
        yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
          duration: 0.45,
          ease: "power3",
        });
      }
    };

    initAnimations();
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 700);
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
        {isLoading && <LoaderPage pageName="Proyectos" />}
      </AnimatePresence>
      <motion.section {...anim(opacity)} className={styles.about}>
        <div className={styles.content}>
          <h1>Creando aplicaciones web con el más alto nivel</h1>
          <article className={styles.buttons}>
            <Link href={"https://github.com/luisalmenarez"} target="_blank">
              <Rounded>
                <p>Github</p>
              </Rounded>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/luisalmenarez/"}
              target="_blank">
              <Rounded>
                <p>LinkedIn</p>
              </Rounded>
            </Link>
            <Link
              href={"https://www.instagram.com/_luisalmenarez/"}
              target="_blank">
              <Rounded>
                <p>Instagram</p>
              </Rounded>
            </Link>
          </article>
        </div>
      </motion.section>
      <motion.section
        {...anim(slide)}
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY);
        }}
        className={styles.projects}>
        <ResponsiveProjects manageModal={manageModal} modal={modal} />

        <motion.section
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}></motion.section>
        <motion.section
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}>
          View
        </motion.section>
      </motion.section>
      <section ref={container} className={styles.box}></section>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
      {isMobile ? <Footer /> : <Contact />}
    </>
  );
};

export default Work;
