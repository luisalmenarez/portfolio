"use client";
import styles from "./style.module.scss";
import ProjectSmall from "./ProjectSmall";
import Link from "next/link";

const projects = [
  {
    title: "Shop Tech",
    src: "/images/projects/shopTech.png",
    color: "#060606",
  },
  {
    title: "Pfmanfit",
    src: "/images/projects/pfmanfit.png",
    color: "#48494b",
  },
  {
    title: "Gallery",
    src: "/images/projects/gallery.png",
    color: "#d8d3cd",
  },
  {
    title: "Burger Web",
    src: "/images/works/burgerWeb.png",
    color: "#e49c4a",
  },
  {
    title: "Loud Proud",
    src: "/images/loudProud.png",
    color: "#534660",
  },
  {
    title: "Shopping Store",
    src: "/images/projects/shopping.png",
    color: "#3f4e46",
  },
  {
    title: "Task App",
    src: "/images/taskApp.png",
    color: "#e9eaec",
  },
  {
    title: "Hero Portfolio",
    src: "/images/heroPortfolio.png",
    color: "#626e6e",
  },
];

const ResponsiveProjects = ({ manageModal }) => {
  return (
    <>
      <section className={styles.bodySmall}>
        {projects.map((project, index) => {
          const projectSlug = project.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link key={index} href={`/work/${projectSlug}`}>
              <ProjectSmall
                image={project.src}
                index={index}
                title={project.title}
                color={project.color}
                manageModal={manageModal}
              />
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default ResponsiveProjects;
