import styles from "./Filter.module.css";
import { DataStateHandler } from "../../../components/DataStateHandler/DataStateHandler";
import { useCategories } from "../../../hooks/useCategories";

export const Filter = ({ selectedCategoryId, setSelectedCategoryId }) => {
  const { categories, loading, error } = useCategories();

  return (
    <DataStateHandler
      data={categories}
      loading={loading}
      error={error}
      dataType="categories"
      renderData={(data) => (
        <div className={styles.filter}>
          <p>Filter by:</p>
          <div className={styles.filterButtons}>
            <button
              className={`${styles.categoryButton} ${
                selectedCategoryId === null ? styles.selected : ""
              }`}
              onClick={() => setSelectedCategoryId(null)}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                className={`${styles.categoryButton} 
              ${selectedCategoryId === category.id ? styles.selected : ""}`}
                key={category.id}
                onClick={() => setSelectedCategoryId(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}
    />
  );
  /*
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories {error.message}</p>;
  else
    return (
      <div className={styles.filter}>
        <p>Filter by:</p>
        <div className={styles.filterButtons}>
          <button
            className={`${styles.categoryButton} ${
              selectedCategoryId === null ? styles.selected : ""
            }`}
            onClick={() => setSelectedCategoryId(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              className={`${styles.categoryButton} 
              ${selectedCategoryId === category.id ? styles.selected : ""}`}
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
    */
};
