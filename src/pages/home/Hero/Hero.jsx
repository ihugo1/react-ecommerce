import styles from "./Hero.module.css";
import { Button } from "../../../components/Button/Button";
import { FaBagShopping } from "react-icons/fa6";
import video from "../../../assets/videos/hero/herovideo.mp4";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <video autoPlay muted loop playsInline src={video} />
      </div>

      <div className={styles.content}>
        <div className={styles.slogan}>
          <p className={styles.white}>THIS IS YOUR CLOSET</p>
          <p className={styles.accent}>THIS IS YOUR ATTITUDE</p>
        </div>
        <p className={styles.paragraph}>
          Discover the latest trends in fashion and elevate your style with our
          exclusive collection. 
          Shop now and express yourself with confidence!
        </p>
        <Button icon={<FaBagShopping/>} label="Go to catalog"/>
      </div>
    </div>
  );
};
