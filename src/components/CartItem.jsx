import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/CartSlice.jsx';

export default function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrement = (item) => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  const handleDecrement = (item) => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  const handleRemove = (item) => dispatch(removeItem(item.id));
  const handleContinueShopping = () => { window.history.pushState({}, '', '/plants'); window.location.href = '/plants'; };

  if (!cartItems.length) return <main className="content-page cart-page"><section className="empty-state">
    <h1>Your cart is empty</h1><p>Find a plant to bring home.</p>
    <button className="button get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
  </section></main>;

  return <main className="content-page cart-page">
    <section className="page-heading"><p className="eyebrow">YOUR SELECTION</p><h1>Shopping Cart</h1></section>
    <div className="cart-layout"><section className="cart-container">
      {cartItems.map((item) => <article className="cart-row" key={item.id}>
        <img src={item.image} alt={item.name} />
        <div className="cart-product-details"><h2>{item.name}</h2><p>Unit price: ${item.price.toFixed(2)}</p>
          <div className="quantity-control">
            <button aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}>−</button>
            <span>{item.quantity}</span>
            <button aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>+</button>
          </div>
        </div>
        <div className="cart-line-total"><strong>${(item.price * item.quantity).toFixed(2)}</strong>
          <button className="remove-button" onClick={() => handleRemove(item)}>Delete</button>
        </div>
      </article>)}
    </section>
    <aside className="order-summary"><p className="eyebrow">ORDER SUMMARY</p>
      <div className="summary-total"><span>Total amount</span><strong>${totalAmount.toFixed(2)}</strong></div>
      <button className="button checkout-button" onClick={() => window.alert('Coming Soon!')}>Checkout</button>
      <button className="button get-started-button continue-button" onClick={handleContinueShopping}>Continue Shopping</button>
    </aside></div>
  </main>;
}