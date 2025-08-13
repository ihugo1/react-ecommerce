import styles from "./Hero.module.css";
import { Button } from "../../../components/Button/Button";
import { FaBagShopping } from "react-icons/fa6";
import video from "../../../assets/videos/hero/herovideo.mp4";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <video autoPlay muted loop playsInline preload="metadata" src={video} />
      </div>

      <div className={styles.content}>
        <div className={styles.heroText}>
          <div className={styles.slogan}>
            <p className={styles.white}>FASHION THAT SPEAKS</p>
            <p className={styles.accent}>YOUR LANGUAGE</p>
          </div>
          <div className={styles.divider}></div>
          <p className={styles.paragraph}>
            Discover the latest trends in fashion and elevate your style with our
            exclusive collection. 
            Shop now and express yourself with confidence!
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <Link to={"/catalog"} className={styles.catalogButton}>
            <FaBagShopping />
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};
