import { slide } from "@/app/assets/anim";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ResponsiveProjects from "../ResponsiveProject";
import styles from "./style.module.scss";

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

const ContentWork = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const cursor = useRef(null);
  const modalContainer = useRef(null);
  const cursorLabel = useRef(null);

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

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

  // Animation from anim
  const anim = (variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

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

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section ref={container} className={styles.contentWorkContainer}>
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
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </section>
  );
};

export default ContentWork;
