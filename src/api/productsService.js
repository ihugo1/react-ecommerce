import { BASE_URL, API_KEY } from "../config/api";

// Fetch products by Category and limit
// This will get the first 10 products of all categories by default

export const getProductsByCategory = async (categoryId, resultLimit, offset, sortBy = "newest") => {
  const params = new URLSearchParams();

  if (categoryId) params.append("category_id", `eq.${categoryId}`);
  params.append("limit", resultLimit+1);
  params.append("offset", offset);
  params.append("select", "*");
  
  const orderBy = sortBy === "bestsellers" ? "sales_count.desc" : "created_at.desc";
  params.append("order", orderBy);

  const url = `${BASE_URL}products?${params}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY,
    }
  })
  if(!response.ok){
    throw new Error(`Error fetching products: ${response.statusText}`);
  }

  const data = await response.json();
  const hasMore = data.length > resultLimit;
  const products = hasMore ? data.slice(0, resultLimit) : data;
  return { products, hasMore }
};



// Fetch a single product by ID //
export const getProductById = async (productId) => {
  const url = `${BASE_URL}products?id=eq.${productId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY,
    }
  })
  if(!response.ok){
    throw new Error(`Error fetching product: ${response.statusText}`);
  }

  return response.json();
};


