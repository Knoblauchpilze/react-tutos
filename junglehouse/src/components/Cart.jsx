
import '../styles/Cart.css';
import CartItem from './CartItem.jsx';
import {useState} from 'react';
import {useEffect} from 'react';

function Cart(props) {
  const {cart, updateCart} = props;

  const [isOpen, setIsOpen] = useState(true);

  // Compute total price of the cart.
  const total = cart.reduce(
    (acc, plant) => acc + plant.amount * plant.price,
    0
  );

  // Update the tab title to reflect the value
  // of the cart.
  useEffect(
    () => {
      document.title = `TJH: ${total}€ worth of nature`
    },
    [total]
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
          <CartItem key={`${name}-${index}`} name={name} price={price} amount={amount} cart={cart} updateCart={updateCart}/>
        ))
      }
      <h3>Total: {total} euro(s)</h3>
      <button onClick = {() => updateCart([])}>Empty cart</button>
    </div>
  );
}

export default Cart;
