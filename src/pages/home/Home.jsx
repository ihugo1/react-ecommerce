import styles from "./Home.module.css";
import { Hero } from "./Hero/Hero";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import { Social } from "./Social/Social";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <FeaturedProducts />
      <Social />
    </div>
  );
};
