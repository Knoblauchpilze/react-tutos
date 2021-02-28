
import '../styles/ShoppingList.css';
import {plants} from '../datas/plants.js';
import PlantItem from './PlantItem.jsx';

function ShoppingList() {
  const categories = plants.reduce(
    (acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)),
    []
  );

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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
