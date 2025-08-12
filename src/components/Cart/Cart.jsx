import styles from "./Cart.module.css";
import { useCart } from "../../context/cartContext";
import { Button } from "../Button/Button";
import { FaShoppingCart } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const Cart = ({ isOpen, closeCart }) => {
  const { cartProducts, removeFromCart, cartTotal, emptyCart } = useCart();
  const navigate = useNavigate();

  const handleBuyCart = () => {
    closeCart();
    navigate('/payment');
  };

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? "" : styles.backdropClosed}`}
        onClick={closeCart}
      ></div>
      <div className={`${styles.cart} ${isOpen ? "" : styles.cartClosed}`}>
        <div className={styles.cartHeader}>
          <p>
            <FaShoppingCart />
            My Cart
          </p>
          <button onClick={closeCart} className={styles.closeButton}>
            <FaX />
          </button>
        </div>
        <div className={styles.productList}>
          {cartProducts.map((cartProduct) => (
            <div className={styles.product} key={cartProduct.cartId}>
              <div className={styles.productImgContainer}>
                <img src={cartProduct.product.main_image_url} />
              </div>
              <div className={styles.productInfoContainer}>
                <div className={styles.price}>
                  $ {parseFloat(cartProduct.product.price).toFixed(2)}
                </div>
                <div className={styles.name}>{cartProduct.product.name}</div>
                <div className={styles.size}>SIZE: {cartProduct.size}</div>
              </div>
              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(cartProduct.cartId)}
              >
                <FaTrashCan />
              </button>
            </div>
          ))}
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.cartTotalContainer}>
            <p className={styles.cartTotalLabel}>Cart total:</p>
            <p className={styles.cartTotalAmmount}>${cartTotal}</p>
          </div>
          <div className={styles.cartButtons}>
            <Button label={"EMPTY CART"} onClick={() => emptyCart()} />
            <Button label={"BUY CART"} onClick={handleBuyCart} />
          </div>
        </div>
      </div>
    </>
  );
};
