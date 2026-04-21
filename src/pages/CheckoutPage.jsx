import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, MapPin, Phone, User, CreditCard } from 'lucide-react';
import Footer from '../components/Footer';

export default function CheckoutPage() {
  const { cart, totalPrice, dispatch } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div>
        <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="animate-slide-up" style={{ textAlign: 'center', maxWidth: '480px', padding: '2rem' }}>
            <CheckCircle size={80} color="var(--color-success)" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Order Placed!</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Thank you for ordering from Go Sushi!</p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>Your order has been sent to the kitchen. Estimated delivery: 35-45 minutes.</p>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div>
        <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your cart is empty</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Add some items before checking out.</p>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/menu')}>Browse Menu</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <section className="container" style={{ padding: '3rem 1.5rem 5rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Checkout</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>Complete your order details below</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', alignItems: 'start' }}>
          {/* Form */}
          <form onSubmit={e => { e.preventDefault(); dispatch({ type: 'CLEAR_CART' }); setSubmitted(true); }}>
            <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><User size={20} color="var(--color-primary)" /> Personal Details</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Full Name</label>
                  <input className="input-field" placeholder="Your name" required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Phone</label>
                  <input className="input-field" placeholder="+92 300 XXXXXXX" required />
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={20} color="var(--color-primary)" /> Delivery Address</h3>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Full Address</label>
                <input className="input-field" placeholder="House #, Street, Block, Area" required />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>City</label>
                  <input className="input-field" value="Lahore" readOnly />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Nearest Branch</label>
                  <select className="input-field" required>
                    <option value="">Select branch</option>
                    <option>Go Sushi — Gulberg</option>
                    <option>Go Sushi — DHA</option>
                    <option>Go Sushi — Johar Town</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}><CreditCard size={20} color="var(--color-primary)" /> Payment</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <label className="card" style={{ padding: '1rem 1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                  <input type="radio" name="payment" value="cod" defaultChecked /> Cash on Delivery
                </label>
                <label className="card" style={{ padding: '1rem 1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                  <input type="radio" name="payment" value="card" /> Card Payment
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', fontSize: '1.05rem' }}>Place Order — Rs. {totalPrice}</button>
          </form>

          {/* Summary */}
          <div className="card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.25rem' }}>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-border)' }}>
                <div>
                  <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.name}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>x{item.qty}</p>
                </div>
                <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>Rs. {item.price * item.qty}</p>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--color-border)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Delivery</span>
              <span style={{ color: 'var(--color-success)', fontWeight: 600 }}>FREE</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0 0' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary)' }}>Rs. {totalPrice}</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
