import React from 'react';
import { Award, Users, MapPin, Heart } from 'lucide-react';
import { HERO_IMAGE, MENU_DATA } from '../data/menuData';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '6rem 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${MENU_DATA[6].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,0.85), rgba(5,5,5,0.95))' }} />
        <div className="container animate-slide-up" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>Our Story</span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>About <span style={{ color: 'var(--color-primary)' }}>Go Sushi</span></h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Lahore's original sushi bar, bringing the art of Japanese cuisine to Pakistan since day one.</p>
        </div>
      </section>

      {/* Story */}
      <section className="container" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Who We Are</span>
            <h2 style={{ fontSize: '2.5rem', margin: '0.75rem 0 1.5rem' }}>Crafting Sushi with Passion</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Go Sushi was born from a simple belief: Lahore deserves world-class sushi. We set out to create an experience that combines authentic Japanese techniques with the bold flavors that our city loves.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Every roll is hand-crafted by trained chefs using the freshest ingredients. From our signature Crunchy Maki to the show-stopping Grand Platter, each dish is a celebration of flavor and artistry.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
              With three branches across Lahore and a passionate team, we're on a mission to make Go Sushi a household name across Pakistan.
            </p>
          </div>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img src={HERO_IMAGE} alt="Go Sushi food" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--color-surface)', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {[
              { icon: <MapPin size={28} />, value: '3', label: 'Branches in Lahore' },
              { icon: <Users size={28} />, value: '10,000+', label: 'Happy Customers' },
              { icon: <Award size={28} />, value: '22+', label: 'Menu Items' },
              { icon: <Heart size={28} />, value: '4.7★', label: 'Foodpanda Rating' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '2rem' }}>
                <div style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
                <h3 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0.25rem' }}>{s.value}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
