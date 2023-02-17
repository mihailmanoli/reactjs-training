import { useState, useEffect } from "react";
import "./App.css";
import { getImageUrl } from "./utils";

export default function CocktailPreview({ idDrink }) {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
      );
      const data = await response.json();
      setCocktail(data.drinks[0]);
    };

    fetchData();
  }, [idDrink]);

  return (
    <div className="cocktail">
      <h3>{cocktail.strDrink}</h3>
      <img
        src={getImageUrl(cocktail.strDrinkThumb, false)}
        alt={cocktail.strDrink}
        className="image-big"
      />
    </div>
  );
}
