import React, { useState } from 'react';

function RequiredStar() {
  return <span style={{ color: 'red', marginLeft: 2 }}>*</span>;
}

function CreatUsers() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Buyer',
    status: 'Active',
    orders: '', // for Buyer
    joinDate: '',
    lastLogin: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle the form submission, e.g., send to backend
  };

  return (
    <div className="container py-5" style={{ maxWidth: 950 }}>
      <form className="bg-white p-4 rounded-4 shadow-sm border" onSubmit={handleSubmit} style={{ maxWidth: 600, margin: '0 auto' }}>
        <h3 className="mb-4 fw-bold t text-center" style={{ letterSpacing: 1 }}>Create New User</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">Full Name <RequiredStar /></label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter full name"
            value={form.name}
            onChange={handleChange}
            required
            autoFocus
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Email address <RequiredStar /></label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label fw-semibold">Phone <RequiredStar /></label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row g-2 mb-3">
          <div className="col-12 col-md-6">
            <label htmlFor="role" className="form-label fw-semibold">Role <RequiredStar /></label>
            <select
              className="form-select"
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="status" className="form-label fw-semibold">Status <RequiredStar /></label>
            <select
              className="form-select"
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
              required
            >
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>
        {form.role === 'Buyer' && (
          <div className="mb-3">
            <label htmlFor="orders" className="form-label fw-semibold">Orders</label>
            <input
              type="number"
              className="form-control"
              id="orders"
              name="orders"
              placeholder="Enter number of orders"
              value={form.orders}
              onChange={handleChange}
              min="0"
            />
          </div>
        )}
        <div className="row g-2 mb-3">
          <div className="col-12 col-md-6">
            <label htmlFor="joinDate" className="form-label fw-semibold">Join Date <RequiredStar /></label>
            <input
              type="date"
              className="form-control"
              id="joinDate"
              name="joinDate"
              value={form.joinDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="lastLogin" className="form-label fw-semibold">Last Login <RequiredStar /></label>
            <input
              type="date"
              className="form-control"
              id="lastLogin"
              name="lastLogin"
              value={form.lastLogin}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button id='btn' type="submit" className="btn w-100 fw-semibold" style={{ background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', color: '#fff', fontSize: '1.1rem', borderRadius: 8, boxShadow: '0 2px 8px rgba(99,102,241,0.08)' }}>Create User</button>
        {submitted && (
          <div id='btn' className="alert mt-3 text-success text-center fw-semibold" role="alert">
            User created successfully! (Demo only)
          </div>
        )}
      </form>
    </div>
  );
}

export default CreatUsers;