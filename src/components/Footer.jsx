import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', marginTop: '6rem' }}>
      <div className="container" style={{ padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <img src={logoImg} alt="Go Sushi" style={{ height: '40px', width: '40px', borderRadius: '50%', border: '2px solid var(--color-primary)' }} />
              <div>
                <h3 style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>GO SUSHI</h3>
                <p style={{ fontSize: '0.65rem', color: 'var(--color-accent)', letterSpacing: '2px' }}>THE ORIGINAL SUSHI BAR</p>
              </div>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Lahore's premium sushi destination. Authentic Japanese flavors crafted with passion and the finest ingredients.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)', fontSize: '1rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/menu" style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', transition: 'color var(--transition)' }}>Our Menu</Link></li>
              <li><Link to="/about" style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>About Us</Link></li>
              <li><Link to="/contact" style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)', fontSize: '1rem' }}>Our Branches</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={14} color="var(--color-primary)" /> Gulberg III, Lahore</li>
              <li style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={14} color="var(--color-primary)" /> DHA Phase 3, Lahore</li>
              <li style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={14} color="var(--color-primary)" /> Johar Town, Lahore</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)', fontSize: '1rem' }}>Get in Touch</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} color="var(--color-primary)" /> +92 300 1234567</li>
              <li style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} color="var(--color-primary)" /> info@gosushi.pk</li>
              <li style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Instagram size={14} color="var(--color-primary)" /> @gosushipk</li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>&copy; 2026 Go Sushi — The Original Sushi Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
