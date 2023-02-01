import "./App.css";
import { getImageUrl } from "./utils";

export default function CocktailPreview(props) {
  const onCocktailClick = () => {
    props.onCocktailClick(props.idDrink);
  };

  return (
    <>
      <div className="cocktail cocktail-link">
        <img
          onClick={onCocktailClick}
          src={getImageUrl(props.strDrinkThumb)}
          alt={props.strDrink}
        />
        <span onClick={onCocktailClick}>{props.strDrink}</span>
      </div>
    </>
  );
}
