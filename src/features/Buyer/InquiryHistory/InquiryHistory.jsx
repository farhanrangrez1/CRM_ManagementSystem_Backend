import React, { useState } from 'react';
// import logo from '../../assets/logo.png'; // Uncomment if you have a logo

const dummyData = [
  {
    seller: 'Fashion Hub Ltd',
    product: 'Premium Cotton T-Shirts',
    quantity: '500 pieces',
    date: '2024-01-15',
    status: 'Pending',
    lastMessage: '2 hours ago',
  },
  {
    seller: 'TechGear Solutions',
    product: 'Wireless Bluetooth Headphones',
    quantity: '100 pieces',
    date: '2024-01-14',
    status: 'Responded',
    lastMessage: '1 day ago',
  },
  {
    seller: 'Natural Beauty Co',
    product: 'Organic Skincare Products',
    quantity: '200 pieces',
    date: '2024-01-12',
    status: 'In Progress',
    lastMessage: '3 days ago',
  },
  {
    seller: 'ElectroTech India',
    product: 'Smart Home LED Bulbs',
    quantity: '300 pieces',
    date: '2024-01-10',
    status: 'Completed',
    lastMessage: '5 days ago',
  },
  {
    seller: 'Craft Masters',
    product: 'Handcrafted Wooden Furniture',
    quantity: '10 pieces',
    date: '2024-01-08',
    status: 'Cancelled',
    lastMessage: '1 week ago',
  },
  {
    seller: 'Kitchen Pro Exports',
    product: 'Stainless Steel Kitchen Utensils',
    quantity: '150 pieces',
    date: '2024-01-05',
    status: 'Responded',
    lastMessage: '1 week ago',
  },
];

const statusBadge = {
  'Pending': 'warning',
  'Responded': 'primary',
  'In Progress': 'info',
  'Completed': 'success',
  'Cancelled': 'danger',
};

const statusOptions = ['All Status', ...Object.keys(statusBadge)];
const dateOptions = ['Last 30 Days', 'Last 7 Days', 'Last 24 Hours'];

function InquiryHistory() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All Status');
  const [date, setDate] = useState('Last 30 Days');
  const [page, setPage] = useState(1);
  const perPage = 5;

  // Filter logic
  const filtered = dummyData.filter(row => {
    const matchesSearch =
      row.seller.toLowerCase().includes(search.toLowerCase()) ||
      row.product.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === 'All Status' || row.status === status;
    // Date filter is static for now
    return matchesSearch && matchesStatus;
  });

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  return (
    <div className="container py-4" style={{ maxWidth: 1250, fontFamily: 'Inter, sans-serif' }}>
      {/* Logo (uncomment if you have a logo) */}
      {/* <img src={logo} alt="Logo" style={{ height: 40, marginBottom: 16 }} /> */}
      <h3 className="fw-bold mb-1" style={{ fontSize: '1.05rem', letterSpacing: '-1px' }}>Inquiry History</h3>
      <p className="text-muted mb-4" style={{ fontSize: '0.85rem' }}>Track all your product inquiries and communications</p>
      <div className="row mb-3 g-2 align-items-center" style={{ fontSize: '0.85rem' }}>
        <div className="col-md-6 col-lg-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search inquiries..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ height: 38, fontSize: '0.85rem' }}
          />
        </div>
        <div className="col-md-3 col-lg-3">
          <select className="form-select" value={status} onChange={e => setStatus(e.target.value)} style={{ height: 38, fontSize: '0.85rem' }}>
            {statusOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3 col-lg-3">
          <select className="form-select" value={date} onChange={e => setDate(e.target.value)} style={{ height: 38, fontSize: '0.85rem' }}>
            {dateOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="table-responsive bg-white rounded shadow-sm">
        <table className="table align-middle mb-0" style={{ fontSize: '0.85rem' }}>
          <thead className="table-light">
            <tr>
              <th style={{ fontWeight: 600, fontSize: '0.85rem' }}>Seller Name</th>
              <th style={{ fontWeight: 600, fontSize: '0.85rem' }}>Product</th>
              <th style={{ fontWeight: 600, fontSize: '0.85rem' }}>Quantity</th>
              <th style={{ fontWeight: 600, fontSize: '0.85rem' }}>Date</th>
              <th style={{ fontWeight: 600, fontSize: '0.85rem' }}>Status</th>
              <th style={{ fontWeight: 600, fontSize: '0.85rem' }}>Last Message</th>
              <th style={{ fontWeight: 600, fontSize: '0.85rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center text-muted py-4" style={{ fontSize: '0.85rem' }}>No inquiries found.</td>
              </tr>
            ) : (
              paginated.map((row, idx) => (
                <tr key={idx} style={{ height: 48 }}>
                  <td className="fw-semibold" style={{ fontWeight: 600, fontSize: '0.85rem' }}>{row.seller}</td>
                  <td style={{ fontSize: '0.85rem' }}>{row.product}</td>
                  <td style={{ fontSize: '0.85rem' }}>{row.quantity}</td>
                  <td style={{ fontSize: '0.85rem' }}>{row.date}</td>
                  <td>
                    <span className={`badge bg-${statusBadge[row.status]} bg-opacity-10 text-${statusBadge[row.status]} fw-semibold px-3 py-2`} style={{ fontSize: '0.8rem' }}>
                      {row.status}
                    </span>
                  </td>
                  <td className="text-muted" style={{ fontSize: '0.85rem' }}>{row.lastMessage}</td>
                  <td>
                    <button className="btn btn-primary btn-sm px-4 fw-semibold" style={{ fontSize: '0.85rem', height: 32 }}>Message</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-3" style={{ fontSize: '0.8rem' }}>
        <div className="text-muted small">
          Showing {filtered.length === 0 ? 0 : (page - 1) * perPage + 1} to {Math.min(page * perPage, filtered.length)} of {filtered.length} results
        </div>
        <nav>
          <ul className="pagination mb-0">
            <li className={`page-item${page === 1 ? ' disabled' : ''}`}>
              <button className="page-link d-flex align-items-center" onClick={() => setPage(page - 1)} disabled={page === 1} style={{ fontSize: '0.85rem' }}>
                <i className="bi bi-chevron-left"></i>
              </button>
            </li>
            {[...Array(totalPages)].map((_, i) => (
              <li key={i} className={`page-item${page === i + 1 ? ' active' : ''}`}>
                <button className="page-link" onClick={() => setPage(i + 1)} style={{ fontSize: '0.85rem' }}>{i + 1}</button>
              </li>
            ))}
            <li className={`page-item${page === totalPages || totalPages === 0 ? ' disabled' : ''}`}>
              <button className="page-link d-flex align-items-center" onClick={() => setPage(page + 1)} disabled={page === totalPages || totalPages === 0} style={{ fontSize: '0.85rem' }}>
                <i className="bi bi-chevron-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default InquiryHistory;