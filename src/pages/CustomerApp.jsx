import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuItem from '../components/MenuItem';

const MENU_DATA = [
  { id: 1, name: 'BYOB-Classic', price: 1279.20, category: 'Popular Items', description: 'Original sushi bar classic.' },
  { id: 2, name: 'Crunchy Maki', price: 1599, category: 'Popular Items', description: 'Crispy and delicious maki rolls.' },
  { id: 3, name: 'Dynamite California Roll', price: 2199, category: 'Popular Items', description: 'California roll with a spicy kick.' },
  { id: 4, name: 'Winter Wonders', price: 2719.20, category: 'Pau Pau Favorites', description: 'A seasonal special.' },
  { id: 5, name: 'Sushi Dream', price: 2719.20, category: 'Pau Pau Favorites', description: 'The ultimate sushi experience.' },
  { id: 6, name: 'SIX PERSON DEAL', price: 7199.20, category: 'Sushi Platter', description: 'Perfect for sharing with friends.' },
  { id: 7, name: 'Crispy Tempura Roll', price: 2199, category: 'Chef\'s Special', description: 'Perfectly fried crispy tempura roll.' }
];

export default function CustomerApp() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    // In MVP, we just add to cart. We will show a toast later if needed.
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header cartCount={cart.length} onCartClick={() => alert('Cart view coming soon for MVP checkout flow!')} />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <section id="menu" className="container" style={{ paddingBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--color-primary-light)', paddingBottom: '1rem' }}>
            Our Menu
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {MENU_DATA.map((item) => (
              <MenuItem key={item.id} item={item} onAdd={handleAddToCart} />
            ))}
          </div>
        </section>
      </main>
      <footer style={{ backgroundColor: 'var(--color-primary-light)', padding: '2rem 0', textAlign: 'center', marginTop: 'auto' }}>
        <p style={{ color: 'var(--color-text-muted)' }}>&copy; 2026 Go Sushi - The Original Sushi Bar. MVP Platform.</p>
      </footer>
    </div>
  );
}
