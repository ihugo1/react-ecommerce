import React from 'react'
import styles from "./Hero.module.css";
import background from "../../../assets/images/hero/hero.jpg";

export const Hero = () => {
  return (
    <div className={styles.hero}>

      <div className={styles.backgroundContainer}>
        <img src={background}/>
      </div>

      <div className={styles.content}>
        <p>YOUR CLOSET, YOUR ATTITUDE</p>
      </div>

    </div>
  )
}
