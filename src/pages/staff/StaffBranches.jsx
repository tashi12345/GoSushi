import React, { useState } from 'react';
import { useStaff } from '../../context/StaffContext';
import { Plus, MapPin, Phone, Building2, ToggleLeft, ToggleRight } from 'lucide-react';

export default function StaffBranches() {
  const { branches, dispatch } = useStaff();
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', city: 'Lahore', address: '', phone: '' });

  const handleAdd = (e) => {
    e.preventDefault();
    const newBranch = { id: `br-${Date.now()}`, ...form, status: 'active' };
    dispatch({ type: 'ADD_BRANCH', payload: newBranch });
    setForm({ name: '', city: 'Lahore', address: '', phone: '' });
    setShowForm(false);
  };

  return (
    <div className="animate-fade">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Branches</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{branches.length} total • {branches.filter(b => b.status === 'active').length} active</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}><Plus size={16} /> Add Branch</button>
      </div>

      {/* Add Branch Form */}
      {showForm && (
        <div className="stat-card" style={{ marginBottom: '2rem', animation: 'slideUp 0.3s ease' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem' }}>Add New Branch</h3>
          <form onSubmit={handleAdd}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Branch Name</label>
                <input className="input-field" placeholder="Go Sushi — Area" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>City</label>
                <input className="input-field" placeholder="Lahore" required value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Address</label>
                <input className="input-field" placeholder="Full address" required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Phone</label>
                <input className="input-field" placeholder="+92 3XX XXXXXXX" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="submit" className="btn btn-primary">Create Branch</button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Branches Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
        {branches.map(b => (
          <div key={b.id} className="stat-card" style={{ borderLeft: `4px solid ${b.status === 'active' ? 'var(--color-success)' : 'var(--color-text-muted)'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: 'var(--radius-md)', background: 'rgba(255,69,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{b.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{b.city}</p>
                </div>
              </div>
              <span className={`badge badge-${b.status === 'active' ? 'success' : 'danger'}`}>{b.status === 'active' ? '● Active' : '● Inactive'}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                <MapPin size={14} color="var(--color-text-muted)" /> {b.address}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                <Phone size={14} color="var(--color-text-muted)" /> {b.phone}
              </div>
            </div>

            <button className="btn btn-sm btn-secondary" style={{ width: '100%' }}
                    onClick={() => dispatch({ type: 'TOGGLE_BRANCH', payload: b.id })}>
              {b.status === 'active' ? <><ToggleRight size={16} color="var(--color-success)" /> Deactivate</> : <><ToggleLeft size={16} /> Activate</>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
