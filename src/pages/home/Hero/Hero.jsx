import React from "react";
import styles from "./Hero.module.css";
import video from "../../../assets/videos/hero/herovideo.mp4";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <video autoPlay muted loop playsInline src={video} />
      </div>

      <div className={styles.content}>
        <p>YOUR CLOSET, YOUR ATTITUDE</p>
      </div>
    </div>
  );
};
