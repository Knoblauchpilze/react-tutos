
import '../styles/App.css';
import '../styles/Layout.css';
import Banner from './Banner.jsx';
import ShoppingList from './ShoppingList.jsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import {useState, useEffect} from 'react';

function App() {
  // Restore the content of the cart upon first
  // loading the component.
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(
    savedCart ? JSON.parse(savedCart) : []
  );

  // Save the content of the cart upon modification
  // of its content.
  useEffect(
    () => {
      localStorage.setItem("cart", JSON.stringify(cart))
    },
    [cart]
  );

  return (
    <div>
      <Banner />
      <div className="tjh_layout_inner">
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
