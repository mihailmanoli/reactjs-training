import "../App.css";
import { getImageUrl } from "../utils";

export default function Cocktail(props) {
  return (
    <>
      <div className="cocktail cocktail-link">
        <img
          src={getImageUrl(props.strDrinkThumb)}
          alt={props.strDrink}
        />
        <span>{props.strDrink}</span>
      </div>
    </>
  );
}
