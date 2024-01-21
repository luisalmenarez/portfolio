"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {
  const firtsText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.5,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=10px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firtsText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.04 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <section className={styles.main}>
      <Image fill={true} src="/images/hero.jpg" alt="Hero Image" />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firtsText}>Luis Almenarez - Software Developer</p>
          <p ref={secondText}>Luis Almenarez - Software Developer</p>
        </div>
      </div>
    </section>
  );
}
