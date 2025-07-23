import React from 'react';
import { FaGlobe, FaCheckCircle, FaClock, FaTimesCircle, FaPen, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Sample data for domains
const domainData = [
  {
    name: 'enterprisecorp.com',
    owner: 'Enterprise Corp',
    email: 'admin@enterprisecorp.com',
    visits: '89.2K',
    status: 'Expired',
    type: 'Premium',
    expiry: '2023-05-18',
    revenue: '$22,340',
    price: '$399/year',
  },
  {
    name: 'globalsuppliers.org',
    owner: 'Global Suppliers Inc',
    email: 'info@globalsuppliers.org',
    visits: '12.1K',
    status: 'Pending',
    type: 'Premium',
    expiry: '2024-12-01',
    revenue: '$3,890',
    price: '$249/year',
  },
  {
    name: 'industrialsupply.net',
    owner: 'Industrial Manufacturing',
    email: 'contact@industrial.net',
    visits: '28.7K',
    status: 'Active',
    type: 'Standard',
    expiry: '2024-03-22',
    revenue: '$8,230',
    price: '$99/year',
  },
];

const statusBadge = (status) => {
  switch (status) {
    case 'Active':
      return <span className="badge bg-success">Active</span>;
    case 'Pending':
      return <span className="badge bg-warning text-dark">Pending</span>;
    case 'Expired':
      return <span className="badge bg-danger">Expired</span>;
    default:
      return <span className="badge bg-secondary">{status}</span>;
  }
};

const typeBadge = (type) => {
  switch (type) {
    case 'Premium':
      return <span className="badge bg-purple" style={{ backgroundColor: '#a259ff' }}>{type}</span>;
    case 'Standard':
      return <span className="badge bg-secondary">{type}</span>;
    default:
      return <span className="badge bg-light text-dark">{type}</span>;
  }
};

function DomainManagement() {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 12px', background: '#f7f9fb', minHeight: '100vh' }}>
      {/* Header */}
      <div className="mb-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3" style={{
        padding: '32px 0 18px 0',
        background: 'white',


        marginBottom: 24,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',

      }}>
        <div style={{ marginLeft: 32 }}>
          <h2 style={{ fontWeight: 800, fontSize: 22, color: 'black', letterSpacing: 1, marginBottom: 6 }}>Domain Management</h2>
          <nav aria-label="breadcrumb">
            <ol style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', gap: 8, fontSize: 12, color: '#6b7280' }}>
              <li>Admin</li>
              <li style={{ opacity: 0.7 }}>/ Domain Control</li>
              <li style={{ fontWeight: 600, color: '#6366f1' }}>/ Domain Names</li>
            </ol>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginRight: 32 }}>
          <Link to={"/admin/DomainCreate"}>
            <button style={{ background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 13, padding: '8px 18px', boxShadow: '0 2px 8px #6366f133', transition: '0.2s', cursor: 'pointer', minWidth: 100 }}>+ Add Domain</button>
          </Link>
          <button style={{ border: '1.5px solid #6366f1', color: '#6366f1', background: '#fff', borderRadius: 8, fontWeight: 600, fontSize: 13, padding: '8px 18px', transition: '0.2s', cursor: 'pointer', minWidth: 80 }}>Export</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 32 }}>
        <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #0001', padding: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <FaGlobe size={32} style={{ color: '#6366f1', background: '#eef2ff', borderRadius: 8, padding: 6 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>247</div>
            <div style={{ color: '#6b7280', fontSize: 17 }}>Total Domains</div>
            <div style={{ color: '#22c55e', fontSize: 17, marginTop: 2 }}>+12</div>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #0001', padding: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <FaCheckCircle size={32} style={{ color: '#22c55e', background: '#dcfce7', borderRadius: 8, padding: 6 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>189</div>
            <div style={{ color: '#6b7280', fontSize: 17 }}>Active Domains</div>
            <div style={{ color: '#22c55e', fontSize: 17, marginTop: 2 }}>+8</div>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #0001', padding: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <FaClock size={32} style={{ color: '#f59e42', background: '#fef9c3', borderRadius: 8, padding: 6 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>34</div>
            <div style={{ color: '#6b7280', fontSize: 17 }}>Pending Verification</div>
            <div style={{ color: '#ef4444', fontSize: 17, marginTop: 2 }}>-3</div>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #0001', padding: 22, display: 'flex', alignItems: 'center', gap: 16 }}>
          <FaTimesCircle size={32} style={{ color: '#ef4444', background: '#fee2e2', borderRadius: 8, padding: 6 }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>24</div>
            <div style={{ color: '#6b7280', fontSize: 17 }}>Expired Domains</div>
            <div style={{ color: '#22c55e', fontSize: 17, marginTop: 2 }}>+5</div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 8px #0001', marginBottom: 28, padding: 18 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' }}>
          <input type="text" placeholder="Search domains or owners..." style={{ flex: 2, minWidth: 180, padding: 8, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 12 }} />
          <select style={{ flex: 1, minWidth: 120, padding: 8, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 12 }}>
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Expired</option>
          </select>
          <select style={{ flex: 1, minWidth: 120, padding: 8, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 12 }}>
            <option>All Types</option>
            <option>Premium</option>
            <option>Standard</option>
          </select>
          <button style={{ flex: 1, minWidth: 120, border: '1.5px solid #6366f1', color: '#6366f1', background: '#f7f9fb', borderRadius: 8, fontWeight: 600, fontSize: 12, padding: '8px 0', transition: '0.2s', cursor: 'pointer' }}>Advanced</button>
        </div>
      </div>

      {/* Domain List Table */}
      <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px #0001', padding: 0, overflowX: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 24px 0 24px' }}>
          <h5 style={{ fontWeight: 700, margin: 0, fontSize: 14 }}>Domain List</h5>
          <span style={{ color: '#6b7280', fontSize: 12 }}>Showing {domainData.length} domains</span>
        </div>
        <div style={{ width: '100%', overflowX: 'auto', marginTop: 8 }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 900 }}>
            <thead>
              <tr style={{ background: '#f3f4f6', color: '#374151', fontWeight: 600 }}>
                <th style={{ padding: '10px 6px', borderTopLeftRadius: 10, fontSize: 12 }}> <input type="checkbox" /> </th>
                <th style={{ padding: '10px 6px', fontSize: 12 }}>Domain Name</th>
                <th style={{ padding: '10px 6px', fontSize: 12 }}>Owner</th>
                <th style={{ padding: '10px 6px', fontSize: 12 }}>Status</th>
                <th style={{ padding: '10px 6px', fontSize: 12 }}>Type</th>
                <th style={{ padding: '10px 6px', fontSize: 12 }}>Expiry Date</th>
                <th style={{ padding: '10px 6px', fontSize: 12 }}>Revenue</th>
                <th style={{ padding: '10px 6px', borderTopRightRadius: 10, fontSize: 12 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {domainData.map((d, idx) => (
                <tr key={idx} style={{ borderBottom: '1.5px solid #f3f4f6', transition: 'background 0.2s', cursor: 'pointer', background: idx % 2 === 0 ? '#fff' : '#f9fafb' }}>
                  <td style={{ padding: '8px 6px', textAlign: 'center' }}><input type="checkbox" /></td>
                  <td style={{ padding: '8px 6px', fontWeight: 600, fontSize: 13 }}>
                    <div>{d.name}</div>
                    <div style={{ color: '#6b7280', fontSize: 11 }}>{d.visits} visits/month</div>
                  </td>
                  <td style={{ padding: '8px 6px', fontSize: 13 }}>
                    <div>{d.owner}</div>
                    <div style={{ color: '#6b7280', fontSize: 11 }}>{d.email}</div>
                  </td>
                  <td style={{ padding: '8px 6px', fontSize: 12 }}>{statusBadge(d.status)}</td>
                  <td style={{ padding: '8px 6px', fontSize: 12 }}>{typeBadge(d.type)}</td>
                  <td style={{ padding: '8px 6px', fontSize: 13 }}>
                    <div>{d.expiry}</div>
                    <div style={{ color: '#6b7280', fontSize: 11 }}>{d.price}</div>
                  </td>
                  <td style={{ padding: '8px 6px', fontWeight: 700, color: '#22c55e', fontSize: 13 }}>{d.revenue}</td>
                  <td style={{ padding: '8px 6px' }}>
                    <button style={{ background: 'none', border: 'none', color: '#6366f1', fontSize: 15, marginRight: 8, cursor: 'pointer', borderRadius: 6, padding: 4, transition: 'background 0.2s' }} title="Edit"><FaPen /></button>
                    <button style={{ background: 'none', border: 'none', color: '#0ea5e9', fontSize: 15, cursor: 'pointer', borderRadius: 6, padding: 4, transition: 'background 0.2s' }} title="View"><FaEye /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DomainManagement;