import React from 'react';

const summaryCards = [
  { label: 'Total Transactions', value: '6', color: '#6366f1', bg: '#eef2ff' },
  { label: 'Completed', value: '3', color: '#22c55e', bg: '#ecfdf5' },
  { label: 'Pending', value: '1', color: '#f59e42', bg: '#fff7ed' },
  { label: 'Failed', value: '1', color: '#ef4444', bg: '#fef2f2' },
  { label: 'Total Revenue', value: '$2,397', color: '#7c3aed', bg: '#f3e8ff' },
  { label: 'Total Refunds', value: '$299', color: '#fbbf24', bg: '#fefce8' },
  { label: 'Processing Fees', value: '$71.91', color: '#0ea5e9', bg: '#e0f2fe' },
];

function PaymentLogs() {
  return (
    <div className="container py-4" style={{ background: '#f7f8fa', minHeight: '100vh' }}>
      {/* Header and Actions */}
      <div className="mb-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3"
        style={{
          padding: '32px 0 18px 0',
          background: 'white',

          marginBottom: 24,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',

        }}>
        <div style={{ marginLeft: 32 }}>
          <h3 className="fw-bold mb-1" style={{ fontWeight: 800, fontSize: 22, color: 'black', letterSpacing: 1, marginBottom: 6 }}>Payment Logs</h3>
          <div className="text-muted" style={{ fontSize: 14, color: 'black', fontWeight: 500, letterSpacing: 0.5, marginBottom: 0 }}>Monitor and manage all payment transactions</div>
        </div>
        <div className="d-flex gap-2 mt-2 mt-md-0">
          <button className="btn btn-primary shadow-sm" style={{ fontSize: 13 }}><i className="bi bi-download me-2"></i>Export All</button>
          <button className="btn btn-success shadow-sm" style={{ fontSize: 13 }}><i className="bi bi-arrow-repeat me-2"></i>Sync Payments</button>
        </div>
      </div>
      {/* Summary Cards - Modern Flex Layout */}
      <div className="d-flex flex-wrap gap-3 mb-4 justify-content-between align-items-stretch">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className="flex-grow-1 flex-shrink-0"
            style={{
              minWidth: '160px',
              maxWidth: '180px',
              background: card.bg,
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '22px 0',
              margin: '0',
            }}
          >
            <div className="text-muted mb-1" style={{ fontSize: '12px', fontWeight: 500 }}>{card.label}</div>
            <div className="fw-bold fs-3" style={{ color: card.color, fontSize: '15px' }}>{card.value}</div>
          </div>
        ))}
      </div>
      {/* Filters */}
      <div className="card mb-4 shadow-sm border-0 rounded-4">
        <div className="card-body py-3">
          <div className="row g-2 align-items-center">
            <div className="col-12 col-md-3">
              <input type="text" className="form-control rounded-3" placeholder="Search transactions..." style={{ fontSize: 12 }} />
            </div>
            <div className="col-6 col-md-2">
              <select className="form-select rounded-3" style={{ fontSize: 12 }}>
                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <select className="form-select rounded-3" style={{ fontSize: 12 }}>
                <option>All Types</option>
                <option>Subscription</option>
                <option>Domain</option>
              </select>
            </div>
            <div className="col-6 col-md-2">
              <select className="form-select rounded-3" style={{ fontSize: 12 }}>
                <option>All Methods</option>
                <option>Credit Card</option>
                <option>PayPal</option>
              </select>
            </div>
            <div className="col-6 col-md-3">
              <select className="form-select rounded-3" style={{ fontSize: 12 }}>
                <option>All Time</option>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Transactions Table */}
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body">
          <div className="fw-bold mb-3" style={{ fontSize: 13 }}>Payment Transactions (6)</div>
          <div className="table-responsive">
            <table className="table align-middle table-hover" style={{ borderRadius: '12px', overflow: 'hidden', fontSize: '12px' }}>
              <thead className="table-light">
                <tr style={{ verticalAlign: 'middle', fontSize: '12px' }}>
                  <th scope="col"><input type="checkbox" /></th>
                  <th scope="col">Transaction</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col">Status</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr style={{ fontSize: '12px' }}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="fw-semibold" style={{ fontSize: 13 }}>TXN_2024_001234</div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>Premium Plan - Monthly Subscription</div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>Ref: SUB_PREMIUM_001</div>
                  </td>
                  <td>
                    <div className="fw-semibold" style={{ fontSize: 13 }}>John Smith</div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>john.smith@email.com</div>
                  </td>
                  <td>
                    <div className="fw-bold text-success" style={{ fontSize: 13 }}>$299 <span className="text-muted small" style={{ fontSize: 11 }}>USD</span></div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>Fee: $8.97<br />Net: $290.03</div>
                  </td>
                  <td>
                    <div style={{ fontSize: 13 }}>Credit Card</div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>Stripe</div>
                  </td>
                  <td>
                    <span className="badge bg-success" style={{ fontSize: 11 }}>Completed</span>
                  </td>
                  <td>
                    <span className="badge bg-light text-primary border" style={{ fontSize: 11 }}>Subscription</span>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr style={{ fontSize: '12px' }}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="fw-semibold" style={{ fontSize: 13 }}>TXN_2024_001235</div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>Premium Domain Registration - techsolutions.com</div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>Ref: DOM_REG_002</div>
                  </td>
                  <td>
                    <div className="fw-semibold" style={{ fontSize: 13 }}>Sarah Johnson</div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>sarah.johnson@email.com</div>
                  </td>
                  <td>
                    <div className="fw-bold text-success" style={{ fontSize: 13 }}>$1,299 <span className="text-muted small" style={{ fontSize: 11 }}>USD</span></div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>Fee: $38.97<br />Net: $1,260.03</div>
                  </td>
                  <td>
                    <div style={{ fontSize: 13 }}>PayPal</div>
                    <div className="text-muted small" style={{ fontSize: 11 }}>PayPal</div>
                  </td>
                  <td>
                    <span className="badge bg-success" style={{ fontSize: 11 }}>Completed</span>
                  </td>
                  <td>
                    <span className="badge bg-light text-primary border" style={{ fontSize: 11 }}>Domain</span>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentLogs;