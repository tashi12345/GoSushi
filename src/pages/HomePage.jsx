import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Truck, ChefHat } from 'lucide-react';
import { MENU_DATA, HERO_IMAGE } from '../data/menuData';
import MenuCard from '../components/MenuCard';
import Footer from '../components/Footer';

export default function HomePage() {
  const featured = MENU_DATA.filter(i => ['Popular', 'Chef Special'].includes(i.category)).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', paddingTop: '64px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${HERO_IMAGE})`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.05)', animation: 'pulse 15s ease infinite alternate' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.7) 50%, rgba(0,114,198,0.15) 100%)' }} />
        
        {/* Floating Background Element */}
        <div style={{ position: 'absolute', right: '-10%', top: '20%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0,114,198,0.2) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 1 }} />

        <div className="container animate-slide-up" style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1.25rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '99px', marginBottom: '2rem' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-success)', boxShadow: '0 0 10px var(--color-success)' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.5px' }}>Now delivering across Lahore</span>
          </div>
          
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', marginBottom: '1.5rem', lineHeight: 1.05, letterSpacing: '-1.5px', textShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
            The Original<br /><span style={{ color: 'var(--color-primary)', textShadow: '0 0 40px rgba(0,114,198,0.5)' }}>Sushi Bar</span>
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', marginBottom: '3rem', maxWidth: '550px', lineHeight: 1.8 }}>
            Experience authentic Japanese cuisine, hand-crafted with premium ingredients and delivered fresh to your door across Lahore.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/menu" className="btn btn-primary btn-lg" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem' }}><ChefHat size={20} /> Explore Menu</Link>
            <Link to="/about" className="btn btn-outline btn-lg" style={{ fontSize: '1.1rem', padding: '1.1rem 2.5rem', backdropFilter: 'blur(5px)' }}>Our Story <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container" style={{ padding: '5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <Star size={28} />, title: 'Premium Quality', desc: 'Only the freshest fish and finest ingredients sourced daily.' },
            { icon: <ChefHat size={28} />, title: 'Master Chefs', desc: 'Trained in authentic Japanese sushi-making techniques.' },
            { icon: <Clock size={28} />, title: 'Fast Delivery', desc: 'Hot and fresh at your doorstep within 45 minutes.' },
            { icon: <Truck size={28} />, title: 'Free Delivery', desc: 'Complimentary delivery on all orders across Lahore.' },
          ].map((f, i) => (
            <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center', background: 'var(--color-surface)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0,114,198,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--color-primary)' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Menu */}
      <section className="container" style={{ paddingBottom: '5rem' }}>
        <div className="section-title">
          <span>Our Best Sellers</span>
          <h2>Featured Dishes</h2>
          <div className="divider" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {featured.map(item => <MenuCard key={item.id} item={item} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/menu" className="btn btn-outline btn-lg">View Full Menu <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${MENU_DATA[9].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,114,198,0.9) 0%, rgba(0,90,158,0.85) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '5rem 1.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Ready to Order?</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>Browse our full menu and get authentic Japanese cuisine delivered to your door!</p>
          <Link to="/menu" className="btn btn-lg" style={{ background: '#fff', color: 'var(--color-primary)', fontWeight: 700 }}>Order Now <ArrowRight size={18} /></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
