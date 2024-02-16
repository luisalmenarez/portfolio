import styles from "./styles.module.scss";
import { projects } from "@/app/assets/data";
import { useParams } from "next/navigation";
import { opacity, slide } from "./anim";
import { motion } from "framer-motion";

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
        </div>
        <div className={styles.details__section}>
          <h2 className={styles.role}>Tecnologías</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <p>{project.technologies.join(", ")}</p>
          </li>
        </div>
        <div className={styles.details__section}>
          <h2 className={styles.role}>Location & year</h2>
          <div className={styles.strip}></div>
          <li className={styles.role__detail}>
            <p>
              {project.location} © {project.year}
            </p>
          </li>
        </div>
      </motion.article>
    </section>
  );
};

export default TitleContent;
