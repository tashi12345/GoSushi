import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MenuCard({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
             onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
             onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
        <span className="badge badge-primary" style={{ position: 'absolute', top: '12px', right: '12px' }}>{item.category}</span>
      </div>
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: '#fff' }}>{item.name}</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', marginBottom: '1.25rem', flex: 1, lineHeight: 1.6 }}>{item.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' }}>Rs. {item.price}</span>
          <button className="btn btn-primary btn-icon" style={{ width: '40px', height: '40px' }}
                  onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })} aria-label="Add to cart">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
