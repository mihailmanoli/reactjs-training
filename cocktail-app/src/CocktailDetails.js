import "./App.css";
import { getImageUrl } from "./utils";

export default function CocktailDetails(props) {
  const goBack = () => {
    props.clearSelection();
  };

  return (
    <>
      <div className="cocktail">
        <h3>{props.strDrink}</h3>
        <img
          src={getImageUrl(props.strDrinkThumb, false)}
          alt={props.strDrink}
        />
      </div>
      <button onClick={goBack}>Back</button>
    </>
  );
}
