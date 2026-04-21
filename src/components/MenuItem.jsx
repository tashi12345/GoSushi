import React from 'react';
import { Plus } from 'lucide-react';

export default function MenuItem({ item, onAdd }) {
  return (
    <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} 
         onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
         onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}>
      <div style={{ height: '220px', width: '100%', overflow: 'hidden', position: 'relative' }}>
        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
             onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
             onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}/>
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-primary)', color: 'var(--color-accent)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px' }}>
          {item.category}
        </div>
      </div>
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff', letterSpacing: '0.5px' }}>{item.name}</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.5 }}>
          {item.description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <span style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-secondary)' }}>Rs. {item.price}</span>
          <button className="btn btn-primary" style={{ padding: '0.75rem', borderRadius: '50%' }} onClick={() => onAdd(item)} aria-label="Add to cart">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
