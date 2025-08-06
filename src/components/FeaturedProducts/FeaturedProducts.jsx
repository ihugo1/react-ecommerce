import styles from "./FeaturedProducts.module.css";
import background from "./../../assets/images/backgrounds/featuredProducts.webp";
import { ProductCard } from "../ProductCard/ProductCard";
import { DataStateHandler } from "../DataStateHandler/DataStateHandler";
import { useProducts } from "../../hooks/useProducts";

export const FeaturedProducts = () => {
  const { products, loading, error } = useProducts(null, 3);

  return (
    <div className={styles.featuredProducts}>
      <div className={styles.background}>
        <img src={background}/>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Featured Products</h2>
        <div className={styles.productsContainer}>
          <DataStateHandler
            data={products}
            loading={loading}
            error={error}
            dataType="products"
            renderData={(data) => (
              data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          />
        </div>
      </div>
    </div>
  );
};
