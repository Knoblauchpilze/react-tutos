
import '../styles/ShoppingList.css';
import {plants} from '../datas/plants.js';

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
          <li className="tjh_plant_item" key={plant.id}>
            {plant.name}
            {plant.isBestSale && <span>🔥</span>}
            {plant.isSpecialOffer && <div className="tjh_sales">Sales</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
