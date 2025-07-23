import React, { useState } from 'react';

const statusOptions = [
  { label: 'New', color: '#2563eb', bg: '#e6f0ff', border: '#b6d4fe' },
  { label: 'Contacted', color: '#b45309', bg: '#fef9c3', border: '#fde68a' },
  { label: 'Qualified', color: '#22c55e', bg: '#e6fbe6', border: '#bbf7d0' },
  { label: 'Proposal', color: '#a78bfa', bg: '#f3f0ff', border: '#ddd6fe' },
  { label: 'Negotiating', color: '#f59e42', bg: '#fff7e6', border: '#fde68a' },
  { label: 'ClosedWon', color: '#22c55e', bg: '#e6fbe6', border: '#bbf7d0' },
];

function LeadCreate() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: '',
    product: '',
    date: '',
    value: '',
    source: '',
    status: statusOptions[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (e) => {
    const selected = statusOptions.find((s) => s.label === e.target.value);
    setForm((prev) => ({ ...prev, status: selected }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the new lead object
    console.log({ ...form });
    alert('Lead object logged to console!');
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: '#f6f8fa' }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: 480, width: '100%', borderRadius: 18, background: '#fff', border: 'none' }}>
        <h2 className="mb-3 text-center" style={{ fontWeight: 700, color: '#27374D' }}>Create New Lead</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name <span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required style={{ borderRadius: 10, border: '1px solid #dde6ed', fontSize: 15 }} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
            <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required style={{ borderRadius: 10, border: '1px solid #dde6ed', fontSize: 15 }} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="phone">Phone <span style={{ color: 'red' }}>*</span></label>
            <input type="text" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} required style={{ borderRadius: 10, border: '1px solid #dde6ed', fontSize: 15 }} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="avatar">Avatar URL</label>
            <input type="url" className="form-control" id="avatar" name="avatar" value={form.avatar} onChange={handleChange} style={{ borderRadius: 10, border: '1px solid #dde6ed', fontSize: 15 }} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="product">Product Interest</label>
            <input type="text" className="form-control" id="product" name="product" value={form.product} onChange={handleChange} style={{ borderRadius: 10, border: '1px solid #dde6ed', fontSize: 15 }} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="date">Inquiry Date <span style={{ color: 'red' }}>*</span></label>
            <input type="date" className="form-control" id="date" name="date" value={form.date} onChange={handleChange} required style={{ borderRadius: 10, border: '1px solid #dde6ed', fontSize: 15 }} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="value">Value</label>
            <input type="text" className="form-control" id="value" name="value" value={form.value} onChange={handleChange} style={{ borderRadius: 10, border: '1px solid #dde6ed', fontSize: 15 }} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="source">Source</label>
            <input type="text" className="form-control" id="source" name="source" value={form.source} onChange={handleChange} style={{ borderRadius: 10, border: '1px solid #dde6ed', fontSize: 15 }} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="status">Status</label>
            <select className="form-select" id="status" name="status" value={form.status.label} onChange={handleStatusChange} style={{ borderRadius: 10, border: '1px solid #dde6ed', fontSize: 15 }}>
              {statusOptions.map((s) => (
                <option key={s.label} value={s.label}>{s.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn w-100" style={{ background: '#526D82', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 10, padding: '10px 0', boxShadow: '0 2px 8px 0 rgba(39,55,77,0.08)', border: 'none', transition: 'background 0.2s' }}>Create Lead</button>
        </form>
      </div>
    </div>
  );
}

export default LeadCreate;