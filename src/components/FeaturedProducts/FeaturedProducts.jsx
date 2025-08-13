import styles from "./FeaturedProducts.module.css";
import background from "./../../assets/images/backgrounds/featuredProducts.webp";
import { ProductCard } from "../ProductCard/ProductCard";
import { DataStateHandler } from "../DataStateHandler/DataStateHandler";
import { useProducts } from "../../hooks/useProducts";

export const FeaturedProducts = ({ title = "Featured Products", subtitle = "Check our top pics", sortBy = "newest" }) => {
  const { products, loading, error } = useProducts(null, 3, sortBy);

  return (
    <div className={styles.featuredProducts}>
      <div className={styles.background}>
        <img src={background} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.subtitle}>{subtitle}</h3>
        </div>
        <div className={styles.productsContainer}>
          <DataStateHandler
            data={products}
            loading={loading}
            error={error}
            dataType="products"
            renderData={(data) =>
              data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            }
          />
        </div>
      </div>
    </div>
  );
};
