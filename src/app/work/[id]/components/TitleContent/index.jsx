import styles from "./styles.module.scss";
import { projects } from "@/app/assets/data";
import { useParams } from "next/navigation";
import { opacity, slide } from "./anim";
import { motion } from "framer-motion";
import Link from "next/link";
import Magnetic from "@/common/Magnetic";

const TitleContent = () => {
  const pathname = useParams();
  const title = pathname.id;

  const project = projects.find(
    (project) => project.title.toLowerCase().replace(/\s/g, "-") === title
  );

  const projectName = project.title;

  const anim = (variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

  return (
    <section className={styles.titleContent}>
      <motion.h1 {...anim(opacity)}> {projectName} </motion.h1>
      <motion.article {...anim(slide)} className={styles.details}>
        <div className={styles.details__section}>
          <h2 className={styles.role}>Función / Servicio</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <p>{project.role}</p>
          </li>
          <div className={styles.stripMobile}></div>
        </div>
        <div className={styles.details__section}>
          <h2 className={styles.role}>Tecnologías</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <p>{project.technologies.join(", ")}</p>
          </li>
          <div className={styles.stripMobile}></div>
        </div>
        <div className={styles.details__section}>
          <h2 className={styles.role}>Código fuente</h2>
          <div className={styles.strip}></div>
          <Magnetic>
            <li className={styles.role__detail}>
              <Link href={project.githubLink} target="_blank">
                Github
              </Link>
            </li>
          </Magnetic>
          <div className={styles.stripMobile}></div>
        </div>
      </motion.article>
      <motion.div {...anim(slide)} className={styles.description}>
        <p> {project.description} </p>
      </motion.div>
    </section>
  );
};

export default TitleContent;
