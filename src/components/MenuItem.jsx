import React from 'react';
import { Plus } from 'lucide-react';

export default function MenuItem({ item, onAdd }) {
  return (
    <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'var(--transition-normal)' }}>
      <div style={{ height: '180px', backgroundColor: 'rgba(255,107,53, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '4rem' }}>🍣</span>
      </div>
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.name}</h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem', flexGrow: 1 }}>
          {item.description || 'Fresh and authentic sushi.'}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-accent)' }}>Rs. {item.price}</span>
          <button className="btn btn-primary" style={{ padding: '0.5rem', borderRadius: '50%' }} onClick={() => onAdd(item)} aria-label="Add to cart">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
