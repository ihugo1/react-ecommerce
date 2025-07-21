import styles from "./Product.module.css";
import { useProduct } from "../../hooks/useProduct";
import { useParams } from "react-router-dom";
import { DataStateHandler } from "../../components/DataStateHandler/DataStateHandler";
import { Gallery } from "./Gallery/Gallery";
import { ImageModal } from "./ImageModal/ImageModal";
import { Info } from "./Info/Info";
import { useState } from "react";

export const Product = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const [ modalImageUrl, setModalImageUrl ] = useState(null);

  const closeModal = () => setModalImageUrl(null);

  return (
    <div className={styles.product}>
      <DataStateHandler
        data={product}
        loading={loading}
        error={error}
        dataType="product"
        renderData={(data) => (
          <>
            <Gallery
              mainImageUrl={product.main_image_url}
              images={product.images_urls}
              onImageClick={(url)=>setModalImageUrl(url)}
            />
            <Info product={product}/>
          </>
        )}
      />

      {modalImageUrl && (
        <ImageModal imageUrl={modalImageUrl} onClose={closeModal}/>
      )}
    </div>
  );
};
