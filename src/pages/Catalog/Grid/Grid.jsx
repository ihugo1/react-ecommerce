import styles from "./Grid.module.css";
import { ProductCard } from "../../../components/ProductCard/ProductCard";

export const Grid = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};
