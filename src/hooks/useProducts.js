import { useState, useEffect } from "react";
import { fetchProducts } from "../api/productsService";

// Gets an array with all products by default unless a category and/or limit is given

export const useProducts = (categoryId=null, resultLimit=null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await fetchProducts(categoryId, resultLimit);
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryId, resultLimit]);

  return { products, loading, error };
};
