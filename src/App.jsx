import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return <header className="navbar">
    <Link className="brand" to="/">🌿 Paradise Nursery</Link>
    <nav aria-label="Main navigation">
      <Link to="/">Home</Link><Link to="/plants">Plants</Link>
      <Link to="/cart" className="cart-link">🛒 Cart <span className="cart-count">{totalItems}</span></Link>
    </nav>
  </header>;
}

export default function App() {
  const [page, setPage] = useState('home');
  const [showAbout, setShowAbout] = useState(false);
  const onGetStarted = () => { setPage('plants'); setShowAbout(false); window.history.pushState({}, '', '/plants'); };
  const goHome = () => { setPage('home'); setShowAbout(false); window.history.pushState({}, '', '/'); };
  const goPlants = () => { setPage('plants'); setShowAbout(false); window.history.pushState({}, '', '/plants'); };
  const goCart = () => { setPage('cart'); setShowAbout(false); window.history.pushState({}, '', '/cart'); };

  // Also support direct page loads from the required public routes.
  const path = window.location.pathname;
  const activePage = path === '/cart' ? 'cart' : path === '/plants' ? 'plants' : page;
  return <div className="app-container">
    {activePage !== 'home' || showAbout ? <header className="navbar">
      <Link className="brand" to="/" onClick={goHome}>🌿 Paradise Nursery</Link>
      <nav><a href="/" onClick={(e) => {e.preventDefault(); goHome();}}>Home</a>
      <a href="/plants" onClick={(e) => {e.preventDefault(); goPlants();}}>Plants</a>
      <a href="/cart" onClick={(e) => {e.preventDefault(); goCart();}}>🛒 Cart <span className="cart-count"><CartCount /></span></a></nav>
    </header> : null}
    {activePage === 'home' && !showAbout ? <main className="hero">
      <div className="hero-shade"></div><section className="hero-content">
        <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
        <h1>Welcome to Paradise Nursery</h1>
        <p className="hero-copy">Bring nature into your home with thoughtfully selected houseplants for every space.</p>
        <button className="button button-light get-started-button" onClick={onGetStarted}>Get Started</button>
        <button className="text-button" onClick={() => setShowAbout(true)}>About Us</button>
      </section>
    </main> : showAbout ? <AboutUs /> : activePage === 'plants' ? <ProductList /> : <CartItem />}
    <footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery · Grow something good.</footer>
  </div>;
}

function CartCount() {
  const items = useSelector((state) => state.cart.items);
  return items.reduce((sum, item) => sum + item.quantity, 0);
}