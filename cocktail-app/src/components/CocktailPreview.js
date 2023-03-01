import "../App.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getImageUrl } from "../utils";

export default function CocktailPreview() {
  const [cocktail, setCocktail] = useState({});
  const {cocktailId} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      );
      const data = await response.json();
      setCocktail(data.drinks[0]);
    };

    fetchData();
  }, [cocktailId]);

  return (
    <>
      <div className="cocktail">
        <h3>{cocktail.strDrink}</h3>
        <img
          src={getImageUrl(cocktail.strDrinkThumb, false)}
          alt={cocktail.strDrink}
          className="image-big"
          />
      </div>
      <Link to="../.." relative="path">Back</Link>
    </>
  );
}
