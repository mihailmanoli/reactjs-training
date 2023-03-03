import { Link } from "react-router-dom";
import { CATEGORIES } from "../constants";

export default function NavigationBar() {
  const getMenuItems = () => {
    return Object.keys(CATEGORIES).map((categoryId) => {
      return (
        <Link
          key={categoryId}
          to={`/category/${categoryId}`}
          className="menu-item"
        >
          {CATEGORIES[categoryId].name}
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
