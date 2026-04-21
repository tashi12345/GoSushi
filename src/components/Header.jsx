import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 50, borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '45px', height: '45px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', color: '#fff' }}>GS</div>
          <div>
            <h1 style={{ fontSize: '1.5rem', lineHeight: 1 }}>Go Sushi</h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: 0 }}>The Original Sushi Bar!</p>
          </div>
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" className="nav-link" style={{ fontWeight: 600 }}>Menu</Link>
          <Link to="/branch" className="nav-link" style={{ color: 'var(--color-text-muted)' }}>Staff Login</Link>
          <button className="btn btn-primary" onClick={onCartClick} style={{ padding: '0.5rem 1rem' }}>
            <ShoppingBag size={20} style={{ marginRight: '8px' }} />
            Cart ({cartCount})
          </button>
        </nav>
      </div>
    </header>
  );
}
