import { BASE_URL, API_KEY } from "../config/api";

// Fetch products by Category and limit if those are given, otherwise it will fetch all products//
export const getProductsByCategory = async (categoryId, resultLimit) => {
  const params = new URLSearchParams();

  if (categoryId) params.append("category_id", `eq.${categoryId}`);
  if (resultLimit) params.append("limit", resultLimit);
  params.append("select", "*");

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

  return response.json();
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


