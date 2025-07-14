import styles from "./Menu.module.css";
import catalog from "../../../assets/images/menu/catalog.jpg";
import about from "../../../assets/images/menu/about.jpg";
import contact from "../../../assets/images/menu/contact.jpg";

const menuLinks = [
  { name: "Catalog", path: "/catalog", img: catalog },
  { name: "Contact", path: "/contact", img: contact },
  { name: "About us", path: "/about", img: about },
  { name: "About us", path: "/about", img: about },
  { name: "About us", path: "/about", img: about },
  { name: "About us", path: "/about", img: about },
  { name: "About us", path: "/about", img: about }
];

export const Menu = ({ isOpen }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      {menuLinks.map((link) => (
        <a key={link.name} className={styles.menuLink}>
          <img src={link.img} alt={link.name} />
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};
