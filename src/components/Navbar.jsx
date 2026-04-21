import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, MapPin, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/logo.png';

export default function Navbar({ onCartOpen }) {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top bar */}
      <div style={{ background: 'var(--color-primary)', padding: '0.4rem 0', fontSize: '0.8rem', textAlign: 'center', fontWeight: 500 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={13} /> Gulberg • DHA • Johar Town, Lahore</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Phone size={13} /> +92 300 1234567</span>
        </div>
      </div>

      {/* Main nav */}
      <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 50, borderRadius: 0, borderLeft: 0, borderRight: 0, borderTop: 0 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={logoImg} alt="Go Sushi" style={{ height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)' }} />
            <div>
              <h1 style={{ fontSize: '1.3rem', lineHeight: 1.1, letterSpacing: '1.5px', fontWeight: 800 }}>GO SUSHI</h1>
              <p style={{ fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600 }}>The Original Sushi Bar</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase',
                color: location.pathname === l.to ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                transition: 'color var(--transition)',
                borderBottom: location.pathname === l.to ? '2px solid var(--color-primary)' : '2px solid transparent',
                paddingBottom: '4px'
              }}>{l.label}</Link>
            ))}
            <Link to="/staff" style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Staff Portal →</Link>
            <button className="btn btn-primary btn-sm" onClick={onCartOpen} style={{ position: 'relative' }}>
              <ShoppingBag size={16} />
              Cart
              {totalItems > 0 && (
                <span style={{ position: 'absolute', top: '-6px', right: '-6px', background: 'var(--color-accent)', color: '#000', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800 }}>{totalItems}</span>
              )}
            </button>
          </nav>

          {/* Mobile toggle */}
          <div style={{ display: 'none' }} className="mobile-toggle">
            <button onClick={onCartOpen} style={{ marginRight: '12px', position: 'relative' }}>
              <ShoppingBag size={22} color="var(--color-text)" />
              {totalItems > 0 && <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--color-primary)', color: '#fff', width: '16px', height: '16px', borderRadius: '50%', fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{totalItems}</span>}
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ padding: '1rem 1.5rem 1.5rem', borderTop: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '0.75rem 0', fontWeight: 600, fontSize: '0.95rem', color: location.pathname === l.to ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}>{l.label}</Link>
            ))}
            <Link to="/staff" onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '0.75rem 0', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Staff Portal →</Link>
          </div>
        )}
      </header>
    </>
  );
}
