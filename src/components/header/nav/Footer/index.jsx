import styles from "./styles.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <a href="https://github.com/luisalmenarez" target="_blank">
        Github
      </a>
      <a href="https://www.linkedin.com/in/luisalmenarez/" target="_blank">
        LinkedIn
      </a>
      <a href="https://www.instagram.com/_luisalmenarez/" target="_blank">
        Instagram
      </a>
      <a href="https://twitter.com/_luisalmenarez" target="_blank">
        Twitter
      </a>
    </div>
  );
}
