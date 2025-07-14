import { useState } from "react";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router-dom";
import { Menu } from "./Menu/Menu";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`
    ${styles.navbar} ${(location.pathname!=="/" || isMenuOpen) ? styles.solid : styles.transparent}
    `}>
      <div className={styles.logo}>
        <p className={styles.a}>PRETTY</p>
        <p className={styles.b}>PINK</p>
      </div>

      <div className={styles.navButtons}>
        <button>
          <FaShoppingCart />
        </button>
        <button onClick={handleToggleMenu}>
          {isMenuOpen ? <FaX /> : <FaBars />}
        </button>
      </div>

      <Menu isOpen={isMenuOpen} />
    </div>
  );
};
