import React, { useState } from 'react';
import { TbUser, TbCheck, TbX, TbShoppingCart, TbSearch, TbRefresh, TbEye, TbPencil, TbTrash } from 'react-icons/tb';

const buyersData = [
  {
    initials: 'AT',
    name: 'Alex Thompson',
    email: 'alex.thompson@email.com',
    phone: '+1-555-0369',
    role: 'Buyer',
    status: 'Active',
    orders: 33,
    joinDate: 'Dec 20, 2023',
    lastLogin: 'Jan 19, 2024',
  },
  {
    initials: 'DJ',
    name: 'David Johnson',
    email: 'david.johnson@email.com',
    phone: '+1-555-0654',
    role: 'Buyer',
    status: 'Active',
    orders: 42,
    joinDate: 'Oct 5, 2023',
    lastLogin: 'Jan 17, 2024',
  },
  {
    initials: 'JW',
    name: 'James Wilson',
    email: 'james.wilson@email.com',
    phone: '+1-555-0852',
    role: 'Buyer',
    status: 'Active',
    orders: 67,
    joinDate: 'Sep 10, 2023',
    lastLogin: 'Jan 18, 2024',
  },
  // Add more users as needed
];

const summaryStats = [
  {
    icon: <TbUser size={28} style={{ color: '#5b6bfa' }} />, // blue
    label: 'Total Buyers',
    value: 8,
    iconBg: '#e6f0ff',
  },
  {
    icon: <TbCheck size={28} style={{ color: '#22c55e' }} />, // green
    label: 'Active Buyers',
    value: 6,
    iconBg: '#e6fbe6',
  },
  {
    icon: <TbX size={28} style={{ color: '#ef4444' }} />, // red
    label: 'Suspended',
    value: 2,
    iconBg: '#ffe6e6',
  },
  {
    icon: <TbShoppingCart size={28} style={{ color: '#a259ff' }} />, // purple
    label: 'Total Orders',
    value: 221,
    iconBg: '#f3e8ff',
  },
];

const statusBadge = (status) => (
  <span className={`badge rounded-pill ${status === 'Active' ? 'bg-success' : 'bg-danger'}`}>{status}</span>
);

const roleBadge = (role) => (
  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">{role}</span>
);

