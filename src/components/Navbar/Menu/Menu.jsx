import styles from "./Menu.module.css";
import catalog from "../../../assets/images/menu/side-view-woman-looking-clothes.jpg";
import { Link } from "react-router-dom";

const menuLinks = [
  { name: "Catalog", path: "/catalog", img: catalog },
];

export const Menu = ({ isOpen }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      {menuLinks.map((link) => (
        <Link key={link.name} className={styles.menuLink} to={link.path}>
          <img src={link.img} alt={link.name} />
          <span>{link.name}</span>
        </Link>
      ))}
    </div>
  );
};
