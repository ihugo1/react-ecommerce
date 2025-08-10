import { useState, useEffect } from "react";
import { getProductsByCategory } from "../api/productsService";

// Gets an array with all products by default unless a category and/or limit is given

export const useProducts = (categoryId = null, resultLimit = 3) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreProducts = async () => {
    setLoadingMore(true);
    setError(null);
    try {
      const { products: newData, hasMore} = await getProductsByCategory(categoryId, resultLimit, offset);
      setProducts((prev) => [...prev, ...newData]);
      setOffset(prev => prev + resultLimit);
      setHasMore(hasMore);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoadingMore(false);
    }
  };

  const getProducts = async () => {
    setLoading(true);
    setError(null);
    setProducts([]);
    setOffset(0);
    try {
      const { products: data, hasMore } = await getProductsByCategory(categoryId, resultLimit, 0);
      setProducts(data);
      setHasMore(hasMore);
      setOffset(resultLimit);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categoryId, resultLimit]);

  return { products, loading, error, loadMoreProducts, loadingMore, hasMore };
};