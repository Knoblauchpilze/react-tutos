
import '../styles/App.css';
import '../styles/Layout.css';
import Banner from './Banner.jsx';
import ShoppingList from './ShoppingList.jsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';
import {useState} from 'react';

function App() {
  const [cart, updateCart] = useState([]);

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
