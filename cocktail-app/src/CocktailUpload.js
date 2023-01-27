import "./App.css";

export default function CocktailUpload() {
  return (
    <form className="upload-image-container">
      <div>
        <input type="file" id="newImg" name="newImg" accept="image/*" />
      </div>
      <div>
        <label>
            Cocktail name:
            <input type="text" id="cocktailName" name="cocktailName" />
        </label>
        <label>
            Ingredient 1:
            <input type="text" id="ingredient1" name="ingredient1" />
        </label>
        <label>
            Ingredient 2:
            <input type="text" id="ingredient2" name="ingredient2" />
        </label>
        <label>
            Quantity:
            <input type="text" id="quantity" name="quantity" />
        </label>
      </div>
      <input type="submit" value="Create cocktail" />
    </form>
  );
}
