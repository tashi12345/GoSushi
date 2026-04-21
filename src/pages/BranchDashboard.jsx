import React, { useState } from 'react';
import { Package, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BranchDashboard() {
  const [orders, setOrders] = useState([
    { id: '1001', customer: 'Ali K.', items: ['BYOB-Classic', 'Mint Margarita'], status: 'Incoming', time: '12:30 PM', total: 1829.20 },
    { id: '1002', customer: 'Sara M.', items: ['Sushi Dream', 'Umami Sauce'], status: 'Preparing', time: '12:15 PM', total: 2779.20 },
    { id: '1003', customer: 'Ahmed', items: ['Crunchy Maki'], status: 'Completed', time: '11:45 AM', total: 1599.00 }
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => order.id === id ? { ...order, status: newStatus } : order));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-primary)' }}>
      <header className="glass-panel" style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', color: '#fff' }}>Branch Dashboard</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>Go Sushi - Gulberg 3</p>
        </div>
        <Link to="/" className="btn btn-outline">Back to Menu</Link>
      </header>
      
      <main className="container" style={{ padding: '2rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', color: '#ffc107' }}>
              <Package /> Incoming
            </h2>
            {orders.filter(o => o.status === 'Incoming').map(order => (
              <div key={order.id} style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>#{order.id} - {order.customer}</strong>
                  <span>{order.time}</span>
                </div>
                <div style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  {order.items.join(', ')}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>Rs. {order.total}</strong>
                  <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }} onClick={() => updateStatus(order.id, 'Preparing')}>
                    Accept
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', color: '#17a2b8' }}>
              <Clock /> Preparing
            </h2>
            {orders.filter(o => o.status === 'Preparing').map(order => (
              <div key={order.id} style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <strong>#{order.id} - {order.customer}</strong>
                  <span>{order.time}</span>
                </div>
                <div style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  {order.items.join(', ')}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong>Rs. {order.total}</strong>
                  <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }} onClick={() => updateStatus(order.id, 'Completed')}>
                    Mark Done
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem', opacity: 0.7 }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', color: '#28a745' }}>
              <CheckCircle /> Completed
            </h2>
            {orders.filter(o => o.status === 'Completed').map(order => (
              <div key={order.id} style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <strong>#{order.id} - {order.customer}</strong>
                  <span>{order.time}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
