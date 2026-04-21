import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';
import makiRollImg from '../assets/maki_roll.png';
import sushiBoxImg from '../assets/sushi_box.png';
import heroBgImg from '../assets/hero_bg.png';
import logoImg from '../assets/logo.png';

const MENU_DATA = [
  { id: 1, name: 'BYOB-Classic', price: 1279.20, category: 'Popular Items', description: 'Original sushi bar classic. Hand-rolled to perfection.', image: makiRollImg },
  { id: 2, name: 'Crunchy Maki', price: 1599, category: 'Popular Items', description: 'Crispy tempura maki rolls garnished with spicy mayo and sesame seeds.', image: makiRollImg },
  { id: 3, name: 'Dynamite California Roll', price: 2199, category: 'Popular Items', description: 'California roll with a spicy kick, served with fresh wasabi.', image: makiRollImg },
  { id: 4, name: 'Winter Wonders', price: 2719.20, category: 'Pau Pau Favorites', description: 'A seasonal special curated by our master chefs.', image: sushiBoxImg },
  { id: 5, name: 'Sushi Dream Box', price: 2719.20, category: 'Pau Pau Favorites', description: 'The ultimate premium Japanese bento box experience with fresh edamame.', image: sushiBoxImg },
  { id: 6, name: 'SIX PERSON DEAL', price: 7199.20, category: 'Sushi Platter', description: 'Our deluxe massive platter. Perfect for sharing with friends and family.', image: heroBgImg },
  { id: 7, name: 'Crispy Tempura Roll', price: 2199, category: 'Chef\'s Special', description: 'Perfectly fried crispy tempura roll. Served hot.', image: makiRollImg }
];

export default function CustomerApp() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header cartCount={cart.length} onCartClick={() => alert('Premium Cart view coming soon for MVP checkout flow!')} />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <section id="menu" className="container" style={{ paddingBottom: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: 'var(--color-secondary)', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Discover</span>
            <h2 style={{ fontSize: '3rem', color: '#fff', marginTop: '0.5rem' }}>Our Menu</h2>
            <div style={{ height: '4px', width: '60px', backgroundColor: 'var(--color-secondary)', margin: '1.5rem auto 0 auto', borderRadius: '4px' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {MENU_DATA.map((item) => (
              <MenuItem key={item.id} item={item} onAdd={handleAddToCart} />
            ))}
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: 'var(--color-primary-light)', padding: '3rem 0', textAlign: 'center', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <img src={logoImg} alt="Go Sushi Logo" style={{ height: '40px', width: '40px', borderRadius: '50%', marginBottom: '1rem', opacity: 0.8 }} />
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', letterSpacing: '1px' }}>&copy; 2026 GO SUSHI. THE ORIGINAL SUSHI BAR.</p>
      </footer>
    </div>
  );
}
