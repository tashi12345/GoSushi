import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { LayoutDashboard, ClipboardList, Building2, LogOut, ChefHat, Menu, X } from 'lucide-react';
import { StaffProvider } from '../context/StaffContext';
import StaffDashboard from './staff/StaffDashboard';
import StaffOrders from './staff/StaffOrders';
import StaffBranches from './staff/StaffBranches';
import logoImg from '../assets/logo.png';

function StaffLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const links = [
    { to: '/staff', icon: <LayoutDashboard size={20} />, label: 'Dashboard', exact: true },
    { to: '/staff/orders', icon: <ClipboardList size={20} />, label: 'Orders' },
    { to: '/staff/branches', icon: <Building2 size={20} />, label: 'Branches' },
  ];

  const isActive = (path, exact) => exact ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Sidebar */}
      <aside style={{
        width: sidebarOpen ? '260px' : '72px', background: 'var(--color-surface)',
        borderRight: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column',
        transition: 'width var(--transition)', overflow: 'hidden', flexShrink: 0
      }}>
        {/* Logo */}
        <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--color-border)' }}>
          <img src={logoImg} alt="Go Sushi" style={{ height: '36px', width: '36px', borderRadius: '50%', border: '2px solid var(--color-primary)', flexShrink: 0 }} />
          {sidebarOpen && (
            <div>
              <h3 style={{ fontSize: '1rem', letterSpacing: '1px', lineHeight: 1 }}>GO SUSHI</h3>
              <p style={{ fontSize: '0.6rem', color: 'var(--color-primary)', letterSpacing: '2px' }}>STAFF PORTAL</p>
            </div>
          )}
        </div>

        {/* Nav Links */}
        <nav style={{ flex: 1, padding: '1rem 0.75rem' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              display: 'flex', alignItems: 'center', gap: '12px', padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)', marginBottom: '0.25rem', fontSize: '0.9rem', fontWeight: 500,
              color: isActive(l.to, l.exact) ? '#fff' : 'var(--color-text-secondary)',
              background: isActive(l.to, l.exact) ? 'rgba(255,69,0,0.12)' : 'transparent',
              borderLeft: isActive(l.to, l.exact) ? '3px solid var(--color-primary)' : '3px solid transparent',
              transition: 'all var(--transition)'
            }}>
              <span style={{ color: isActive(l.to, l.exact) ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>{l.icon}</span>
              {sidebarOpen && l.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div style={{ padding: '1rem 0.75rem', borderTop: '1px solid var(--color-border)' }}>
          <Link to="/" style={{
            display: 'flex', alignItems: 'center', gap: '12px', padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--color-text-muted)'
          }}>
            <LogOut size={18} />
            {sidebarOpen && 'Back to Website'}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top Bar */}
        <header style={{ height: '64px', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ color: 'var(--color-text-muted)' }}>{sidebarOpen ? <X size={20} /> : <Menu size={20} />}</button>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>
              {location.pathname === '/staff' && 'Dashboard'}
              {location.pathname === '/staff/orders' && 'Order Management'}
              {location.pathname === '/staff/branches' && 'Branch Management'}
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="badge badge-success">● Online</span>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem' }}>A</div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, overflow: 'auto', padding: '2rem' }}>
          <Routes>
            <Route index element={<StaffDashboard />} />
            <Route path="orders" element={<StaffOrders />} />
            <Route path="branches" element={<StaffBranches />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function StaffPortal() {
  return (
    <StaffProvider>
      <StaffLayout />
    </StaffProvider>
  );
}
