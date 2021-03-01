
import '../styles/PlantItem.css';
import CareScale from './CareScale.jsx';
import {useState} from 'react';

function PlantItem(props) {
  const {
    name,
    cover,
    id,
    light,
    water,
    isSpecialOffer
  } = props;

  const [cart, addToCart] = useState(0);

  return (
    <div key={id} className="tjh_plant_item">
      <img className="tjh_plant_item_cover" src={cover} alt={`cover for ${name}`}/>
      <div>{name}</div>
      <div>
        <CareScale value={light} care="light"/>
        <CareScale value={water} care="water"/>
      </div>
      {isSpecialOffer && <div className="tjh_sales">Sales</div>}
    </div>
  );
}

export default PlantItem