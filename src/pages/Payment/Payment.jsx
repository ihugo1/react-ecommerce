import React from 'react'
import { useCart } from '../../context/cartContext'
import styles from './Payment.module.css'
import { Button } from '../../components/Button/Button'
import { FaCreditCard, FaTrashCan } from 'react-icons/fa6'

export const Payment = () => {
  const { cartProducts, removeFromCart, cartTotal, emptyCart } = useCart();
  
  return (
    <div className={styles.payment}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1><FaCreditCard /> Checkout</h1>
        </div>
        
        <div className={styles.content}>
          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            <div className={styles.productList}>
              {cartProducts.map((cartProduct) => (
                <div className={styles.product} key={cartProduct.cartId}>
                  <div className={styles.productImgContainer}>
                    <img src={cartProduct.product.main_image_url} alt={cartProduct.product.name} />
                  </div>
                  <div className={styles.productInfoContainer}>
                    <div className={styles.name}>{cartProduct.product.name}</div>
                    <div className={styles.size}>SIZE: {cartProduct.size}</div>
                    <div className={styles.price}>
                      $ {parseFloat(cartProduct.product.price).toFixed(2)}
                    </div>
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
            <div className={styles.total}>
              <h3>Total: ${cartTotal}</h3>
            </div>
          </div>
          
          <div className={styles.paymentForm}>
            <h2>Payment Information</h2>
            <p>This is a demo project - no real payment processing</p>
            <div className={styles.buttons}>
              <Button label="EMPTY CART" onClick={() => emptyCart()} />
              <Button label="COMPLETE ORDER" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
