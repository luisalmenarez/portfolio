import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "@/common/RoundedButton";
import Link from "next/link";

const ContentGalery = () => {
  const originalWidth = 960;
  const originalHeight = 540;

  return (
    <section className={styles.container}>
      <Image
        data-scroll
        data-scroll-speed={0.1}
        src="/images/works/shopTech.png"
        alt="Image"
        layout="responsive"
        width={originalWidth}
        height={originalHeight}
      />
      <div
        data-scroll
        data-scroll-speed={0.1}
        className={styles.buttonContainer}>
        <Link href="https://futuretechhub.netlify.app/" target="_blank">
          <Rounded backgroundColor={"#334BD3"} className={styles.button}>
            <p>Ver sitio web</p>
          </Rounded>
        </Link>
      </div>
    </section>
  );
};

export default ContentGalery;
