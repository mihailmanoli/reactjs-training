import React, { useState, useEffect } from "react";
import CocktailPreview from "./CocktailPreview";
import CocktailDetails from "./CocktailDetails";

export default function Category({ name, filter, timeout }) {
  const [cocktails, setCocktails] = useState(null);
  const [currentCocktail, setCurrentCocktail] = useState(null);
  
  useEffect(() => {
    const getCocktails = setTimeout(async () => {
      const response = await fetch(`http://thecocktaildb.com/api/json/v1/1/${filter}`);
      const data = await response.json();

      setCocktails(data);
      setCurrentCocktail(null);
    }, timeout);

    return () => clearTimeout(getCocktails);
  }, [filter, timeout]);

  const onCocktailClick = async (idDrink) => {
    const response = await fetch(
      `http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
    );
    const data = await response.json();

    setCurrentCocktail(data.drinks[0]);
    setCocktails(null);
  };

  const clearSelection = () => {
    setCurrentCocktail(null);
  };

  const cocktailList =
    cocktails &&
    cocktails.drinks &&
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
