import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MenuCard({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
             onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.12)'}
             onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
        <span className="badge badge-primary" style={{ position: 'absolute', top: '16px', right: '16px', backdropFilter: 'blur(8px)', background: 'rgba(0,114,198,0.85)', color: '#fff' }}>{item.category}</span>
      </div>
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 2 }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem', color: '#fff', letterSpacing: '-0.3px' }}>{item.name}</h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1, lineHeight: 1.7 }}>{item.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary)' }}>Rs. {item.price}</span>
          <button className="btn btn-primary btn-icon" style={{ width: '44px', height: '44px', boxShadow: 'var(--shadow-glow)' }}
                  onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })} aria-label="Add to cart">
            <Plus size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
