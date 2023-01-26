import './App.css';

export default function Cocktail({strDrink, strDrinkThumb}) {
    const imageUrl = strDrinkThumb + '/preview'
    return (
        <div className="cocktail">
            <img src={imageUrl} />
            <span>{strDrink}</span>
        </div>
    );
}