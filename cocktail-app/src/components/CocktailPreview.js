import "../App.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getImageUrl } from "../utils";
import { getCocktail } from "../service/RestApiService";

export default function CocktailPreview() {
  const [cocktail, setCocktail] = useState({});
  const {cocktailId} = useParams();

  useEffect(() => {
    getCocktail(cocktailId).then((data) => {
      setCocktail(data.drinks[0]);
    }).catch((err) => {
      console.log(err);
    })
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
