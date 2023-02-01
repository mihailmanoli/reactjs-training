import './App.css';
import React, { useState } from 'react';
import Category from './Category';
import CocktailUpload from "./CocktailUpload";

function App() {
  const [category, setCategory] = useState(null);
  const [showUploadCocktail, setShowUploadCocktail] = useState(false);

  const goToPage = (page) => {
    let category = { name: '', api: '' }

    if (page === "Alcoholic") {
      category.name = 'Alcoholic'
      category.api = 'http://thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    } else if (page === "Non_Alcoholic") {
      category.name = 'Non Alcoholic'
      category.api = 'http://thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    } else if (page === "Ordinary_Drink") {
      category.name = 'Ordinary Drink'
      category.api = 'http://thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
    } else if (page === "Cocktail_glass") {
      category.name = 'Cocktail Glass'
      category.api = 'http://thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass'
    } else if (page === "Champagne_flute") {
      category.name = 'Champagne Flute'
      category.api = 'http://thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute'
    }

    setShowUploadCocktail(false);
    setCategory(category);
  };

  const onUploadClick = () => {
    setShowUploadCocktail(true);
  };

  return (
    <div className="App">
      <h1>Cocktails</h1>
      <div className='menu'>
        <button onClick={() => goToPage('Alcoholic')} className="menu-item">Alcoholic</button>
        <button onClick={() => goToPage('Non_Alcoholic')} className="menu-item">Non Alcoholic</button>
        <button onClick={() => goToPage('Ordinary_Drink')} className="menu-item">Ordinary Drink</button>
        <button onClick={() => goToPage('Cocktail_glass')} className="menu-item">Cocktail glass</button>
        <button onClick={() => goToPage('Champagne_flute')} className="menu-item">Champagne flute</button>
      </div>
      <div className='category'>
        {(category && !showUploadCocktail) && <Category name={category.name} api={category.api} />}
      </div>
      <div>
        {!showUploadCocktail && <button onClick={onUploadClick}>Upload</button>}
        {showUploadCocktail && <CocktailUpload />}
      </div>
    </div>
  );
}

export default App;
