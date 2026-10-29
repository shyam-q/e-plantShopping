import { useState } from 'react';
import { useSelector } from 'react-redux';

import AboutUs from './components/AboutUs.jsx';
import ProductList, { Navbar } from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';

export default function App() {
  const [showAbout, setShowAbout] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const path = window.location.pathname;

  const activePage =
    path === '/cart'
      ? 'cart'
      : path === '/plants'
        ? 'plants'
        : 'home';

  const onGetStarted = () => {
    window.location.href = '/plants';
  };

  return (
    <div className="app-container">
      {(activePage !== 'home' || showAbout) && <Navbar />}

      {activePage === 'home' && !showAbout ? (
        <main className="hero">
          <div className="hero-shade"></div>

          <section className="hero-content">
            <p className="eyebrow">GROW A LITTLE HAPPINESS</p>

            <h1>Welcome to Paradise Nursery</h1>

            <p className="hero-copy">
              Bring nature into your home with thoughtfully selected
              houseplants for every space.
            </p>

            <button
              className="button button-light get-started-button"
              onClick={onGetStarted}
            >
              Get Started
            </button>

            <button
              className="text-button"
              onClick={() => setShowAbout(true)}
            >
              About Us
            </button>
          </section>
        </main>
      ) : showAbout ? (
        <AboutUs />
      ) : activePage === 'plants' ? (
        <ProductList />
      ) : (
        <CartItem />
      )}

      <footer className="site-footer">
        © {new Date().getFullYear()} Paradise Nursery · Grow something good.
      </footer>
    </div>
  );
}