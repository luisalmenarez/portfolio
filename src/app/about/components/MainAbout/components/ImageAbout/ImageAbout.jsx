import styles from "./style.module.scss";

const ImageAbout = () => {
  return (
    <article className={styles.gridImage}>
      <div
        data-scroll
        data-scroll-speed={-0.2}
        data-scroll-position={"top"}
        className={styles.overlay}></div>
    </article>
  );
};

export default ImageAbout;
