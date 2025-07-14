import styles from "./Button.module.css";

export const Button = ({ icon, label }) => {
  return (
    <button className={styles.button}>
      {icon}
      {label}
    </button>
  );
};
