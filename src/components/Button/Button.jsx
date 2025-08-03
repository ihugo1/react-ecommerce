import styles from "./Button.module.css";

export const Button = ({ icon, label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick} >
      {icon}
      {label}
    </button>
  );
};
