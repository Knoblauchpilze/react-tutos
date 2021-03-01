
import '../styles/Cart.css';
import {useState} from 'react';

function Cart() {
  const monsteraPrice = 12;

  const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

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
      <div>
        Monstera: {monsteraPrice} euro(s)
        <button onClick = {() => updateCart(cart + 1)}>
          Add to cart
        </button>
      </div>
      <h3>Total: {monsteraPrice * cart} euro(s)</h3>
      <button onClick = {() => updateCart(0)}>Empty cart</button>
    </div>
  );
}

export default Cart;
