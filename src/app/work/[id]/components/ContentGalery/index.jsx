import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "@/common/RoundedButton";
import Link from "next/link";
import { projects } from "@/app/assets/data";
import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { slide } from "@/app/assets/anim";
import { useRef } from "react";

const ContentGalery = () => {
  const pathname = useParams();
  const title = pathname.id;

  const project = projects.find(
    (project) => project.title.toLowerCase().replace(/\s/g, "-") === title
  );

  const URL = project.url;
  const originalWidth = 960;
  const originalHeight = 540;

  const anim = (variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
    touch: {
      enabled: true,
      sensitivity: 0.5,
      touchMultiplier: 2,
    },
  });

  const height = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <>
      <section className={styles.container}>
        <article className={styles.containerGallery}>
          <motion.article {...anim(slide)} className={styles.content}>
            {project.srcPrev.map((image, index) => (
              <Image
                data-scroll
                data-scroll-speed={0.1}
                key={index}
                src={image.path}
                alt={image.alt}
                layout="responsive"
                width={originalWidth}
                height={originalHeight}
              />
            ))}
            <div
              data-scroll
              data-scroll-speed={0.1}
              className={styles.buttonContainer}>
              <Link href={URL} target="_blank">
                <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                  <p>Ver sitio web</p>
                </Rounded>
              </Link>
            </div>
          </motion.article>
        </article>
        <motion.div style={{ height }} className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </motion.div>
      </section>
    </>
  );
};

export default ContentGalery;
