"use client";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const Project = ({ project }) => {
  const [isActive, setIsActive] = useState(false);
  const { title1, title2, src } = project;

  return (
    <div
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      className={styles.project}>
      <p>{title1}</p>
      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}>
        <Image src={`${src}`} alt="Image" width={960} height={540} />
      </motion.div>
      <p>{title2}</p>
    </div>
  );
};

export default Project;
