import Image from "next/image";
import styles from "styles/Home.module.css";
import evandr0 from "public/evandr0.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/0rdnave"
        target="_blank"
        rel="noopener noreferrer"
      >
        Criado por{" "}
        <span className={styles.logo}>
          <Image src={evandr0} alt="Evandr0" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}
