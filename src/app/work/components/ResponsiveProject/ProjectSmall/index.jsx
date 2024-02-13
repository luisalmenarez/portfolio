"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function index({ index, title, manageModal, image }) {
  const originalWidth = 960;
  const originalHeight = 540;

  return (
    <section className={styles.containerSmallProject}>
      <section
        onMouseEnter={(e) => {
          manageModal(true, index, e.clientX, e.clientY);
        }}
        onMouseLeave={(e) => {
          manageModal(false, index, e.clientX, e.clientY);
        }}
        className={styles.projectSmall}>
        <Image
          src={image}
          alt="Image Project Shop Tech"
          layout="responsive"
          width={originalWidth}
          height={originalHeight}
        />
      </section>
      <h2>{title}</h2>
      <p>Diseño & Desarollo</p>
    </section>
  );
}
