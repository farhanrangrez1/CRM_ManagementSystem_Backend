import React from 'react';
import { Link } from 'react-router-dom';

const leads = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@techstart.com',
    phone: '+1 234-567-8901',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    product: 'Premium Software License',
    date: '2024-01-15',
    value: '$12,000',
    source: 'Website',
    status: { label: 'New', color: '#2563eb', bg: '#e6f0ff', border: '#b6d4fe' },
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'm.chen@digital.com',
    phone: '+1 234-567-8902',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    product: 'Enterprise Solution',
    date: '2024-01-14',
    value: '$25,000',
    source: 'Email Campaign',
    status: { label: 'Contacted', color: '#b45309', bg: '#fef9c3', border: '#fde68a' },
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    email: 'emily@growthlabs.com',
    phone: '+1 234-567-8903',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    product: 'Standard Package',
    date: '2024-01-13',
    value: '$8,500',
    source: 'Social Media',
    status: { label: 'Qualified', color: '#22c55e', bg: '#e6fbe6', border: '#bbf7d0' },
  },
  {
    id: 4,
    name: 'David Kim',
    email: 'david@innovation.com',
    phone: '+1 234-567-8904',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    product: 'Premium Software License',
    date: '2024-01-12',
    value: '$15,000',
    source: 'Referral',
    status: { label: 'Proposal', color: '#a78bfa', bg: '#f3f0ff', border: '#ddd6fe' },
  },
  {
    id: 5,
    name: 'Lisa Wang',
    email: 'lisa@futuretech.com',
    phone: '+1 234-567-8905',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    product: 'Enterprise Solution',
    date: '2024-01-11',
    value: '$32,000',
    source: 'Website',
    status: { label: 'Negotiating', color: '#f59e42', bg: '#fff7e6', border: '#fde68a' },
  },
  {
    id: 6,
    name: 'Robert Taylor',
    email: 'robert@startupco.com',
    phone: '+1 234-567-8906',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    product: 'Standard Package',
    date: '2024-01-10',
    value: '$6,500',
    source: 'Cold Email',
    status: { label: 'ClosedWon', color: '#22c55e', bg: '#e6fbe6', border: '#bbf7d0' },
  },
];

function LeadManager() {
  return (
    <div className="container py-1" style={{ maxWidth: 1300, fontFamily: 'Inter, Arial, sans-serif', background: 'transparent', minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-xl-11 col-xxl-10 mx-auto" style={{ paddingTop: 32, paddingBottom: 32 }}>
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-3" style={{ marginBottom: 24 }}>
            <div>
              <h2 className="fw-bold mb-0" style={{ fontSize: 20, color: '#222' }}>Lead Manager</h2>
              <div className="text-muted" style={{ fontSize: 12, marginTop: 2 }}>Track and manage your buyer leads</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <select className="form-select" style={{ width: 150, fontSize: 12, height: 38, borderRadius: 8, color: '#222', background: '#f7f8fa', border: '1px solid #e5e7eb', marginRight: 12 }}>
                <option>All Status</option>
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
                <option>Proposal</option>
                <option>Negotiating</option>
                <option>ClosedWon</option>
              </select>
              <Link to={"/seller/LeadCreate"} ><button className="btn" style={{ background: '#2563eb', color: '#fff', borderRadius: 8, padding: '6px 18px', fontWeight: 600, fontSize: 13, border: 'none', height: 36, boxShadow: '0 1px 4px #2563eb22' }}>+ Add Lead</button></Link>
            </div>
          </div>
          <div className="card shadow-sm border-0" style={{ borderRadius: 14, boxShadow: '0 2px 12px 0 rgba(16,30,54,0.06)' }}>
            <div className="table-responsive">
              <table className="table align-middle mb-0" style={{ background: '#fff', borderRadius: 14, overflow: 'hidden' }}>
                <thead style={{ background: '#f7f8fa' }}>
                  <tr style={{ borderBottom: '1.5px solid #e6e8ec' }}>
                    <th style={{ fontWeight: 600, color: '#7a869a', fontSize: 12, padding: '10px 8px' }}>Lead Info</th>
                    <th style={{ fontWeight: 600, color: '#7a869a', fontSize: 12, padding: '10px 8px' }}>Product Interest</th>
                    <th style={{ fontWeight: 600, color: '#7a869a', fontSize: 12, padding: '10px 8px' }}>Inquiry Date</th>
                    <th style={{ fontWeight: 600, color: '#7a869a', fontSize: 12, padding: '10px 8px' }}>Value</th>
                    <th style={{ fontWeight: 600, color: '#7a869a', fontSize: 12, padding: '10px 8px' }}>Source</th>
                    <th style={{ fontWeight: 600, color: '#7a869a', fontSize: 12, padding: '10px 8px' }}>Status</th>
                    <th style={{ fontWeight: 600, color: '#7a869a', fontSize: 12, padding: '10px 8px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} style={{ borderBottom: '1px solid #f0f1f3' }}>
                      <td style={{ padding: '10px 8px' }}>
                        <div className="d-flex align-items-center" style={{ gap: 10 }}>
                          <img src={lead.avatar} alt={lead.name} style={{ width: 32, height: 32, borderRadius: '50%', marginRight: 8, objectFit: 'cover', border: '2px solid #fff' }} />
                          <div>
                            <div style={{ fontWeight: 600, fontSize: 13, color: '#222' }}>{lead.name}</div>
                            <div style={{ color: '#7a869a', fontSize: 11 }}>{lead.email}</div>
                            <div style={{ color: '#7a869a', fontSize: 11 }}>{lead.phone}</div>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '10px 8px', fontSize: 12 }}>{lead.product}</td>
                      <td style={{ padding: '10px 8px', fontSize: 12 }}>{lead.date}</td>
                      <td style={{ padding: '10px 8px', fontWeight: 700, fontSize: 12 }}><span style={{ color: '#222' }}>{lead.value}</span></td>
                      <td style={{ padding: '10px 8px', fontSize: 12 }}>{lead.source}</td>
                      <td style={{ padding: '10px 8px' }}>
                        <span style={{ background: lead.status.bg, color: lead.status.color, border: `1px solid ${lead.status.border}`, borderRadius: 8, fontWeight: 500, fontSize: 11, padding: '3px 12px', display: 'inline-block' }}>{lead.status.label}</span>
                      </td>
                      <td style={{ padding: '10px 8px' }}>
                        <div className="d-flex align-items-center" style={{ gap: 8 }}>
                          <button className="icon-btn" style={{ background: 'none', border: 'none', color: '#6366f1', fontSize: 15 }} title="View"><i className="bi bi-eye"></i></button>
                          <button className="icon-btn" style={{ background: 'none', border: 'none', color: '#22c55e', fontSize: 15 }} title="Email"><i className="bi bi-envelope"></i></button>
                          <button className="icon-btn" style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: 15 }} title="Call"><i className="bi bi-telephone"></i></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadManager;