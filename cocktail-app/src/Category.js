import React, {useState, useEffect} from "react";
import Cocktail from "./Cocktail";

export default function Category({name, api}) {
    const [cocktails, setCocktails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${api}`);
            const newData = await response.json();
            setCocktails(newData);
        };

        fetchData();
    }, [api]);

    const drinks = cocktails && cocktails.drinks.map(drink => 
        <Cocktail key={drink.idDrink} {...drink} />
    );

    return (
        <>
            <h2>{name}</h2>
            <div className="cocktail-list">
                {drinks}
            </div>
        </>
    );
}