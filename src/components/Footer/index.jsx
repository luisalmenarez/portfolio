import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import Link from "next/link";

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/573002841219", "_blank");
  };

  return (
    <section className={styles.contact}>
      <article className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image
                loading="lazy"
                fill={true}
                alt={"Image Contact"}
                src={`/images/background.jpg`}
              />
            </div>
            <h2>Trabajemos</h2>
          </span>
          <h2>Juntos</h2>
          <div className={styles.buttonContainer}>
            <Link href="/contact">
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <p>Contáctame</p>
              </Rounded>
            </Link>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link href="mailto:luisalmenarez0428@gmail.com">
            <Rounded>
              <p>luisalmenarez0428@gmail.com</p>
            </Rounded>
          </Link>
          <Rounded onClick={handleWhatsAppClick}>
            <p>+57 300 284 12 19</p>
          </Rounded>
        </nav>
        <footer className={styles.info}>
          <div>
            <span>
              <h3>Versión</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Locación</h3>
              <p>Medellín - Colombia</p>
            </span>
          </div>
          <div>
            <span>
              <h3>Socials</h3>
              <Link href="https://github.com/luisalmenarez" target="_blank">
                Github
              </Link>
            </span>
            <Link
              href="https://www.linkedin.com/in/luisalmenarez/"
              target="_blank">
              Linkedin
            </Link>
            <Link
              href="https://www.instagram.com/_luisalmenarez/"
              target="_blank">
              Instagram
            </Link>
            <Link href="https://twitter.com/_luisalmenarez" target="_blank">
              Twitter
            </Link>
          </div>
        </footer>
      </article>
    </section>
  );
}
