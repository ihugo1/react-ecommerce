import { BASE_URL, API_KEY } from "../config/api";

// Fetch products by Category and limit
// This will get the first 10 products of all categories by default

export const getProductsByCategory = async (categoryId, resultLimit, offset) => {
  const params = new URLSearchParams();

  if (categoryId) params.append("category_id", `eq.${categoryId}`);
  params.append("limit", resultLimit+1);
  params.append("offset", offset);
  params.append("select", "*");
  params.append("order", "created_at.desc");

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


