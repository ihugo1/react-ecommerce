import styles from "./Menu.module.css";
import home from "../../../assets/images/menu-links/sven-mieke-DRZ1Pajkow4-unsplash.webp"
import catalog from "../../../assets/images/menu-links/shanna-camilleri-ljNQxfyN7AM-unsplash.webp";
import { useNavigate } from "react-router-dom";

const menuLinks = [
  { name: "Home", path: "/", img: home},
  { name: "Catalog", path: "/catalog", img: catalog }
];

export const Menu = ({ isOpen }) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      {menuLinks.map((link) => (
        <div 
          key={link.name} 
          className={styles.menuLink} 
          onClick={() => {navigate(link.path);}}
        >
          <img src={link.img} alt="" />
          <span>{link.name}</span>
        </div>
      ))}
    </div>
  );
};
