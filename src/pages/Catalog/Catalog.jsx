import styles from "./Catalog.module.css";
import background from "../../assets/images/catalog/background.jpg";
import { useState } from "react";
import { Filter } from "./Filter/Filter";
import { Grid } from "./Grid/Grid";
import { useProducts } from "../../hooks/useProducts";
import { Button } from "../../components/Button/Button";
import { DataStateHandler } from "../../components/DataStateHandler/DataStateHandler";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";

export const Catalog = () => {
  const [seletedCategoryId, setSelectedCategoryId] = useState(null);
  const { products, loading, error, loadMoreProducts, loadingMore, hasMore } =
    useProducts(seletedCategoryId);

  return (
    <div className={styles.catalog}>
      <div className={styles.background}>
        <img src={background} />
      </div>
      <div className={styles.content}>
        <Filter
          selectedCategoryId={seletedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
        <DataStateHandler
          data={products}
          loading={loading}
          error={error}
          dataType={"products"}
          renderData={(data) => <Grid products={data} />}
        />
        {hasMore && (
          <Button
            label={loadingMore ? "Loading..." : "Load more"}
            onClick={loadMoreProducts}
          />
        )}
        <FeaturedProducts />
      </div>
    </div>
  );
};
