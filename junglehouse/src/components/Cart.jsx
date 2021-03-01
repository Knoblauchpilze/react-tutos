
import '../styles/Cart.css';
import {useState} from 'react';

function Cart(props) {
  const monsteraPrice = 12;
  const {cart, updateCart} = props;

  const [isOpen, setIsOpen] = useState(true);

  // Compute total price of the cart.
  const total = cart.reduce(
    (acc, plant) => acc + plant.amount * plant.price,
    0
  );

  if (!isOpen) {
    return (
      <div className="tjh_cart_closed">
        <button className="tjh_cart_toggle_button" onClick = {() => setIsOpen(true)}>Open the cart</button>
      </div>
    );
  }

  return (
    <div className="tjh_cart">
      <button className="tjh_cart_toggle_button" onClick = {() => setIsOpen(false)}>Close</button>
      <h2>Cart:</h2>
      {
        cart.map(({name, price, amount}, index) => (
        <div key={`${name}-${index}`}>
          {name} {price} euro(s) x {amount}
        </div>
        ))
      }
      <h3>Total: {total} euro(s)</h3>
      <button onClick = {() => updateCart([])}>Empty cart</button>
    </div>
  );
}

export default Cart;
