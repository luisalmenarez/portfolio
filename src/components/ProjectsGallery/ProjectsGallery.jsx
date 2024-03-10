import styles from "./style.module.scss";
import Project from "./Project";
import Link from "next/link";
import Rounded from "../../common/RoundedButton";

const ProjectsGallery = () => {
  const projects = [
    {
      title1: "Shop",
      title2: "Tech",
      src: "/images/projects/shopTech.png",
      url: "/work/shop-tech",
    },
    {
      title1: "Landing",
      title2: "Pfmanfit",
      src: "/images/projects/pfmanfit.png",
      url: "/work/pfmanfit",
    },
    {
      title1: "Shopping",
      title2: "Store",
      src: "/images/projects/shopping.png",
      url: "/work/shopping-store",
    },
    {
      title1: "Gallery ",
      title2: "World Places",
      src: "/images/projects/gallery.png",
      url: "/work/gallery",
    },
  ];
  return (
    <>
      <section className={styles.main}>
        <div className={styles.gallery}>
          <p className={styles.title}>Proyectos Recientes</p>
          {projects.map((project, index) => {
            return (
              <Link href={project.url} key={index}>
                <Project project={project} />
              </Link>
            );
          })}
        </div>
      </section>

      <Link href="/work" className={styles.link}>
        <Rounded>
          <p>Más proyectos</p>
        </Rounded>
      </Link>
    </>
  );
};

export default ProjectsGallery;
