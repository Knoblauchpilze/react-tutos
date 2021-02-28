
import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

function CareScale(props) {
  const scale = props.value;

  let icon = props.care === "light" ? sun : water;
  let alt = props.care === "light" ? "sun-icon" : "water-icon";

  const range = [1, 2, 3];

  return (
    <div>
      {range.map((rangeElem) =>
        scale >= rangeElem ?
        <img key={rangeElem.toString()} src={icon} alt={alt}/> :
        null
      )}
    </div>
  );
}

export default CareScale
