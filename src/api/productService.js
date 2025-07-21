import { BASE_URL, API_KEY } from "../config/api";

export const fetchProduct = async (productId) => {

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