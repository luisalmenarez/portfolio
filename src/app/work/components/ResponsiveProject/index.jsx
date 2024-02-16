"use client";
import styles from "./style.module.scss";
import ProjectSmall from "./ProjectSmall";
import Link from "next/link";
import { projects } from "@/app/assets/data";

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
