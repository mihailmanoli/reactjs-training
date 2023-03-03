import { CATEGORIES } from "../constants";

export const getCategory = async (categoryId) => {
  const response = await fetch(CATEGORIES[categoryId].url, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export async function searchCocktail(searchTerm) {
  const response = await fetch(
    `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );
  const data = await response.json();
  return data;
}

export async function getCocktail(cocktailId) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
  );
  const data = await response.json();
  return data;
}
