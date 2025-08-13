import styles from "./Product.module.css";
import background from "../../assets/images/product/background.jpg";
import { useProduct } from "../../hooks/useProduct";
import { useParams } from "react-router-dom";
import { DataStateHandler } from "../../components/DataStateHandler/DataStateHandler";
import { Gallery } from "./Gallery/Gallery";
import { ImageModal } from "./ImageModal/ImageModal";
import { Info } from "./Info/Info";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import { useState } from "react";

export const Product = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const [modalImageUrl, setModalImageUrl] = useState(null);

  const closeModal = () => setModalImageUrl(null);

  return (
    <>
      <div className={styles.product}>
        <div className={styles.background}>
          <img src={background} />
        </div>
        <div className={styles.content}>
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
                  onImageClick={(url) => setModalImageUrl(url)}
                />
                <Info product={product} />
              </>
            )}
          />

          {modalImageUrl && (
            <ImageModal imageUrl={modalImageUrl} onClose={closeModal} />
          )}
        </div>
      </div>
      <FeaturedProducts
        title="Best Sellers"
        subtitle="Discover our most popular products loved by customers."
        sortBy="bestsellers"
      />
    </>
  );
};
