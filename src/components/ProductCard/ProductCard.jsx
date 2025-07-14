import styles from "./ProductCard.module.css";

export const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.main_image_url} alt={product.name} />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
};
