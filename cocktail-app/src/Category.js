import React, { useState, useEffect } from "react";
import CocktailPreview from "./CocktailPreview";
import CocktailDetails from "./CocktailDetails";
import CocktailUpload from "./CocktailUpload";

export default function Category({ name, api }) {
  const [cocktails, setCocktails] = useState(null);
  const [currentCocktail, setCurrentCocktail] = useState(null);
  const [showUploadCocktail, setShowUploadCocktail] = useState(true);

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
    setShowUploadCocktail(false);
  };

  const clearSelection = () => {
    setCurrentCocktail(null);
    setShowUploadCocktail(true);
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

  const onUploadClick = () => {
    setShowUploadCocktail(true);
  };

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

      {showUploadCocktail && <button onClick={onUploadClick}>Upload</button>}

      {showUploadCocktail && <CocktailUpload />}
    </>
  );
}
