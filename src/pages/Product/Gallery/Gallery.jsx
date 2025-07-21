import React, { useState } from "react";
import styles from "./Gallery.module.css";

export const Gallery = ({ mainImageUrl, images, onImageClick }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageContainer}>
        <img src={mainImageUrl} />
      </div>
      {Array.isArray(images) && images.length > 0 && (
        <div className={styles.imagesContainer}>
          {images.map((url, index) => (
            <div className={styles.imageContainer} onClick={()=>onImageClick(url)}>
              <img key={index} src={url} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
