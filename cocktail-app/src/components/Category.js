import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Cocktail from "./Cocktail";
import { getCategory, searchCocktail } from "../service/RestApiService";
import { CATEGORIES } from "../constants";

export default function Category() {
  const [cocktails, setCocktails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  
  const { categoryId } = useParams();
  const categoryState = useLocation();

  useEffect(() => {
    if (!searchTerm) {
      getCategory(categoryId)
        .then((data) => {
          setCocktails(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const searchCocktails = setTimeout(() => {
        searchCocktail(searchTerm)
          .then((data) => {
            setCocktails(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, 500);
      return () => clearTimeout(searchCocktails);
    }
  }, [categoryId, searchTerm]);

  const nav = useNavigate();

  const onCocktailClick = (idDrink) => {
    let cocktailId = idDrink;
    nav(`/category/${categoryId}/cocktail/${cocktailId}`);
  };

  const cocktailList = cocktails?.drinks?.map((drink) => (
    <div key={drink.idDrink} onClick={() => onCocktailClick(drink.idDrink)}>
      <Cocktail key={drink.idDrink} {...drink} />
    </div>
  ));

  // search
  const handleFilter = (event) => {
    const filter = event.target.value;
    setSearchTerm(filter);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleFilter}
        className="search-cocktail"
        placeholder="Search by name"
        value={searchTerm}
      />
      <hr />
      <h2>{CATEGORIES[categoryId].name}</h2>
      <div className="cocktail-list">{cocktailList}</div>
      <Link to={"/upload"}>Create Cocktail</Link>
    </>
  );
}
