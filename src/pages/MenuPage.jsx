import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { MENU_DATA, CATEGORIES } from '../data/menuData';
import MenuCard from '../components/MenuCard';
import Footer from '../components/Footer';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = MENU_DATA.filter(item => {
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <section style={{ padding: '3rem 0 1rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: '2rem' }}>
            <span>Discover</span>
            <h2>Our Menu</h2>
            <div className="divider" />
          </div>

          {/* Search */}
          <div style={{ maxWidth: '480px', margin: '0 auto 2rem', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input className="input-field" placeholder="Search sushi, rolls, drinks..." value={search} onChange={e => setSearch(e.target.value)}
                   style={{ paddingLeft: '44px' }} />
          </div>

          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', paddingBottom: '2rem' }}>
            {CATEGORIES.map(cat => (
              <button key={cat} className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => setActiveCategory(cat)} style={{ textTransform: 'capitalize' }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '3rem 1.5rem 5rem' }}>
        {filtered.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '1.1rem', padding: '4rem 0' }}>No items found. Try a different search or category.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {filtered.map(item => <MenuCard key={item.id} item={item} />)}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
