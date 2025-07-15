import styles from "./Social.module.css";
import socialLinksBackground from "../../../assets/images/social/mike-von-dwvtsZsyTZw-unsplash.jpg";
import emailFromBackground from "../../../assets/images/social/bui-hoang-long-Y92m8Ahw7Rg-unsplash.jpg";
import { FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa6";
import { Button } from "../../../components/Button/Button";

export const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles.socialLinks}>
        <div className={styles.backgroundContainer}>
          <img src={socialLinksBackground} />
        </div>
        <div className={styles.content}>
          <p>Stay connected and don't miss updates and offers.</p>
          <ul className={styles.socialIcons}>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </ul>
        </div>
      </div>

      <form className={styles.emailForm}>
        <div className={styles.backgroundContainer}>
          <img src={emailFromBackground}/>
        </div>

        <div className={styles.content}>
          <p>Receive exclusive news and promotions</p>
          <div className={styles.formContainer}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <Button label="Register"/>
            <p className={styles.privacyPolicy}>
              By subscribing, you confirm that you have read the{" "}
              <p>Privace Polity</p>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
