import styles from "./ImageModal.module.css";
import { FaX } from "react-icons/fa6";

export const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.imageModal} onClick={()=>onClose()}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} />
      </div>
      <button className={styles.closeButton} onClick={()=>onClose()}><FaX/></button>
    </div>
  )
}
