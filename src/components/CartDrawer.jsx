import React from 'react';
import { Minus, Plus, Trash2, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, totalItems, totalPrice, dispatch } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '420px', maxWidth: '100vw',
        background: 'var(--color-surface)', borderLeft: '1px solid var(--color-border)',
        zIndex: 100, display: 'flex', flexDirection: 'column',
        animation: 'slideRight 0.3s ease'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid var(--color-border)' }}>
          <h3 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '10px' }}><ShoppingBag size={22} /> Your Cart</h3>
          <button onClick={onClose} className="btn-icon btn-secondary" style={{ padding: '8px' }}><X size={20} /></button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem 1.5rem' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', paddingTop: '4rem', color: 'var(--color-text-muted)' }}>
              <ShoppingBag size={64} style={{ marginBottom: '1rem', opacity: 0.3 }} />
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Your cart is empty</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Add some delicious sushi!</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid var(--color-border)', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-md)', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.name}</h4>
                  <p style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem' }}>Rs. {item.price}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <button className="btn-icon" style={{ background: 'var(--color-surface-2)', padding: '4px', borderRadius: '6px' }} onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: item.qty - 1 } })}><Minus size={14} /></button>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                    <button className="btn-icon" style={{ background: 'var(--color-surface-2)', padding: '4px', borderRadius: '6px' }} onClick={() => dispatch({ type: 'UPDATE_QTY', payload: { id: item.id, qty: item.qty + 1 } })}><Plus size={14} /></button>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem' }}>Rs. {item.price * item.qty}</p>
                  <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })} style={{ color: 'var(--color-danger)', marginTop: '0.5rem' }}><Trash2 size={16} /></button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-surface-2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Subtotal ({totalItems} items)</span>
              <span style={{ fontWeight: 700 }}>Rs. {totalPrice}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Delivery</span>
              <span style={{ fontWeight: 700, color: 'var(--color-success)' }}>FREE</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary)' }}>Rs. {totalPrice}</span>
            </div>
            <button className="btn btn-primary btn-lg" style={{ width: '100%', fontSize: '1rem' }} onClick={() => { onClose(); navigate('/checkout'); }}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
