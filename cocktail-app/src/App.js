import './App.css';
import React, { useState } from 'react';
import Category from './Category';
import CocktailUpload from "./CocktailUpload";

function App() {
  const [category, setCategory] = useState(null);
  const [showUploadCocktail, setShowUploadCocktail] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // object literals
  var pages = {
    "Alcoholic": { name: 'Alcoholic', filter: 'filter.php?a=Alcoholic', timeout: 0 },
    "Non_Alcoholic": { name: 'Non Alcoholic', filter: 'filter.php?a=Non_Alcoholic', timeout: 0 },
    "Ordinary_Drink": { name: 'Ordinary Drink', filter: 'filter.php?c=Ordinary_Drink', timeout: 0 },
    "Cocktail_glass": { name: 'Cocktail Glass', filter: 'filter.php?g=Cocktail_glass', timeout: 0 },
    "Champagne_flute": { name: 'Champagne Flute', filter: 'filter.php?g=Champagne_flute', timeout: 0 }
  }

  // menu
  const goToPage = (page) => {
    let category = pages[page];
    setShowUploadCocktail(false);
    setCategory(category);
    setSearchTerm("");
  };

  const renderMenu = () => {
    return <div className='menu'>
      <button onClick={() => goToPage('Alcoholic')} className="menu-item">Alcoholic</button>
      <button onClick={() => goToPage('Non_Alcoholic')} className="menu-item">Non Alcoholic</button>
      <button onClick={() => goToPage('Ordinary_Drink')} className="menu-item">Ordinary Drink</button>
      <button onClick={() => goToPage('Cocktail_glass')} className="menu-item">Cocktail glass</button>
      <button onClick={() => goToPage('Champagne_flute')} className="menu-item">Champagne flute</button>
    </div>;
  }

  // search
  const handleFilter = (event) => {
    const filter = event.target.value;    
    let category = filter ? { name: 'Search Results', filter: 'search.php?s=' + filter, timeout: 500 }
                          : pages["Alcoholic"]
    setCategory(category);
    setSearchTerm(filter);
    setShowUploadCocktail(false);
  };

  const renderSearch = () => {
    return <div>
      <input type="text" onChange={handleFilter} className='search-cocktail'
        placeholder='Search by name' value={searchTerm} />
    </div>;
  }

  // category
  const renderCategory = () => {
    return <div className='category'>
      {(category && !showUploadCocktail)
        && <Category name={category.name} filter={category.filter} timeout={category.timeout} />}
    </div>;
  }

  // create cocktail
  const onUploadClick = () => {
    setShowUploadCocktail(true);
    setSearchTerm("");
  };
  
  const renderUploadForm = () => {
    return <div>
      { showUploadCocktail ? <CocktailUpload /> : <button onClick={onUploadClick}>Create Cocktail</button> }
    </div>;
  }

  return (
    <div className="App">
      <h1>Cocktails</h1>
      {renderMenu()}
      {renderSearch()}
      <hr />
      {renderCategory()}
      {renderUploadForm()}
    </div>
  );
}

export default App;
