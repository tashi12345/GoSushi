import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png';

export default function Header({ cartCount, onCartClick }) {
  return (
    <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 50, borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src={logoImg} alt="Go Sushi Logo" style={{ height: '50px', width: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-secondary)' }} />
          <div>
            <h1 style={{ fontSize: '1.5rem', lineHeight: 1, letterSpacing: '1px' }}>GO SUSHI</h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', margin: 0, letterSpacing: '2px', textTransform: 'uppercase' }}>Premium Sushi Bar</p>
          </div>
        </Link>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" className="nav-link" style={{ fontWeight: 600, color: '#fff', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Menu</Link>
          <Link to="/branch" className="nav-link" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Staff Portal</Link>
          <button className="btn btn-primary" onClick={onCartClick} style={{ padding: '0.5rem 1.2rem' }}>
            <ShoppingBag size={18} style={{ marginRight: '8px' }} />
            Cart ({cartCount})
          </button>
        </nav>
      </div>
    </header>
  );
}
