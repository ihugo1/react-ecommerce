import styles from "./Catalog.module.css";
import { useState } from "react";
import { Filter } from "./Filter/Filter";
import { Grid } from "./Grid/Grid";
import { useProducts } from "../../hooks/useProducts";
import { DataStateHandler } from "../../components/DataStateHandler/DataStateHandler";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";

export const Catalog = () => {
  const [seletedCategoryId, setSelectedCategoryId] = useState(null);
  const { products, loading, error } = useProducts(seletedCategoryId, null);

  return (
    <div className={styles.catalog}>
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
      <FeaturedProducts />
    </div>
  );
};
