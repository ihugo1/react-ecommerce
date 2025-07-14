import React from 'react'
import styles from "./Home.module.css";
import { Hero } from './Hero/Hero';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Hero/>
    </div>
  )
}
