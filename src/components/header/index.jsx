"use client";
import styles from "./style.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./nav/index";
import gsap from "gsap";
import Rounded from "@/common/RoundedButton";
import Magnetic from "@/common/Magnetic";
import Link from "next/link";

export default function Home() {
  const [key, setKey] = useState(0);
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const isWorkRoute = pathname !== "/" && pathname !== "/contact";

  useEffect(() => {
    if (isActive) setIsActive(false);
    setKey((prevKey) => prevKey + 1);
    setIsOverlayVisible(isActive);

    return () => {
      setIsOverlayVisible(false);
    };
  }, [pathname]);

  useEffect(() => {
    setIsOverlayVisible(isActive);
  }, [isActive]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top 50%",
        end: "bottom 50%",
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
  }, [key]);

  return (
    <>
      <header
        ref={header}
        className={
          isWorkRoute ? `${styles.header} ${styles.colorBlack}` : styles.header
        }>
        <Magnetic>
          <Link href="/">
            <article className={styles.logo}>
              <p className={styles.copyright}>&copy;</p>
              <div className={styles.name}>
                <p className={styles.codeBy}>Hecho por</p>
                <p className={styles.luis}>Luis</p>
                <p className={styles.almenarez}>Almenarez</p>
              </div>
            </article>
          </Link>
        </Magnetic>
        <article className={styles.nav}>
          <Magnetic>
            <div className={styles.el}>
              <Link href="/work">Proyectos</Link>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <Link href="/about">Sobre mí</Link>

              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          <Magnetic>
            <div className={styles.el}>
              <Link href="/contact">Contacto</Link>

              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
        </article>
        <Magnetic>
          <div className={styles.menuSmall}>
            <p
              onClick={() => {
                setIsActive(!isActive);
                const headerButtonContainer = document.querySelector(
                  `.${styles.headerButtonContainer}`
                );
                if (headerButtonContainer) {
                  headerButtonContainer.style.transition =
                    "transform 500ms ease";
                  headerButtonContainer.style.transform = isActive
                    ? "scale(0)"
                    : "scale(1)";
                }
              }}>
              Menú
            </p>
          </div>
        </Magnetic>
      </header>

      {isOverlayVisible && (
        <div
          className={styles.overlay}
          onClick={() => {
            setIsActive(false);
            setIsOverlayVisible(false);
          }}
        />
      )}

      <section ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}>
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}></div>
        </Rounded>
      </section>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
