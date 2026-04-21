import React, { useState } from 'react';
import { useStaff } from '../../context/StaffContext';
import { ChevronRight, Eye, Clock, Package, CheckCircle, AlertCircle } from 'lucide-react';

const STATUS_FLOW = ['incoming', 'preparing', 'ready', 'completed'];
const STATUS_LABELS = { incoming: 'Incoming', preparing: 'Preparing', ready: 'Ready', completed: 'Completed' };
const STATUS_BADGE = { incoming: 'info', preparing: 'warning', ready: 'success', completed: 'primary' };
const STATUS_ICON = { incoming: <AlertCircle size={16} />, preparing: <Clock size={16} />, ready: <Package size={16} />, completed: <CheckCircle size={16} /> };

export default function StaffOrders() {
  const { orders, branches, dispatch } = useStaff();
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterBranch, setFilterBranch] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filtered = orders.filter(o => {
    if (filterStatus !== 'all' && o.status !== filterStatus) return false;
    if (filterBranch !== 'all' && o.branch !== filterBranch) return false;
    return true;
  });

  const nextStatus = (current) => {
    const idx = STATUS_FLOW.indexOf(current);
    return idx < STATUS_FLOW.length - 1 ? STATUS_FLOW[idx + 1] : null;
  };

  return (
    <div className="animate-fade">
      {/* Filters */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <select className="input-field" style={{ width: '200px' }} value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
          <option value="all">All Statuses</option>
          {STATUS_FLOW.map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
        </select>
        <select className="input-field" style={{ width: '220px' }} value={filterBranch} onChange={e => setFilterBranch(e.target.value)}>
          <option value="all">All Branches</option>
          {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
        </select>
        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginLeft: 'auto' }}>{filtered.length} order(s)</span>
      </div>

      {/* Orders Table */}
      <div className="stat-card" style={{ overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              {['Order ID', 'Customer', 'Branch', 'Items', 'Total', 'Status', 'Actions'].map(h => (
                <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(o => {
              const branch = branches.find(b => b.id === o.branch);
              const next = nextStatus(o.status);
              return (
                <tr key={o.id} style={{ borderBottom: '1px solid var(--color-border)', transition: 'background var(--transition)' }}
                    onMouseEnter={e => e.currentTarget.style.background='var(--color-surface-2)'}
                    onMouseLeave={e => e.currentTarget.style.background='transparent'}>
                  <td style={{ padding: '0.875rem 1rem', fontWeight: 700, fontSize: '0.9rem' }}>{o.id}</td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{o.customer}</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{o.phone}</p>
                  </td>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{branch?.name || o.branch}</td>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{o.items.length} item(s)</td>
                  <td style={{ padding: '0.875rem 1rem', fontWeight: 700, fontSize: '0.9rem' }}>Rs. {o.total.toLocaleString()}</td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <span className={`badge badge-${STATUS_BADGE[o.status]}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {STATUS_ICON[o.status]} {STATUS_LABELS[o.status]}
                    </span>
                  </td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn btn-sm btn-secondary" onClick={() => setSelectedOrder(o)}><Eye size={14} /></button>
                      {next && (
                        <button className="btn btn-sm btn-primary" onClick={() => dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { id: o.id, status: next } })}>
                          {STATUS_LABELS[next]} <ChevronRight size={14} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && <p style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)' }}>No orders match your filters.</p>}
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <>
          <div className="overlay" onClick={() => setSelectedOrder(null)} />
          <div style={{
            position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '520px', maxWidth: '90vw', maxHeight: '80vh', overflow: 'auto',
            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)', padding: '2rem', zIndex: 100,
            animation: 'slideUp 0.3s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem' }}>Order {selectedOrder.id}</h3>
              <span className={`badge badge-${STATUS_BADGE[selectedOrder.status]}`}>{STATUS_LABELS[selectedOrder.status]}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div><p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Customer</p><p style={{ fontWeight: 600 }}>{selectedOrder.customer}</p></div>
              <div><p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Phone</p><p style={{ fontWeight: 600 }}>{selectedOrder.phone}</p></div>
              <div style={{ gridColumn: 'span 2' }}><p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Address</p><p style={{ fontWeight: 600 }}>{selectedOrder.address}</p></div>
            </div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Items</h4>
            {selectedOrder.items.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1px solid var(--color-border)' }}>
                <span>{item.name} <span style={{ color: 'var(--color-text-muted)' }}>×{item.qty}</span></span>
                <span style={{ fontWeight: 700 }}>Rs. {item.price * item.qty}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0 0' }}>
              <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>Total</span>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-primary)' }}>Rs. {selectedOrder.total.toLocaleString()}</span>
            </div>
            <button className="btn btn-secondary" style={{ width: '100%', marginTop: '1.5rem' }} onClick={() => setSelectedOrder(null)}>Close</button>
          </div>
        </>
      )}
    </div>
  );
}
