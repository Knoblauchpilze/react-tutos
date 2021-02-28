
import '../styles/PlantItem.css';
import CareScale from './CareScale.jsx';

function PlantItem(props) {
  const {
    name,
    cover,
    id,
    light,
    water,
    isSpecialOffer
  } = props;

  return (
    <div key={id} className="tjh_plant_item">
      <h3>{name}</h3>
      <img className="tjh_plant_item_cover" src={cover} />
      <div>
        <CareScale value={light} care="light"/>
        <CareScale value={water} care="water"/>
      </div>
      {isSpecialOffer && <div className="tjh_sales">Sales</div>}
    </div>
  );
}

export default PlantItem