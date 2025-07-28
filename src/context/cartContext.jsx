import { createContext, useContext, useState, useEffect, useMemo } from "react";

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

  const addToCart = (product, size) => {
    const newProduct = {
      cartId: cartIdCounter,
      product: product,
      size: size,
    };

    setCartProducts([...cartProducts, newProduct]);
    setCartIdCounter(cartIdCounter + 1);
  };

  const removeFromCart = (cartIdToRemove) => {
    const updatedCart = cartProducts.filter(
      (cartProduct) => cartProduct.cartId !== cartIdToRemove
    );

    setCartProducts(updatedCart);
  };

  const emptyCart = () => setCartProducts([]);

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
