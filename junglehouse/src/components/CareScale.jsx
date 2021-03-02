
import sun from '../assets/sun.svg';
import water from '../assets/water.svg';

function CareScale(props) {
  const scale = props.value;

  let icon = props.care === "light" ? sun : water;
  let alt = props.care === "light" ? "sun-icon" : "water-icon";

  const range = [1, 2, 3];

  return (
    <div onClick = {() => handleClick(props.care, scale)}>
      {range.map((rangeElem) =>
        scale >= rangeElem ?
        <img key={rangeElem.toString()} src={icon} alt={alt}/> :
        null
      )}
    </div>
  );
}

function handleClick(care, amount) {
  const good = (care === "light" ? "sun" : "water");
  let text = "";

  switch (amount) {
    case 1:
      text = "only few";
      break;
    case 2:
      text = "a moderate amount of";
      break;
    case 3:
      text = "a lot of";
      break;
    default:
      text = "an unknown amount of";
      break;
  }

  alert(`This plant requires ${text} ${good}`);
}

export default CareScale
