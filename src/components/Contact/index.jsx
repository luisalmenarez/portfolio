import styles from "./styles.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import Magnetic from "@/common/Magnetic";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
    touch: {
      enabled: true,
      sensitivity: 0.5,
      touchMultiplier: 2,
    },
  });

  useEffect(() => {
    container.current.style.minHeight = `${window.innerHeight}px`;
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.section style={{ y }} ref={container} className={styles.contact}>
      <article className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image
                loading="lazy"
                fill={true}
                alt={"image"}
                src={`/images/bg.jpg`}
              />
            </div>
            <h2>Trabajemos</h2>
          </span>
          <h2>Juntos</h2>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Link href="/">
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <p>Contáctame</p>
              </Rounded>
            </Link>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <nav className={styles.nav}>
          <Rounded>
            <p>luisalmenarez0428@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+57 300 284 12 19</p>
          </Rounded>
        </nav>
        <footer className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Locación</h3>
              <p>Medellín - Colombia</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <Link href="https://github.com/luisalmenarez" target="_blank">
                  Github
                </Link>
              </Magnetic>
            </span>
            <Magnetic>
              <Link
                href="https://www.linkedin.com/in/luisalmenarez/"
                target="_blank">
                Linkedin
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="https://www.instagram.com/_luisalmenarez/"
                target="_blank">
                Instagram
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="https://twitter.com/_luisalmenarez" target="_blank">
                Twitter
              </Link>
            </Magnetic>
          </div>
        </footer>
      </article>
    </motion.section>
  );
}
