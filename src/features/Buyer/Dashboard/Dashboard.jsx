import React, { useState } from 'react';

const inquiries = [
  {
    title: 'Industrial Equipment Supplier',
    company: 'TechCorp Manufacturing',
    date: '2024-01-15',
    status: 'Pending',
    statusColor: '#6c757d', // secondary
    statusBg: '#f1f3f4',
  },
  {
    title: 'Software Development Services',
    company: 'Digital Solutions Inc',
    date: '2024-01-14',
    status: 'Responded',
    statusColor: '#6f42c1', // purple
    statusBg: '#f3e8ff',
  },
  {
    title: 'Marketing Consultation',
    company: 'Growth Partners LLC',
    date: '2024-01-13',
    status: 'In Progress',
    statusColor: '#0d6efd', // primary
    statusBg: '#e7f1ff',
  },
  {
    title: 'Cloud Infrastructure Setup',
    company: 'CloudTech Systems',
    date: '2024-01-12',
    status: 'Completed',
    statusColor: '#198754', // success
    statusBg: '#e9fbe7',
  },
];

const sellers = [
  {
    name: 'Sarah Johnson',
    company: 'Premium Tech Solutions',
    rating: 4.9,
    time: '2 hours ago',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Michael Chen',
    company: 'Global Manufacturing Co',
    rating: 4.8,
    time: '1 day ago',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Emma Wilson',
    company: 'Creative Design Studio',
    rating: 4.7,
    time: '3 days ago',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'David Rodriguez',
    company: 'Logistics Experts',
    rating: 4.6,
    time: '1 week ago',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
];

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    company: '',
    date: '',
    status: 'Pending',
    description: '',
    email: '',
  });
  const statusOptions = ['Pending', 'Responded', 'In Progress', 'Completed'];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic to save the inquiry
    setShowModal(false);
    setForm({ title: '', company: '', date: '', status: 'Pending', description: '', email: '' });
  };
  return (
    <div className="container py-4" style={{ maxWidth: '1200px', fontFamily: 'Inter, sans-serif' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0" style={{ fontSize: '1.05rem' }}>Dashboard Overview</h4>
        <button className="btn btn-primary px-4 py-2 fw-semibold" style={{ borderRadius: '8px', fontSize: '0.85rem', boxShadow: '0 2px 8px rgba(42,42,42,0.04)' }} onClick={() => setShowModal(true)}>Create New Inquiry</button>
      </div>
      {/* Modal Popup */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.18)', zIndex: 1050 }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 540, width: '100%' }}>
            <div className="modal-content" style={{ borderRadius: 16, boxShadow: '0 2px 16px rgba(42,42,42,0.10)' }}>
              <div className="modal-header d-flex justify-content-between align-items-center" style={{ padding: '18px 24px' }}>
                <h5 className="modal-title fw-bold" style={{ fontSize: '1.1rem' }}>Create New Inquiry</h5>
                <button type="button" className="btn btn-light" style={{ borderRadius: '50%', width: 36, height: 36, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e5e7eb', color: '#222' }} onClick={() => setShowModal(false)} aria-label="Close">&times;</button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body" style={{ padding: '18px 24px' }}>
                  <div className="mb-3">
                    <label className="form-label">Inquiry Title <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className="form-control" name="title" value={form.title} onChange={handleChange} required style={{ borderRadius: 8, fontSize: 14 }} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Company Name <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" className="form-control" name="company" value={form.company} onChange={handleChange} required style={{ borderRadius: 8, fontSize: 14 }} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Inquiry Date <span style={{ color: 'red' }}>*</span></label>
                    <input type="date" className="form-control" name="date" value={form.date} onChange={handleChange} required style={{ borderRadius: 8, fontSize: 14 }} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select" name="status" value={form.status} onChange={handleChange} style={{ borderRadius: 8, fontSize: 14 }}>
                      {statusOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={form.description} onChange={handleChange} rows={2} style={{ borderRadius: 8, fontSize: 14 }} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact Email</label>
                    <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} style={{ borderRadius: 8, fontSize: 14 }} />
                  </div>
                </div>
                <div className="modal-footer" style={{ padding: '18px 24px' }}>
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)} style={{ borderRadius: 8 }}>Cancel</button>
                  <button type="submit" className="btn btn-primary" style={{ borderRadius: 8 }}>Create Inquiry</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm border-0 h-100" style={{ minHeight: '110px' }}>
            <div className="card-body d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '54px', height: '54px' }}>
                <i className="bi bi-journal-text fs-3 text-primary"></i>
              </div>
              <div>
                <div className="fw-semibold fs-4" style={{ fontSize: '1rem' }}>24</div>
                <div className="text-muted small" style={{ fontSize: '0.75rem' }}>Total Inquiries</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0 h-100" style={{ minHeight: '110px' }}>
            <div className="card-body d-flex align-items-center">
              <div className="bg-success bg-opacity-10 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '54px', height: '54px' }}>
                <i className="bi bi-person-check fs-3 text-success"></i>
              </div>
              <div>
                <div className="fw-semibold fs-4" style={{ fontSize: '1rem' }}>12</div>
                <div className="text-muted small" style={{ fontSize: '0.75rem' }}>Active Sellers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0 h-100" style={{ minHeight: '110px' }}>
            <div className="card-body d-flex align-items-center">
              <div className="rounded-3 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '54px', height: '54px', background: '#f3e8ff' }}>
                <i className="bi bi-chat-dots fs-3" style={{ color: '#a259ff' }}></i>
              </div>
              <div>
                <div className="fw-semibold fs-4" style={{ fontSize: '1rem' }}>47</div>
                <div className="text-muted small" style={{ fontSize: '0.75rem' }}>Messages</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0 h-100" style={{ minHeight: '110px' }}>
            <div className="card-body d-flex align-items-center">
              <div className="bg-warning bg-opacity-10 rounded-3 p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '54px', height: '54px' }}>
                <i className="bi bi-check2-square fs-3 text-warning"></i>
              </div>
              <div>
                <div className="fw-semibold fs-4" style={{ fontSize: '1rem' }}>8</div>
                <div className="text-muted small" style={{ fontSize: '0.75rem' }}>Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100" style={{ minHeight: '340px' }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="fw-semibold" style={{ fontSize: '0.85rem' }}>Recent Inquiries</div>
                <a href="#" className="text-primary small fw-semibold" style={{ fontSize: '0.8rem' }}>View All</a>
              </div>
              <ul className="list-group list-group-flush">
                {inquiries.map((inq, idx) => (
                  <li key={idx} className="list-group-item px-0 py-3 border-0 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-semibold" style={{ fontSize: '0.82rem' }}>{inq.title}</div>
                        <div className="text-muted small" style={{ fontSize: '0.75rem' }}>{inq.company}</div>
                        <div className="text-muted small" style={{ fontSize: '0.7rem' }}>{inq.date}</div>
                      </div>
                      <span className="fw-normal" style={{ fontSize: '0.7em', background: inq.statusBg, color: inq.statusColor, borderRadius: '8px', padding: '4px 12px', fontWeight: 500 }}>{inq.status}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100" style={{ minHeight: '340px' }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="fw-semibold" style={{ fontSize: '0.85rem' }}>Recent Sellers Contacted</div>
                <a href="#" className="text-primary small fw-semibold" style={{ fontSize: '0.8rem' }}>View All</a>
              </div>
              <ul className="list-group list-group-flush">
                {sellers.map((seller, idx) => (
                  <li key={idx} className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex align-items-center">
                      <img src={seller.avatar} alt={seller.name} className="rounded-circle me-3" width="38" height="38" style={{ objectFit: 'cover', border: '2px solid #f1f1f1' }} />
                      <div className="flex-grow-1">
                        <div className="fw-semibold" style={{ fontSize: '0.82rem' }}>{seller.name}</div>
                        <div className="text-muted small" style={{ fontSize: '0.75rem' }}>{seller.company}</div>
                      </div>
                      <div className="text-end" style={{ minWidth: '70px' }}>
                        <div className="text-warning fw-semibold" style={{ fontSize: '0.8rem' }}>
                          <i className="bi bi-star-fill"></i> {seller.rating}
                        </div>
                        <div className="text-muted small" style={{ fontSize: '0.7rem' }}>{seller.time}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;