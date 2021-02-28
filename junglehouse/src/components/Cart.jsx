
import '../styles/Cart.css';

function Cart() {
  const monsteraPrice = 12;
  const ivyPrice = 8;
  const flowerPrice = 15;

  return (
    <div className="tjh_cart">
      <h2>Cart:</h2>
      <ul>
        <li>Monstera: {monsteraPrice} euro(s)</li>
        <li>Ivy: {ivyPrice} euro(s)</li>
        <li>Flowers: {flowerPrice} euro(s)</li>
      </ul>
      <p>Total: {monsteraPrice + ivyPrice + flowerPrice} euro(s)</p>
    </div>
  );
}

export default Cart;
