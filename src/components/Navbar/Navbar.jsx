import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import { Cart } from "../Cart/Cart";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useCart } from "../../context/cartContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartProducts } = useCart();
  const location = useLocation();

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleToggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(()=>{
    setIsCartOpen(false);
    setIsMenuOpen(false);
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  return (
    <div
      className={`
    ${styles.navbar} ${
        location.pathname !== "/" || isMenuOpen || isScrolled
          ? styles.solid
          : styles.transparent
      }
    `}
    >
      <Link className={styles.logo} to="/">
        <p className={styles.a}>PRETTY</p>
        <p className={styles.b}>PINK</p>
      </Link>

      <div className={styles.navButtons}>
        <button onClick={() => setIsCartOpen(true)}>
          <FaShoppingCart />
          {cartProducts.length > 0 ? (
            <p className={styles.totalProducts}>{cartProducts.length}</p>
          ) : (
            <div></div>
          )}
        </button>
        <button onClick={handleToggleMenu}>
          {isMenuOpen ? <FaX /> : <FaBars />}
        </button>
      </div>

      <Cart isOpen={isCartOpen} closeCart={handleToggleCart} />
      <Menu isOpen={isMenuOpen} />
    </div>
  );
};
