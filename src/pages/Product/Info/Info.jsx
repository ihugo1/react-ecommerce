import styles from "./Info.module.css";
import { useState } from "react";
import { Button } from "../../../components/Button/Button";

export const Info = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className={styles.info}>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>$ {product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <div className={styles.sizesContainer}>
        <p>Available Sizes</p>
        <div className={styles.sizes}>
          {Array.isArray(product.sizes) &&
            product.sizes.length > 0 &&
            product.sizes.map((size, index) => (
              <label key={index} className={styles.sizeOption}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => setSelectedSize(size)}
                />
                <p className={styles.sizeLabel}>{size}</p>
              </label>
          ))}
        </div>
      </div>
      <Button label={"Add to cart"} />
    </div>
  );
};
