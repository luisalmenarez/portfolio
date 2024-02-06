"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { opacity } from "./anim";

export default function Landing({ isLoading }) {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const sliderRef = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const slider = sliderRef.current;

    gsap.to(slider, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=100px",
    });

    requestAnimationFrame(animation);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const animation = () => {
    const firstText = firstTextRef.current;
    const secondText = secondTextRef.current;

    if (xPercent <= -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText, { xPercent: xPercent });
    gsap.set(secondText, { xPercent: xPercent });
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  };

  const anim = (variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

  return (
    <section className={styles.landing}>
      <Image fill={true} src="/images/bg.jpg" alt="Hero Image" />
      <motion.div {...anim(opacity)} className={styles.sliderContainer}>
        <div ref={sliderRef} className={styles.slider}>
          <p ref={firstTextRef}>Luis Almenarez — Desarrollador Software</p>
          <p ref={secondTextRef}>Luis Almenarez — Desarrollador Software</p>
        </div>
      </motion.div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <motion.article {...anim(opacity)}>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </svg>
          <p>Analista</p>
          <p>Desarrollador de Software</p>
        </motion.article>
      </div>
    </section>
  );
}
