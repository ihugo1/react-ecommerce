import { useEffect, useState } from "react";

// ESTUDIAR

export const useCart = () => {
  const [cartProducts, setCartProducts] = useState(() => {
    const cart = localStorage.getItem("cartProducts");
    return cart ? JSON.parse(cart) : [];
  });
  const [cartIdCounter, setCartIdCounter] = useState(cartProducts.length);

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

  const emptyCart = () => {
    console.log("CLICK");
    alert("Hola");
    setCartProducts([]);
  };

  return { addToCart, removeFromCart, emptyCart, cartProducts };
};
