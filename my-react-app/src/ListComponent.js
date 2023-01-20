import './App.css';
import { Component } from "react";
import ItemComponent from './ItemComponent';

const products = [{ name: "apple", quantity: 12 }, { name: "strawberry", quantity: 7 }]

class ListComponent extends Component {
    render() {
        console.log(products)
        const listItems = products.map(fruit => 
            <ItemComponent key={fruit.name} {...fruit} />
        );

        return (
            <ul>{listItems}</ul>
        );
    }
}

export default ListComponent;