
import '../styles/App.css';
import '../styles/Layout.css';
import Banner from './Banner.jsx';
import ShoppingList from './ShoppingList.jsx';
import Cart from './Cart.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div>
      <Banner />
      <div className="tjh_layout_inner">
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
