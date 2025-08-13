import styles from "./Home.module.css";
import { Hero } from "./Hero/Hero";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import { Social } from "./Social/Social";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <FeaturedProducts
        title="New Arrivals"
        subtitle="Check out our latest collection of trendy products."
        sortBy="newest"
      />
      <Social />
      <FeaturedProducts
        title="Best Sellers"
        subtitle="Discover our most popular products loved by customers."
        sortBy="bestsellers"
      />
    </div>
  );
};
