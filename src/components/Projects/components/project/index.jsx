"use client";
import React from "react";
import styles from "./style.module.scss";

export default function Project({ index, title, manageModal }) {
  const handleMouseAction = (active, e) => {
    manageModal(active, index, e.clientX, e.clientY);
  };

  return (
    <section
      onMouseEnter={(e) => handleMouseAction(true, e)}
      onMouseLeave={(e) => handleMouseAction(false, e)}
      className={styles.project}>
      <h2>{title}</h2>
      <p>Diseño & Desarrollo</p>
    </section>
  );
}
