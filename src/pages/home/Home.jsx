import React from 'react'
import styles from "./Home.module.css";
import { Hero } from './Hero/Hero';
import { FeaturedProducts } from '../../components/FeaturedProducts/FeaturedProducts';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Hero/>

    </div>
  )
}
