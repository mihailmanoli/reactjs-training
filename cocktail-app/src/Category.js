import React, { useState, useEffect } from "react";
import CocktailPreview from "./CocktailPreview";
import CocktailDetails from "./CocktailDetails";


export default function Category({ name, api }) {
  const [cocktails, setCocktails] = useState(null);
  const [currentCocktail, setCurrentCocktail] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${api}`);
      const data = await response.json();

      setCocktails(data);
      setCurrentCocktail(null);
    };

    fetchData();
  }, [api]);

  const onCocktailClick = async (idDrink) => {
    const response = await fetch(
      `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    );
    const data = await response.json();

    setCurrentCocktail(data.drinks[0]);
  };

  const clearSelection = () => {
    setCurrentCocktail(null);
  };

  const cocktailList =
    cocktails &&
    cocktails.drinks.map((drink) => (
      <CocktailPreview
        key={drink.idDrink}
        {...drink}
        onCocktailClick={onCocktailClick}
      />
    ));

  return (
    <>
      {currentCocktail && (
        <CocktailDetails
          key={currentCocktail.idDrink}
          {...currentCocktail}
          clearSelection={clearSelection}
        />
      )}

      {!currentCocktail && (
        <>
          <h2>{name}</h2>
          <div className="cocktail-list">{cocktailList}</div>
        </>
      )}
    </>
  );
}
