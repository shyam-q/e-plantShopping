import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice.jsx';
import { plantsArray } from '../data/plants.js';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const addedToCart = cartItems.some((item) => item.id === plant.id);
  return <article className="plant-card">
    <img src={plant.image} alt={plant.name} loading="lazy" />
    <div className="plant-info"><h3>{plant.name}</h3><p className="price">${plant.price.toFixed(2)}</p>
      <button className="button add-button" disabled={addedToCart} onClick={() => dispatch(addItem(plant))}>
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  </article>;
}

export default function ProductList() {
  return <main className="content-page">
    <section className="page-heading"><p className="eyebrow">THE PLANT SHOP</p><h1>Find your green companion.</h1><p>Browse our handpicked houseplants and bring a little more life into your space.</p></section>
    {plantsArray.map((group) => <section className="plant-category" key={group.category}>
      <h2>{group.category}</h2>
      <div className="plant-grid">{group.plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)}</div>
    </section>)}
  </main>;
}