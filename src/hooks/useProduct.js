import { useEffect, useState } from "react";
import { getProductById } from "../api/productsService";

// Gets a product by its ID

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    setLoading(true);
    setError(false);
    try {
      const data = await getProductById(productId);
      setProduct(data[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [productId]);

  return { product, loading, error };
};
