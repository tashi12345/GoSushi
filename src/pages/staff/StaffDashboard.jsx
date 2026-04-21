import React from 'react';
import { ClipboardList, DollarSign, TrendingUp, Clock, ArrowUpRight } from 'lucide-react';
import { useStaff } from '../../context/StaffContext';
import { Link } from 'react-router-dom';

export default function StaffDashboard() {
  const { orders, branches } = useStaff();

  const incoming = orders.filter(o => o.status === 'incoming').length;
  const preparing = orders.filter(o => o.status === 'preparing').length;
  const ready = orders.filter(o => o.status === 'ready').length;
  const completed = orders.filter(o => o.status === 'completed').length;
  const totalRevenue = orders.filter(o => o.status === 'completed').reduce((s, o) => s + o.total, 0);
  const activeBranches = branches.filter(b => b.status === 'active').length;

  const stats = [
    { icon: <ClipboardList size={24} />, label: 'Total Orders', value: orders.length, color: 'var(--color-info)' },
    { icon: <DollarSign size={24} />, label: 'Revenue', value: `Rs. ${totalRevenue.toLocaleString()}`, color: 'var(--color-success)' },
    { icon: <Clock size={24} />, label: 'Active Orders', value: incoming + preparing + ready, color: 'var(--color-warning)' },
    { icon: <TrendingUp size={24} />, label: 'Active Branches', value: `${activeBranches}/${branches.length}`, color: 'var(--color-primary)' },
  ];

  const recentOrders = orders.slice(0, 5);

  return (
    <div className="animate-fade">
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        {stats.map((s, i) => (
          <div key={i} className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}>{s.icon}</div>
            <div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', fontWeight: 500 }}>{s.label}</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 800 }}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Pipeline */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { label: 'Incoming', count: incoming, color: 'var(--color-info)' },
          { label: 'Preparing', count: preparing, color: 'var(--color-warning)' },
          { label: 'Ready', count: ready, color: 'var(--color-success)' },
          { label: 'Completed', count: completed, color: 'var(--color-text-muted)' },
        ].map((p, i) => (
          <div key={i} className="stat-card" style={{ textAlign: 'center', borderTop: `3px solid ${p.color}` }}>
            <p style={{ fontSize: '2rem', fontWeight: 800, color: p.color }}>{p.count}</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{p.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="stat-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.1rem' }}>Recent Orders</h3>
          <Link to="/staff/orders" className="btn btn-sm btn-secondary">View All <ArrowUpRight size={14} /></Link>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              {['Order ID', 'Customer', 'Items', 'Total', 'Status'].map(h => (
                <th key={h} style={{ padding: '0.75rem', textAlign: 'left', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(o => (
              <tr key={o.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>{o.id}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>{o.customer}</td>
                <td style={{ padding: '0.75rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{o.items.length} item(s)</td>
                <td style={{ padding: '0.75rem', fontSize: '0.9rem', fontWeight: 600 }}>Rs. {o.total.toLocaleString()}</td>
                <td style={{ padding: '0.75rem' }}>
                  <span className={`badge badge-${o.status === 'incoming' ? 'info' : o.status === 'preparing' ? 'warning' : o.status === 'ready' ? 'success' : 'primary'}`}>
                    {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
