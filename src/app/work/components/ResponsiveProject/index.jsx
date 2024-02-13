"use client";
import styles from "./style.module.scss";
import ProjectSmall from "./ProjectSmall";

const projects = [
  {
    title: "Shop Tech",
    src: "/images/projects/shopTech.png",
    color: "#000000",
  },
  {
    title: "Pfmanfit",
    src: "/images/projects/pfmanfit.png",
    color: "#8C8C8C",
  },
];

const ResponsiveProjects = ({ manageModal }) => {
  return (
    <>
      <section className={styles.bodySmall}>
        {projects.map((project, index) => {
          return (
            <ProjectSmall
              image={project.src}
              index={index}
              title={project.title}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </section>
    </>
  );
};

export default ResponsiveProjects;
