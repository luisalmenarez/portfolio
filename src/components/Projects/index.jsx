"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ResponsiveProjects from "./components/ResponsiveProject";
import gsap from "gsap";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import Link from "next/link";

const projects = [
  {
    title: "Shop Tech",
    src: "projects/shopTech.png",
    color: "#000000",
    url: "/work/shop-tech",
  },
  {
    title: "Pfmanfit",
    src: "projects/pfmanfit.png",
    color: "#8C8C8C",
    url: "/work/pfmanfit",
  },
  {
    title: "React Ecommerce",
    src: "projects/shopping.png",
    color: "#d7d7d7",
    url: "/work/shopping-store",
  },
  {
    title: "Gallery",
    src: "projects/gallery.png",
    color: "#706D63",
    url: "/work/gallery",
  },
];

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

export default function Projects() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

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

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <section
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}>
      <h5>Proyectos recientes</h5>
      {isMobile ? (
        <ResponsiveProjects manageModal={manageModal} modal={modal} />
      ) : (
        <section className={styles.body}>
          {projects.map((project, index) => (
            <Link href={project.url} key={index}>
              <Project
                index={index}
                title={project.title}
                manageModal={manageModal}
              />
            </Link>
          ))}
        </section>
      )}
      <Link href="/work" className={styles.link}>
        <Rounded>
          <p>Más proyectos</p>
        </Rounded>
      </Link>

      <>
        <motion.section
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}>
          <section
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}>
            {projects.map((project, index) => (
              <section
                className={styles.modal}
                style={{ backgroundColor: project.color }}
                key={`modal_${index}`}>
                <Image
                  src={`/images/${project.src}`}
                  width={300}
                  height={0}
                  alt="image"
                />
              </section>
            ))}
          </section>
        </motion.section>
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
      </>
    </section>
  );
}
