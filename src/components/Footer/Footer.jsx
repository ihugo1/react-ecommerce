import styles from "./Footer.module.css";
import { FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>PrettyPink</div>
      <div className={styles.socials}>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} PrettyPink. All reserved rights.</p>
    </footer>
  );
};
