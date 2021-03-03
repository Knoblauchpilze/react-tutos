
import '../styles/CartItem.css';

function CartItem(props) {
  // Fetch the cart item and the way to update
  // the cart.
  const {name, price, amount} = props;
  const {cart, updateCart} = props;

  function addOne() {
    // Search for the element of the cart and
    // add one to the amount in the cart.
    // We know that the item exists because we
    // are in a cart item already.
    const uCart = cart.slice();

    uCart.forEach(
      (plant) => plant.name === name ? plant.amount++ : plant
    );

    updateCart(uCart);
  }

  function removeOne() {
    // Search for the element of the cart and
    // add one to the amount in the cart.
    // We know that the item exists because we
    // are in a cart item already.
    const uCart = cart.slice();

    uCart.forEach(
      (plant) => plant.name === name ? plant.amount-- : plant
    );

    // Make sure we filter out plant that might
    // have a null amount.
    const fCart = uCart.filter(
      plant => plant.amount > 0
    );

    updateCart(fCart);
  }

  return (
    <div className="tjh_cart_item">
      {name} {price} euro(s) x {amount}
      <button className="tjh_cart_item_button" onClick = {() => addOne()}>+</button>
      <button className="tjh_cart_item_button" onClick = {() => removeOne()}>-</button>
    </div>
  );
}

export default CartItem
