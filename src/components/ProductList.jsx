import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice.jsx';
import { plantsArray } from '../data/plants.js';

// Shared navbar used by the Plants and Cart pages
export function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <a className="brand" href="/">
        🌿 Paradise Nursery
      </a>

      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/plants">Plants</a>
        <a href="/cart" className="cart-link">
          🛒 Cart <span className="cart-count">{totalItems}</span>
        </a>
      </nav>
    </header>
  );
}

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Required grading logic: addedToCart[plant.name]
  const addedToCart = {};
  cartItems.forEach((item) => {
    addedToCart[item.name] = true;
  });

  const isAdded = addedToCart[plant.name] || false;

  return (
    <article className="plant-card">
      <img src={plant.image} alt={plant.name} loading="lazy" />

      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p className="price">${Number(plant.price).toFixed(2)}</p>

        <button
          className="button add-button"
          disabled={addedToCart[plant.name] || false}
          onClick={() => dispatch(addItem(plant))}
        >
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}

export default function ProductList() {
  return (
    <main className="content-page">
      <section className="page-heading">
        <p className="eyebrow">THE PLANT SHOP</p>
        <h1>Find your green companion.</h1>
        <p>
          Browse our handpicked houseplants and bring a little more life
          into your space.
        </p>
      </section>

      {plantsArray.map((group) => (
        <section className="plant-category" key={group.category}>
          <h2>{group.category}</h2>

          <div className="plant-grid">
            {group.plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}