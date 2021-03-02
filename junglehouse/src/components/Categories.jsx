
import '../styles/Categories.css';
import {plants} from '../datas/plants.js';

function Categories(props) {
  const {category, updateCategory} = props;

  const categories = plants.reduce(
    (acc, plant) => (acc.includes(plant.category) ? acc : acc.concat(plant.category)),
    []
  );

  return (
    <div className="tjh_categories">
      <select
        className="tjh_categories_select"
        value={category}
        onChange={(e) => updateCategory(e.target.value)}
      >
        <option value="all">all categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button onClick = {() => updateCategory("all")}>
        Reset categories
      </button>
    </div>
  );
}

export default Categories
