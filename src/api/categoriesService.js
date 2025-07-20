import { BASE_URL, API_KEY } from "../config/api";

export const fetchCategories = async () => {
  const url = `${BASE_URL}categories?select=*`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      apikey: API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching categories: ${response.statusText}`);
  }

  return response.json();
};
