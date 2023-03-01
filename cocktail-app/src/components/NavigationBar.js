import { Link } from "react-router-dom";

export default function NavigationBar() {

  // object literals
  var categories = {
    Alcoholic: {
      name: "Alcoholic",
      filter: "filter.php?a=Alcoholic",
      timeout: 0,
    },
    Non_Alcoholic: {
      name: "Non Alcoholic",
      filter: "filter.php?a=Non_Alcoholic",
      timeout: 0,
    },
    Ordinary_Drink: {
      name: "Ordinary Drink",
      filter: "filter.php?c=Ordinary_Drink",
      timeout: 0,
    },
    Cocktail_glass: {
      name: "Cocktail Glass",
      filter: "filter.php?g=Cocktail_glass",
      timeout: 0,
    },
    Champagne_flute: {
      name: "Champagne Flute",
      filter: "filter.php?g=Champagne_flute",
      timeout: 0,
    },
  };

  const getMenuItems = () => {
    return Object.keys(categories).map((categoryId) => {
      return (
        <Link key={categoryId} to={`/category/${categoryId}`} className="menu-item">
          {categories[categoryId].name}
        </Link>
      );
    });
  };

  return (
    <>
      <h1>Cocktails</h1>
      <header>
        <div className="menu">{getMenuItems()}</div>
      </header>
    </>
  );
}
