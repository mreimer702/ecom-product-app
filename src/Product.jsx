import {objects } from "prop-types";

const products = ({ items }) => {
    return (
        <div>
            <h3>Coffees</h3>
            {items.map((item, index) => <p key={index}>{item} </p>)}
        </div>
    )
}

Products.defaultProps = {
    items: [{
        id: 1, name: "Double-Double", secret: false, description: "A classic favorite with two juicy beef patties, two slices of American cheese, lettuce, tomato, onions, and In-N-Out’s signature spread on a toasted bun.", price: 5.89, type: "main", img: "../images/icon.jpg"},
        {id: 2, name: "Hamburger", secret: false, description: "A simple yet delicious burger with a fresh beef patty, lettuce, tomato, onions, and spread on a toasted bun.", price: 3.69, type: "main", img: "../images/hamburger.jpg"},
        {id: 3, name: "Cheeseburger", secret: false, description: "Like the hamburger but with a slice of melty American cheese for extra flavor.", price: 4.19, type: "main", img: "../images/cheeseburger.jpg"},
        {id: 4, name: "Grilled Cheese", secret: true, description: "A vegetarian-friendly choice with two slices of melted American cheese, lettuce, tomato, and spread on a toasted bun (no meat).", price: 3.49, type: "main", img: "../images/grilled-cheese.jpg"},
        {id: 5, name: "Protein Style", secret: true, description: "A low-carb option where the bun is replaced with crisp lettuce, wrapping the juicy beef patty and toppings.", price: 4.19, type: "main", img: "../images/protein-style.jpg"},
        {id: 6, name: "Animal Style", secret: true, description: "A secret menu option featuring mustard-grilled beef, extra spread, grilled onions, and pickles for a tangy, savory twist.", price: 5.89, type: "main", img: "../images/animal-style.jpg"},
        {id: 7, name: "French Fries", secret: [true, false], description: "Fresh, hand-cut potatoes prepared in 100% sunflower oil.", price: 2.05, type: "side", img: "../images/fries.jpg"},
        {id: 8, name: "Fountain Drinks", secret: [true, false], description: "Refreshing selections include Coca-Cola®, Diet Coke®, Cherry Coke®, 7UP®, Dr. Pepper®, Root Beer, Signature Pink Lemonade, Lite Pink Lemonade, and Iced Tea", price: 1.85, type: "drinks", img: "../images/cups.png"},
        {id: 9, name: "Shakes", secret: [true, false], description: "Chocolate, strawberry or vanilla flavors made with real ice cream.", price: 2.65, type: "drinks", img: "../images/shakes.png"}
      ]
};

Products.propTypes = {
    items: array
}

export default Products;