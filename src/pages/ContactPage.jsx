import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, Send } from 'lucide-react';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div>
      <section style={{ padding: '4rem 0 2rem', textAlign: 'center' }}>
        <div className="container animate-slide-up">
          <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>Get in Touch</span>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact <span style={{ color: 'var(--color-primary)' }}>Us</span></h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', maxWidth: '500px', margin: '0 auto' }}>Have questions, feedback, or want to place a bulk order? We'd love to hear from you.</p>
        </div>
      </section>

      <section className="container" style={{ padding: '2rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {/* Contact Form */}
          <div className="card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Send us a Message</h3>
            <form onSubmit={e => { e.preventDefault(); alert('Thank you! We will get back to you soon.'); }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Full Name</label>
                <input className="input-field" placeholder="Your name" required />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Email</label>
                <input className="input-field" type="email" placeholder="your@email.com" required />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Phone</label>
                <input className="input-field" placeholder="+92 300 XXXXXXX" />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Message</label>
                <textarea className="input-field" rows={4} placeholder="How can we help?" required style={{ resize: 'vertical' }} />
              </div>
              <button className="btn btn-primary btn-lg" style={{ width: '100%' }}><Send size={16} /> Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: <Phone size={20} />, title: 'Phone', value: '+92 300 1234567', sub: 'Mon-Sun, 11am - 11pm' },
                { icon: <Mail size={20} />, title: 'Email', value: 'info@gosushi.pk', sub: 'We reply within 24 hours' },
                { icon: <Instagram size={20} />, title: 'Instagram', value: '@gosushipk', sub: 'Follow us for updates!' },
                { icon: <Clock size={20} />, title: 'Hours', value: '11:00 AM - 11:00 PM', sub: 'Open 7 days a week' },
              ].map((c, i) => (
                <div key={i} className="card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,69,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem' }}>{c.title}</h4>
                    <p style={{ color: 'var(--color-text)', fontSize: '0.95rem', fontWeight: 600 }}>{c.value}</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Branches */}
            <h3 style={{ fontSize: '1.3rem', margin: '2.5rem 0 1.5rem' }}>Our Branches</h3>
            {[
              { name: 'Gulberg III', addr: 'Main Boulevard, Gulberg III, Lahore' },
              { name: 'DHA Phase 3', addr: 'Y-Block, Phase 3, DHA, Lahore' },
              { name: 'Johar Town', addr: 'Block G1, Johar Town, Lahore' },
            ].map((b, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem', marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,69,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)', flexShrink: 0 }}><MapPin size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '0.95rem' }}>Go Sushi — {b.name}</h4>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{b.addr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
