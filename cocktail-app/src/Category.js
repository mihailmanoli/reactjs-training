import React, { useState, useEffect } from "react";
import Cocktail from "./Cocktail";
import CocktailPreview from "./CocktailPreview";

export default function Category({ name, filter, timeout }) {
  const [cocktails, setCocktails] = useState(null);
  const [selectedCocktailId, setSelectedCocktailId] = useState(null);

  useEffect(() => {
    const getCocktails = setTimeout(async () => {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/${filter}`
      );
      const data = await response.json();

      setCocktails(data);
      setSelectedCocktailId(null);
    }, timeout);

    return () => clearTimeout(getCocktails);
  }, [filter, timeout]);

  const onCocktailClick = (idDrink) => {
    setSelectedCocktailId(idDrink);
  };

  const clearSelectedCocktail = () => {
    setSelectedCocktailId(null);
  };

  const cocktailList = cocktails?.drinks?.map((drink) => (
    <Cocktail
      key={drink.idDrink}
      {...drink}
      onCocktailClick={onCocktailClick}
    />
  ));

  return (
    <>
      {selectedCocktailId ? (
        <>
          <CocktailPreview
            key={selectedCocktailId}
            idDrink={selectedCocktailId}
          />
          <button onClick={clearSelectedCocktail}>Back</button>
        </>
      ) : (
        <>
          <h2>{name}</h2>
          <div className="cocktail-list">{cocktailList}</div>
        </>
      )}
    </>
  );
}
