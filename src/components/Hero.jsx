import React from 'react';
import heroBgImg from '../assets/hero_bg.png';

export default function Hero() {
  return (
    <section style={{ 
      position: 'relative',
      padding: '8rem 0', 
      textAlign: 'center', 
      marginBottom: '4rem',
      borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url(${heroBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.9) 100%)',
        zIndex: 1
      }} />
      
      <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
        <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>Authentic • Fresh • Exquisite</span>
        <h2 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px' }}>The Original <span style={{ color: 'var(--color-secondary)' }}>Sushi</span> Bar</h2>
        <p style={{ fontSize: '1.25rem', color: '#E0E0E0', maxWidth: '700px', margin: '0 auto 2.5rem auto', fontWeight: 400 }}>
          Experience the art of Japanese cuisine. Hand-crafted rolls, fresh sashimi, and premium bento boxes delivered to your door in Lahore.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }} onClick={() => {
            const menu = document.getElementById('menu');
            if (menu) menu.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
}
