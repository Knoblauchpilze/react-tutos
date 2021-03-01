
import '../styles/ShoppingList.css';
import {plants} from '../datas/plants.js';
import PlantItem from './PlantItem.jsx';

function ShoppingList(props) {
  const {cart, updateCart} = props;

  const categories = plants.reduce(
    (acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)),
    []
  );

  function addToCart(name, price) {
    // Check whether the plant is already part of the
    // cart: if yes we will update the amount that is
    // being ordered and otherwise we'll add an entry.
    const curPlant = cart.find((plant) => plant.name === name);
    
    if (curPlant) {
      // We don't want to change the position of the
      // plant in the cart: so we will just copy the
      // data to a new array, update the amount for
      // the plant and update the state with it.
      const uCart = cart.slice();

      uCart.forEach(
        (plant, index) => plant.name === name ? plant.amount++ : plant
      );

      updateCart(uCart);
    }
    else {
      updateCart([
        ...cart,
        {
          name: name,
          price: price,
          amount: 1,
        }
      ]);
    }
  }

  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="tjh_plant_list">
        {plants.map((plant, index) => (
          <li key={plant.id}>
            <PlantItem
              name = {plant.name}
              cover = {plant.cover}
              id = {plant.id}
              light = {plant.light}
              water = {plant.water}
              isSpecialOffer = {plant.isSpecialOffer}
            />
            <button onClick = {() => addToCart(plant.name, plant.price)}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList
