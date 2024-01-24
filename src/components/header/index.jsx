"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import Nav from "./nav/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <header ref={header} className={styles.header}>
        <article className={styles.logo}>
          <p className={styles.copyright}>&copy;</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.luis}>Luis</p>
            <p className={styles.almenarez}>Almenarez</p>
          </div>
        </article>
        <article className={styles.nav}>
          <div className={styles.el}>
            <a>Work</a>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <a>About</a>
            <div className={styles.indicator}></div>
          </div>
          <div className={styles.el}>
            <a>Contact</a>
            <div className={styles.indicator}></div>
          </div>
        </article>
      </header>

      <section ref={button} className={styles.headerButtonContainer}>
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
      </section>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
