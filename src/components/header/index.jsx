"use client";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import Nav from "./nav/index";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <>
      <section ref={containerRef}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}></div>
        </div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </section>
    </>
  );
}
