import React from 'react';

export default function Hero() {
  return (
    <section style={{ padding: '4rem 0', textAlign: 'center', backgroundColor: 'var(--color-primary-light)', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)', marginBottom: '3rem' }}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Experience Premium Sushi</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
          Fresh ingredients, authentic taste, delivered right to your door. Get the best of the original sushi bar.
        </p>
        <button className="btn btn-primary" onClick={() => {
          const menu = document.getElementById('menu');
          if (menu) menu.scrollIntoView({ behavior: 'smooth' });
        }}>
          Order Now
        </button>
      </div>
    </section>
  );
}
