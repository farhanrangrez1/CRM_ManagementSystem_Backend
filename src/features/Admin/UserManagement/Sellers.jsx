import React, { useState } from 'react';
import { TbUser, TbCheck, TbX, TbCurrencyDollar, TbSearch, TbRefresh, TbEye, TbPencil, TbTrash } from 'react-icons/tb';
import './SellersManagement.css';

const sellersData = [
  {
    initials: 'AP',
    name: 'Anna Petrov',
    email: 'anna.petrov@email.com',
    phone: '+1-555-0507',
    role: 'Seller',
    status: 'Active',
    revenue: 38900,
    joinDate: 'Nov 3, 2023',
    lastLogin: 'Jan 20, 2024',
  },
  {
    initials: 'CM',
    name: 'Carlos Mendez',
    email: 'carlos.mendez@email.com',
    phone: '+1-555-0396',
    role: 'Seller',
    status: 'Suspended',
    revenue: 12700,
    joinDate: 'Jun 18, 2023',
    lastLogin: 'Jan 8, 2024',
  },
  {
    initials: 'ER',
    name: 'Emma Rodriguez',
    email: 'emma.rodriguez@email.com',
    phone: '+1-555-0321',
    role: 'Seller',
    status: 'Active',
    revenue: 28900,
    joinDate: 'Nov 22, 2023',
    lastLogin: 'Jan 20, 2024',
  },
  // Add more sellers as needed
];

const summaryStats = [
  {
    icon: <TbUser size={28} style={{ color: '#5b6bfa' }} />, // blue
    label: 'Total Sellers',
    value: 8,
    iconBg: '#e6f0ff',
  },
  {
    icon: <TbCheck size={28} style={{ color: '#22c55e' }} />, // green
    label: 'Active Sellers',
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
    icon: <TbCurrencyDollar size={28} style={{ color: '#a259ff' }} />, // purple
    label: 'Total Revenue',
    value: '$234,750',
    iconBg: '#f3e8ff',
  },
];

const statusBadge = (status) => (
  <span className={`badge rounded-pill ${status === 'Active' ? 'bg-success' : 'bg-danger'}`}>{status}</span>
);

const roleBadge = (role) => (
  <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">{role}</span>
);

function Sellers() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All Status');
  const [sortBy, setSortBy] = useState('Name');
  const [order, setOrder] = useState('Ascending');

  // Filter logic
  const filteredSellers = sellersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === 'All Status' || user.status === status;
    return matchesSearch && matchesStatus;
  });

  // Sort logic
  const sortedSellers = [...filteredSellers].sort((a, b) => {
    if (sortBy === 'Name') {
      return order === 'Ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === 'Revenue') {
      return order === 'Ascending' ? a.revenue - b.revenue : b.revenue - a.revenue;
    }
    return 0;
  });

  // Count for status
  const activeCount = sellersData.filter(u => u.status === 'Active').length;
  const suspendedCount = sellersData.filter(u => u.status === 'Suspended').length;
  const totalSellers = sellersData.length;

  return (
    <div className="sellers-management-root container-fluid py-4">
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
          <h2 style={{ fontWeight: 800, fontSize: 28, color: 'black', letterSpacing: 1, marginBottom: 6 }}>Sellers Management</h2>
          <div style={{ fontSize: 16, color: 'black', fontWeight: 500, letterSpacing: 0.5, marginBottom: 0 }}>
            Overview of all sellers in the system
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 8, background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', borderBottomLeftRadius: 18, borderBottomRightRadius: 18, opacity: 0.18 }} />
      </div>
      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        {summaryStats.map((stat, idx) => (
          <div className="col-md-3 col-6" key={stat.label}>
            <div className="sellers-management-summary-card">
              <div className="sellers-management-summary-icon" style={{ background: stat.iconBg }}>
                {stat.icon}
              </div>
              <div>
                <div className="sellers-management-summary-value">{stat.value}</div>
                <div className="sellers-management-summary-label">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Filter & Search */}
      <div className="sellers-management-filter-bar card mb-4 border-0">
        <div className="card-body p-0">
          <div className="row align-items-end g-3">
            <div className="col-md-4 position-relative">
              <label className="form-label fw-semibold">Search Users</label>
              <span className="sellers-management-search-icon"><TbSearch /></span>
              <input
                type="text"
                className="sellers-management-search-input"
                placeholder="Search by name or email..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ paddingLeft: 36 }}
              />
              <div className="small text-muted mt-1">Showing {filteredSellers.length} users</div>
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">Status</label>
              <select className="form-select" value={status} onChange={e => setStatus(e.target.value)}>
                <option>All Status</option>
                <option>Active</option>
                <option>Suspended</option>
              </select>
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">Sort By</label>
              <select className="form-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option>Name</option>
                <option>Revenue</option>
              </select>
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">Order</label>
              <select className="form-select" value={order} onChange={e => setOrder(e.target.value)}>
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </div>
            <div className="col-md-2 d-flex align-items-end justify-content-end">
              <button className="sellers-management-reset-btn" onClick={() => { setSearch(''); setStatus('All Status'); setSortBy('Name'); setOrder('Ascending'); }}>
                <TbRefresh className="reset-icon" /> Reset Filters
              </button>
            </div>
          </div>
          <div className="d-flex gap-3 mt-3 small text-muted">
            <span>Active: {activeCount}</span>
            <span>Suspended: {suspendedCount}</span>
            <span>Buyers: 0</span>
            <span>Sellers: {totalSellers}</span>
          </div>
        </div>
      </div>
      {/* Users List Table */}
      <div className="sellers-management-table-card card border-0">
        <div className="card-body">
          <div className="fw-semibold mb-2" style={{ fontWeight: 600 }}>Users List</div>
          <div className="text-muted small mb-3">Total {filteredSellers.length} users found</div>
          <div className="table-responsive">
            <table className="sellers-management-table table align-middle">
              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Performance</th>
                  <th>Join Date</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedSellers.map((user, idx) => (
                  <tr key={user.email}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="avatar">{user.initials}</div>
                        <div>
                          <div className="fw-semibold" style={{ fontWeight: 600 }}>{user.name}</div>
                          <div className="text-muted small">{user.email}</div>
                          <div className="text-muted small">{user.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td>{roleBadge(user.role)}</td>
                    <td>{statusBadge(user.status)}</td>
                    <td>
                      <span className="fw-semibold" style={{ fontWeight: 600 }}>
                        ${user.revenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      <div className="text-muted small">Total revenue</div>
                    </td>
                    <td>{user.joinDate}</td>
                    <td>{user.lastLogin}</td>
                    <td>
                      <div className="d-flex gap-2">
                        <button className="icon-btn view" title="View"><TbEye /></button>
                        <button className="icon-btn edit" title="Edit"><TbPencil /></button>
                        <button className="icon-btn delete" title="Delete"><TbTrash /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {sortedSellers.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center text-muted">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sellers;

