import React, { useState } from 'react';


// Add this at the top level of your app (e.g., in index.html):
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
// And in your main CSS (e.g., index.css):
// body { font-family: 'Inter', sans-serif; }

function GeneralSettings() {
  // State for toggles and fields
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [userRegistration, setUserRegistration] = useState(true);
  const [autoApprove, setAutoApprove] = useState(false);
  const [maxFileSize, setMaxFileSize] = useState('10');
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [allowedFileTypes, setAllowedFileTypes] = useState('jpg,png,pdf,doc,docx');
  const [activeTab, setActiveTab] = useState('systemSettings');
  // Security logs data
  const securityLogs = [
    {
      event: 'Failed Login Attempt',
      user: 'admin@example.com',
      ip: '192.168.1.108',
      time: '2024-01-15 14:30:25',
      status: 'Blocked',

    },

    {
      event: 'Password Changed',
      user: 'john.doe@example.com',
      ip: '18.0.8.45',
      time: '2024-01-15 13:45:12',
      status: 'Success',
    },
    {
      event: 'Two-Factor Authentication Enabled',
      user: 'sarah.wilson@example.com',
      ip: '172.16.8.78',
      time: '2024-01-15 12:20:33',
      status: 'Success',
    },
    {
      event: 'Suspicious Activity Detected',
      user: 'mike.johnson@example.com',
      ip: '203.0.113.42',
      time: '2024-01-15 11:15:44',
      status: 'Warning',
    },
    {
      event: 'API Key Generated',
      user: 'admin@example.com',
      ip: '192.168.1.108',
      time: '2024-01-15 10:30:55',
      status: 'Success',
    },
  ];
  const [eventFilter, setEventFilter] = useState('All Events');

  const handleReset = () => {
    setMaintenanceMode(false);
    setUserRegistration(true);
    setAutoApprove(false);
    setMaxFileSize('10');
    setSessionTimeout('30');
    setAllowedFileTypes('jpg,png,pdf,doc,docx');
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Add save logic here (API call, etc.)
    alert('Settings saved!');
  };

  // Custom tab labels for this page
  const navTabs = [
    { key: 'systemSettings', label: 'System Settings' }, // New tab
    { key: 'securityLogs', label: 'Security Logs' },
    // { key: 'security', label: 'Security' },
    // { key: 'authentication', label: 'Authentication' },
    // { key: 'monitoring', label: 'Monitoring' },
  ];

  return (
    <div className="container-fluid px-0" style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      {/* Modern Header */}
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
          <h2 style={{ fontWeight: 800, fontSize: 22, color: 'black', letterSpacing: 1, marginBottom: 6 }}>System Settings</h2>
          <div style={{ fontSize: 14, color: 'black', fontWeight: 500, letterSpacing: 0.5, marginBottom: 0 }}>Manage system configuration and security logs</div>
        </div>
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 8, background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', borderBottomLeftRadius: 18, borderBottomRightRadius: 18, opacity: 0.18 }} />
      </div>
      {/* Custom horizontal nav */}
      <nav className="border-bottom bg-white px-4" style={{ fontWeight: 500, fontSize: 13 }}>
        <ul className="nav nav-underline" style={{ gap: '2rem', height: 56, alignItems: 'center' }}>
          {navTabs.map(tab => (
            <li className="nav-item" key={tab.key}>
              <button
                className={`nav-link px-0${activeTab === tab.key ? ' active text-primary fw-semibold' : ' text-dark'}`}
                style={{ background: 'none', border: 'none', fontSize: 13, boxShadow: 'none' }}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* System Settings Tab Content */}
      {activeTab === 'systemSettings' && (
        <>
          <form className="bg-white p-4 rounded shadow-sm mb-4" style={{ maxWidth: 1100, margin: '0 auto', boxShadow: '0 2px 12px #0001', borderRadius: 18 }} onSubmit={handleSave}>
            <div className="row mb-3 align-items-center" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div>
                <div className="form-label fw-semibold mb-0" style={{ fontSize: 14 }}>Maintenance Mode</div>
                <div className="text-muted small mb-2" style={{ fontSize: 12 }}>Enable maintenance mode to restrict access</div>
                <label className="switch">
                  <input type="checkbox" checked={maintenanceMode} onChange={() => setMaintenanceMode(v => !v)} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div>
                <div className="form-label fw-semibold mb-0" style={{ fontSize: 14 }}>User Registration</div>
                <div className="text-muted small mb-2" style={{ fontSize: 12 }}>Allow new users to register</div>
                <label className="switch">
                  <input type="checkbox" checked={userRegistration} onChange={() => setUserRegistration(v => !v)} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div>
                <div className="form-label fw-semibold mb-0" style={{ fontSize: 14 }}>Auto-Approve Listings</div>
                <div className="text-muted small mb-2" style={{ fontSize: 12 }}>Automatically approve new domain listings</div>
                <label className="switch">
                  <input type="checkbox" checked={autoApprove} onChange={() => setAutoApprove(v => !v)} />
                  <span className="slider round"></span>
                </label>
              </div>
              <div style={{ display: 'flex', gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <label className="form-label" style={{ fontWeight: 600, fontSize: 12 }}>Max File Size (MB)</label>
                  <input type="number" className="form-control" style={{ borderRadius: 8, fontSize: 12 }} value={maxFileSize} onChange={e => setMaxFileSize(e.target.value)} min="1" />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="form-label" style={{ fontWeight: 600, fontSize: 12 }}>Session Timeout (minutes)</label>
                  <input type="number" className="form-control" style={{ borderRadius: 8, fontSize: 12 }} value={sessionTimeout} onChange={e => setSessionTimeout(e.target.value)} min="1" />
                </div>
              </div>
            </div>
            <div className="mb-3" style={{ maxWidth: 500 }}>
              <label className="form-label" style={{ fontWeight: 600, fontSize: 12 }}>Allowed File Types</label>
              <input type="text" className="form-control" style={{ borderRadius: 8, fontSize: 12 }} value={allowedFileTypes} onChange={e => setAllowedFileTypes(e.target.value)} />
              <div className="form-text" style={{ fontSize: 11 }}>Separate file extensions with commas</div>
            </div>
            <div className="d-flex justify-content-end gap-2 mt-4">
              <button type="button" className="btn btn-outline-secondary" style={{ borderRadius: 8, fontWeight: 600, fontSize: 12 }} onClick={handleReset}>Reset to Default</button>
              <button type="submit" className="btn btn-primary" style={{ borderRadius: 8, fontWeight: 600, fontSize: 12, background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', border: 'none' }}><i className="bi bi-save me-2"></i>Save Changes</button>
            </div>
          </form>
        </>
      )}

      {/* Security Logs Tab (only render this for now) */}
      {activeTab === 'securityLogs' && (
        <div className="d-flex justify-content-center align-items-start pt-4" style={{ minHeight: 'calc(100vh - 56px)' }}>
          <div className="bg-white rounded-3 shadow-sm p-4 w-100" style={{ maxWidth: 1100 }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-semibold mb-0" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15 }}>Security Logs</h5>
              <div className="d-flex gap-2 align-items-center">
                <select className="form-select" style={{ width: 140, height: 32, fontSize: 12 }} value={eventFilter} onChange={e => setEventFilter(e.target.value)}>
                  <option>All Events</option>
                  <option>Blocked</option>
                  <option>Success</option>
                  <option>Warning</option>
                </select>
                <button className="btn btn-primary d-flex align-items-center" style={{ height: 32, fontSize: 12, fontWeight: 500 }}>
                  <i className="bi bi-box-arrow-up me-2" style={{ fontSize: 13 }}></i>Export Logs
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table mb-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: 12 }}>
                <thead style={{ background: '#f8fafc' }}>
                  <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 12 }}>Event</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 12 }}>User</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 12 }}>IP Address</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 12 }}>Time</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 12 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {securityLogs.filter(log => eventFilter === 'All Events' || log.status === eventFilter)
                    .map((log, idx) => (
                      <tr key={idx} style={{ borderBottom: '1.5px solid #f1f5f9', fontSize: 12 }}>
                        <td style={{ padding: '12px 8px' }}>{log.event}</td>
                        <td style={{ padding: '12px 8px' }}>{log.user}</td>
                        <td style={{ padding: '12px 8px' }}>{log.ip}</td>
                        <td style={{ padding: '12px 8px' }}>{log.time}</td>
                        <td style={{ padding: '12px 8px' }}>
                          {log.status === 'Blocked' && <span className="badge rounded-pill" style={{ background: '#fee2e2', color: '#dc2626', fontWeight: 500, fontSize: 11, padding: '4px 12px' }}>Blocked</span>}
                          {log.status === 'Success' && <span className="badge rounded-pill" style={{ background: '#dcfce7', color: '#16a34a', fontWeight: 500, fontSize: 11, padding: '4px 12px' }}>Success</span>}
                          {log.status === 'Warning' && <span className="badge rounded-pill" style={{ background: '#fef9c3', color: '#b45309', fontWeight: 500, fontSize: 11, padding: '4px 12px' }}>Warning</span>}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      {/* <div className="bg-white p-4 rounded shadow-sm">
        <div className="row g-3">
          <div className="col-md-4">
            <button className="btn btn-success w-100">
              <i className="bi bi-hdd-stack me-2"></i>Backup Settings
            </button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-warning w-100 text-dark">
              <i className="bi bi-trash3 me-2"></i>Clear Cache
            </button>
          </div>
          <div className="col-md-4">
            <button className="btn btn-light w-100 text-primary border-primary">
              <i className="bi bi-shield-check me-2"></i>Run Security Check
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default GeneralSettings;