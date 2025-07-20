import { useEffect, useState } from "react";
import { fetchCategories } from "../api/categoriesService";

// Gets an array with all categories

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCategories = async () => {
    setLoading(true);
    setError(false);
    try{
      const data = await fetchCategories();
      setCategories(data); 
    } catch (err){
      setError(err.message);
    } finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    getCategories();
  }, [])

  return { categories, loading, error }
}