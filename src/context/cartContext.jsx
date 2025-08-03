import { createContext, useContext, useState, useEffect, useMemo } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    const cart = localStorage.getItem("cartProducts");
    return cart ? JSON.parse(cart) : [];
  });
  const [cartIdCounter, setCartIdCounter] = useState(cartProducts.length);

  const cartTotal = useMemo(() => {
    return cartProducts.reduce((total, item) => {
      return total + (item.product.price || 0);
    }, 0);
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    console.log(cartProducts);
  }, [cartProducts]);

  /*ADD TO CART*/
  const addToCart = (product, size) => {
    if (!size || size === null) {
      Swal.fire({
        position: "bottom-end",
        text: "Please, select a size",
        icon: "warning",
        animation: false,
        showConfirmButton: false,
        toast: true,
        timer: 3000,
        width: "400px",
      });
      return;
    } else {
      const newProduct = {
        cartId: cartIdCounter,
        product: product,
        size: size,
      };
      setCartProducts([...cartProducts, newProduct]);
      setCartIdCounter(cartIdCounter + 1);

      Swal.fire({
        position: "bottom-end",
        text: `${newProduct.product.name} (${newProduct.size}) added to cart`,
        icon: "success",
        animation: false,
        showConfirmButton: false,
        toast: true,
        timer: 3000,
        width: "400px",
      });
    }
  };

  /*REMOVE FROM CART*/
  const removeFromCart = (cartIdToRemove) => {
    const updatedCart = cartProducts.filter(
      (cartProduct) => cartProduct.cartId !== cartIdToRemove
    );

    setCartProducts(updatedCart);
  };

  const emptyCart = () => {
    setCartProducts([]);
    Swal.fire({
      title: "Your cart is empty",
      text: "",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#e44896",
      timer: 5000,
    });
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, cartTotal, addToCart, removeFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
