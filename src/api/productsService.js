import { BASE_URL, API_KEY } from "../config/api";

export const fetchProducts = async (categoryId, resultLimit) => {
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
