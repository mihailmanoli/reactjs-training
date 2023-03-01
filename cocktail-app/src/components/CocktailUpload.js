import "../App.css";
import { useState } from "react";

export default function CocktailUpload() {
  const [cocktail] = useState({
    cocktailName: "Cocktail name",
    firstIngredient: "Ingredient 1",
    secondIngredient: "Ingredient 2",
    quantity: "Quantity",
  });

  return (
    <form className="upload-image-container">
      <div className="upload-cocktail-image">
        <input type="file" id="newImg" name="newImg" accept="image/*" />
      </div>
      <div className="upload-cocktail-details">
        <input
          type="text"
          id="cocktailName"
          name="cocktailName"
          value={cocktail.cocktailName}
        />
        <input
          type="text"
          id="ingredient1"
          name="ingredient1"
          value={cocktail.firstIngredient}
        />
        <input
          type="text"
          id="ingredient2"
          name="ingredient2"
          value={cocktail.secondIngredient}
        />
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={cocktail.quantity}
        />
        <input type="submit" value="Create cocktail" />
      </div>
    </form>
  );
}
