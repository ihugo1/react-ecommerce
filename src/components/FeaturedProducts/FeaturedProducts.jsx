import styles from "./FeaturedProducts.module.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { useProducts } from "../../hooks/useProducts";

export const FeaturedProducts = () => {
  const { products, loading, error } = useProducts(null, 3);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!products || products.length === 0) return <div>No products found</div>;

  return (
    <div className={styles.featuredProducts}>
      <h2 className={styles.title}>Featured Products</h2>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};
