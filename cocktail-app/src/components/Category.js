import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cocktail from "./Cocktail";

export default function Category({ name, filter }) {
  const [cocktails, setCocktails] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const {categoryId} = useParams();

  useEffect(() => {
    const getCocktails = async () => {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/filter.php?a=${categoryId}`
      );
      const data = await response.json();

      setCocktails(data);
    };

    if(!searchTerm) {
      getCocktails();
    } else {
      const searchCocktails = setTimeout(async () => {
        const response = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
  
        setCocktails(data);
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
      <Cocktail
        key={drink.idDrink}
        {...drink}
      />  
    </div>
  ));

  // search
  const handleFilter = (event) => {
    const filter = event.target.value;
    setSearchTerm(filter);
  };

  return (
    <>
        <input type="text" onChange={handleFilter} className='search-cocktail' placeholder='Search by name' value={searchTerm} />
        <hr />
        <h2>{categoryId}</h2>
        <div className="cocktail-list">{cocktailList}</div>
        <Link to={"/upload"}>Create Cocktail</Link>
    </>
  );
}