function Buyers() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All Status');
  const [sortBy, setSortBy] = useState('Name');
  const [order, setOrder] = useState('Ascending');

  // Filter logic
  const filteredBuyers = buyersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === 'All Status' || user.status === status;
    return matchesSearch && matchesStatus;
  });

  // Sort logic
  const sortedBuyers = [...filteredBuyers].sort((a, b) => {
    if (sortBy === 'Name') {
      return order === 'Ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === 'Orders') {
      return order === 'Ascending' ? a.orders - b.orders : b.orders - a.orders;
    }
    return 0;
  });

  return (
    <div className="container-fluid py-4 buyers-bg-main" style={{ background: '#f7f9fb', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{
        padding: '32px 0 18px 0',
        background: 'white',


        marginBottom: 24,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',

      }}>
        <div style={{ marginLeft: 32 }}>
          <h2 style={{ fontWeight: 800, fontSize: 28, color: 'black', letterSpacing: 1, marginBottom: 6 }}>Buyers Management</h2>
          <div style={{ fontSize: 16, color: 'black', fontWeight: 500, letterSpacing: 0.5, marginBottom: 0 }}>
            Overview of all buyers in the system
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 8, background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', borderBottomLeftRadius: 18, borderBottomRightRadius: 18, opacity: 0.18 }} />
      </div>
      {/* Summary Cards */}
      <div className="row g-4 mb-4 justify-content-center">
        {summaryStats.map((stat, idx) => (
          <div className="col-12 col-sm-6 col-md-3" key={stat.label}>
            <div className="card shadow-sm border-0 h-100 buyers-summary-card" style={{ borderRadius: 16, background: '#fff', transition: 'box-shadow 0.2s, transform 0.2s' }}>
              <div className="card-body d-flex align-items-center gap-3 p-3">
                <div className="d-flex align-items-center justify-content-center buyers-summary-icon" style={{ background: stat.iconBg, borderRadius: 12, width: 48, height: 48 }}>{stat.icon}</div>
                <div>
                  <div className="fw-bold fs-4 mb-1 buyers-summary-value" style={{ fontSize: 20 }}>{stat.value}</div>
                  <div className="text-muted small buyers-summary-label">{stat.label}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Filter & Search */}
      <div className="card mb-4 shadow-sm border-0 buyers-summary-card" style={{ borderRadius: 16 }}>
        <div className="card-body p-3 border buyers-summary-card">
          <div className="row align-items-end g-3">
            <div className="col-12 col-md-4">
              <label className="form-label fw-bold mb-2 buyers-search-label">Search Users</label>
              <div className="input-group shadow-sm buyers-search-group">
                <span className="input-group-text bg-transparent border-0 px-3 buyers-search-icon">
                  <TbSearch className="filter-icon" />
                </span>
                <input
                  type="text"
                  className="form-control border-0 px-3 buyers-search-input"
                  placeholder="Search by name or email..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ borderRadius: 8 }}
                />
              </div>
              <div className="small text-muted mt-2 buyers-search-count">Showing {filteredBuyers.length} users</div>
            </div>
            <div className="col-6 col-md-2">
              <label className="form-label fw-semibold mb-1">Status</label>
              <select className="form-select buyers-select" value={status} onChange={e => setStatus(e.target.value)} style={{ borderRadius: 8 }}>
                <option>All Status</option>
                <option>Active</option>
                <option>Suspended</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <label className="form-label fw-semibold mb-1">Sort By</label>
              <select className="form-select buyers-select" value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ borderRadius: 8 }}>
                <option>Name</option>
                <option>Orders</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <label className="form-label fw-semibold mb-1">Order</label>
              <select className="form-select buyers-select" value={order} onChange={e => setOrder(e.target.value)} style={{ borderRadius: 8 }}>
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </div>
            <div className="col-6 col-md-2 d-flex align-items-end justify-content-end">
              <button className="btn btn-outline-secondary d-flex align-items-center w-100 buyers-reset-btn shadow-sm" style={{ borderRadius: 8 }} onClick={() => { setSearch(''); setStatus('All Status'); setSortBy('Name'); setOrder('Ascending'); }}>
                <TbRefresh className="me-2" /> Reset Filters
              </button>
            </div>
          </div>
          <div className="d-flex gap-3 mt-3 small text-muted flex-wrap">
            <span>Active: 6</span>
            <span>Suspended: 2</span>
            <span>Buyers: 8</span>
            <span>Sellers: 0</span>
          </div>
        </div>
      </div>
      {/* Users List Table */}
      <div className="card shadow-sm border-0 buyers-summary-card" style={{ borderRadius: 16 }}>
        <div className="card-body p-3 border buyers-summary-card">
          <div className="fw-semibold mb-2 buyers-table-title" style={{ fontSize: 16 }}>Users List</div>
          <div className="text-muted small mb-3 buyers-table-count">Total {filteredBuyers.length} users found</div>
          <div className="table-responsive">
            <table className="table align-middle mb-0 buyers-table">
              <thead className="table-light">
                <tr>
                  <th style={{ minWidth: 200 }}>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Performance</th>
                  <th>Join Date</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedBuyers.map((user, idx) => (
                  <tr key={user.email} className="table-row-hover" style={{ transition: 'background 0.2s', cursor: 'pointer' }}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="avatar d-flex align-items-center justify-content-center buyers-avatar">{user.initials}</div>
                        <div>
                          <div className="fw-semibold buyers-user-name">{user.name}</div>
                          <div className="text-muted small">{user.email}</div>
                          <div className="text-muted small">{user.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td>{roleBadge(user.role)}</td>
                    <td>{statusBadge(user.status)}</td>
                    <td>
                      <span className="fw-semibold">{user.orders} Orders</span>
                      <div className="text-muted small">Total purchases</div>
                    </td>
                    <td>{user.joinDate}</td>
                    <td>{user.lastLogin}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="icon-btn view btn btn-sm btn-light border buyers-action-btn" title="View"><TbEye /></button>
                        <button className="icon-btn edit btn btn-sm btn-light border buyers-action-btn" title="Edit"><TbPencil /></button>
                        <button className="icon-btn delete btn btn-sm btn-light border buyers-action-btn" title="Delete"><TbTrash /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {sortedBuyers.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center text-muted">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Custom table row hover effect */}
      {/* <style>{`
        .table-row-hover:hover { background: #f4f6fb !important; }
      `}</style> */}
    </div>
  );
}

export default Buyers;