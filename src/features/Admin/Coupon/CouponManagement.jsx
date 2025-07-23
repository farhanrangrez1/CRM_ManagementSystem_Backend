import React from 'react'
import { Link } from 'react-router-dom'

function CouponManagement() {
  return (
    <div className="container py-4" style={{ background: '#f7f9fb', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
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
          <h2 style={{ fontWeight: 800, fontSize: 22, color: 'black', letterSpacing: 1, marginBottom: 6 }}>Coupon Management</h2>
          <div style={{ fontSize: 14, color: 'black', fontWeight: 500, letterSpacing: 0.5, marginBottom: 0 }}>
            Manage and monitor all discount coupons
          </div>
        </div>
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 8, background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', borderBottomLeftRadius: 18, borderBottomRightRadius: 18, opacity: 0.18 }} />
      </div>

      {/* Controls: Search, Status, Export, Filter */}
      <div className="d-flex flex-wrap gap-2 mb-4 align-items-center">
        <div className="flex-grow-1">
          <input type="text" className="form-control shadow-sm" placeholder="Search coupons..." style={{ borderRadius: 8, fontSize: 13 }} />
        </div>
        <select className="form-select w-auto shadow-sm" style={{ borderRadius: 8, fontSize: 13 }}>
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <button className="btn btn-outline-secondary shadow-sm" style={{ borderRadius: 8 }}>Export</button>
        <button className="btn btn-outline-secondary shadow-sm" style={{ borderRadius: 8 }}>Filter</button>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4 justify-content-center">
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-ticket fs-4 text-primary"></i>
                </div>
                <span className="badge bg-success ms-auto">+2 this month</span>
              </div>
              <h3 className="fw-bold mb-0" style={{ fontSize: 15 }}>6</h3>
              <div className="text-muted" style={{ fontSize: 13 }}>Total Coupons</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-check-circle fs-4 text-success"></i>
                </div>
                <span className="badge bg-success-subtle text-success ms-auto">+1 this week</span>
              </div>
              <h3 className="fw-bold mb-0" style={{ fontSize: 15 }}>4</h3>
              <div className="text-muted" style={{ fontSize: 13 }}>Active Coupons</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-currency-rupee fs-4 text-info"></i>
                </div>
                <span className="badge bg-info-subtle text-info ms-auto">+12% this month</span>
              </div>
              <h3 className="fw-bold mb-0" style={{ fontSize: 15 }}>₹45,670</h3>
              <div className="text-muted" style={{ fontSize: 13 }}>Total Savings</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-light rounded p-2 me-2">
                  <i className="bi bi-bar-chart-line fs-4 text-warning"></i>
                </div>
                <span className="badge bg-warning-subtle text-warning ms-auto">+5% improvement</span>
              </div>
              <h3 className="fw-bold mb-0" style={{ fontSize: 15 }}>68%</h3>
              <div className="text-muted" style={{ fontSize: 13 }}>Usage Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Coupon Table */}
      <div className="card shadow-sm border-0" style={{ borderRadius: 16 }}>
        <div className="card-body p-0">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th style={{ fontSize: 13 }}>Coupon Code</th>
                <th style={{ fontSize: 13 }}>Type & Value</th>
                <th style={{ fontSize: 13 }}>Usage</th>
                <th style={{ fontSize: 13 }}>Valid Period</th>
                <th style={{ fontSize: 13 }}>Status</th>
                <th style={{ fontSize: 13 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td>
                  <div className="fw-bold" style={{ fontSize: 13 }}>WELCOME20</div>
                  <div className="text-muted small" style={{ fontSize: 12 }}>Welcome discount for new users</div>
                </td>
                <td>
                  <div className="fw-bold" style={{ fontSize: 13 }}>20%</div>
                  <div className="text-muted small" style={{ fontSize: 12 }}>Percentage</div>
                </td>
                <td style={{ minWidth: 140 }}>
                  <div className="fw-bold" style={{ fontSize: 13 }}>347 / 1000 <span className="text-muted small" style={{ fontSize: 12 }}>(35%)</span></div>
                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar bg-primary" style={{ width: '35%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="small" style={{ fontSize: 12 }}>2024-01-01<br />to 2024-12-31</div>
                </td>
                <td>
                  <span className="badge bg-success" style={{ fontSize: 12 }}>Active</span>
                </td>
                <td>
                  <button className="btn btn-link text-secondary p-0 me-2" title="View"><i className="bi bi-eye"></i></button>
                  <button className="btn btn-link text-secondary p-0 me-2" title="Edit"><i className="bi bi-pencil"></i></button>
                  <button className="btn btn-link text-danger p-0" title="Delete"><i className="bi bi-trash"></i></button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td>
                  <div className="fw-bold" style={{ fontSize: 13 }}>SUMMER50</div>
                  <div className="text-muted small" style={{ fontSize: 12 }}>Summer special discount</div>
                </td>
                <td>
                  <div className="fw-bold" style={{ fontSize: 13 }}>₹50</div>
                  <div className="text-muted small" style={{ fontSize: 12 }}>Fixed Amount</div>
                </td>
                <td style={{ minWidth: 140 }}>
                  <div className="fw-bold" style={{ fontSize: 13 }}>234 / 500 <span className="text-muted small" style={{ fontSize: 12 }}>(47%)</span></div>
                  <div className="progress" style={{ height: 6 }}>
                    <div className="progress-bar bg-primary" style={{ width: '47%' }}></div>
                  </div>
                </td>
                <td>
                  <div className="small" style={{ fontSize: 12 }}>2024-06-01<br />to 2024-08-31</div>
                </td>
                <td>
                  <span className="badge bg-success" style={{ fontSize: 12 }}>Active</span>
                </td>
                <td>
                  <button className="btn btn-link text-secondary p-0 me-2" title="View"><i className="bi bi-eye"></i></button>
                  <button className="btn btn-link text-secondary p-0 me-2" title="Edit"><i className="bi bi-pencil"></i></button>
                  <button className="btn btn-link text-danger p-0" title="Delete"><i className="bi bi-trash"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ...rest of the UI will go here... */}
    </div>
  )
}

export default CouponManagement