import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "@/common/RoundedButton";
import Link from "next/link";
import { projects } from "@/app/assets/data";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { slide } from "./anim";

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

  return (
    <>
      <section className={styles.containerGallery}>
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
      </section>
    </>
  );
};

export default ContentGalery;
