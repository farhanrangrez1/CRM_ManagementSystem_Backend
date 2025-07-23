import React from "react";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function Nevbar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-white border-end"
      style={{ width: 260, minHeight: "100vh", fontFamily: 'Inter, sans-serif' }}
    >
      {/* Logo and Panel Title */}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
      >
        <span className="me-2" style={{ fontSize: 32, color: '#6366f1' }}>
          <MdOutlineAdminPanelSettings />
        </span>
        <span className="fs-5 fw-bold">Admin Panel</span>
      </a>
      <span className="text-muted small mb-4 ms-1">CRM Management System</span>
      <ul className="nav nav-pills flex-column mb-auto gap-1">
        <li className="nav-item">
          <a href="#" className="nav-link active rounded-3 d-flex align-items-center" aria-current="page" style={{ background: '#f1f5ff', color: '#6366f1', fontWeight: 500 }}>
            <FaThLarge className="me-2" /> Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaUsers className="me-2" /> User Management
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaCreditCard className="me-2" /> Subscription Plans
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaTags className="me-2" /> Coupons
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaGlobe className="me-2" /> Domain Control
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaReceipt className="me-2" /> Payment Logs
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaChartBar className="me-2" /> Reports & Analytics
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-dark rounded-3 d-flex align-items-center">
            <FaCog className="me-2" /> Admin Settings
          </a>
        </li>
      </ul>
      {/* User Info at Bottom */}
      <div className="mt-auto d-flex align-items-center gap-2 pt-3">
        <div style={{ width: 36, height: 36, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18 }}>
          A
        </div>
        <div>
          <div className="fw-semibold">Admin User</div>
          <div className="text-muted small">System Administrator</div>
        </div>
      </div>
    </div>
  );
}

export default Nevbar;




















// New nevbar alg wala nevbar 

import React, { useState } from "react";
import Nevbar from "../Layouts/Nevbar";
import Shidebar from "../Layouts/Shidebar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";


function Dashboard() {
  // State for calendar (date range selector)
  const [startDate, setStartDate] = useState(new Date());
  // Sidebar toggle state for mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Responsive Sidebar */}
      <Shidebar show={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Navbar with sidebar toggle */}
      <Nevbar onSidebarToggle={() => setSidebarOpen((v) => !v)} />
      {/* Inline responsive CSS for mobile tweaks */}
      <style>{`
        @media (max-width: 767.98px) {
          .card-body { padding: 1rem !important; }
          .card-header { padding: 0.75rem 1rem !important; font-size: 1rem; }
          h3, .fw-bold { font-size: 1.2rem !important; }
          .breadcrumb { font-size: 0.95rem; }
          .navbar-brand { font-size: 1.1rem !important; }
        }
        @media (max-width: 991.98px) {
          .d-lg-flex { display: none !important; }
        }
      `}</style>
      {/* Main Content */}
      <div className="container-fluid py-4 px-2 px-md-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Admin</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </nav>
            <h3 className="fw-bold mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>Dashboard Overview</h3>
          </div>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            {/* Calendar/Date Range Picker */}
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="form-select w-auto"
              customInput={<button className="btn btn-outline-secondary"><i className="bi bi-calendar me-2"></i>Last 7 Days</button>}
              dateFormat="MMMM d, yyyy"
            />
            <button className="btn btn-primary">
              <i className="bi bi-download me-2"></i>Export Report
            </button>
          </div>
        </div>
        {/* Dashboard Cards */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-3">
            <div className="card shadow-sm border-0" style={{ borderRadius: 18 }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-3 p-2 me-3">
                    <i className="bi bi-person fs-3"></i>
                  </div>
                  <span className="badge bg-success bg-opacity-25 text-success ms-auto">
                    <i className="bi bi-arrow-up me-1"></i>+12.5%
                  </span>
                </div>
                <h4 className="fw-bold mb-0">12,548</h4>
                <small className="text-muted">Total Users</small>
                <div className="text-muted small">Active platform users</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="card shadow-sm border-0" style={{ borderRadius: 18 }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-success bg-opacity-10 text-success rounded-3 p-2 me-3">
                    <i className="bi bi-briefcase fs-3"></i>
                  </div>
                  <span className="badge bg-success bg-opacity-25 text-success ms-auto">
                    <i className="bi bi-arrow-up me-1"></i>+8.2%
                  </span>
                </div>
                <h4 className="fw-bold mb-0">2,347</h4>
                <small className="text-muted">Active Sellers</small>
                <div className="text-muted small">Sellers with active listings</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="card shadow-sm border-0" style={{ borderRadius: 18 }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="rounded-3 p-2 me-3"
                    style={{
                      background: "#f3e8ff",
                      color: "#a259ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="bi bi-cash-stack fs-3"></i>
                  </div>
                  <span className="badge bg-success bg-opacity-25 text-success ms-auto">
                    <i className="bi bi-arrow-up me-1"></i>+15.8%
                  </span>
                </div>
                <h4 className="fw-bold mb-0">$489,230</h4>
                <small className="text-muted">Total Revenue</small>
                <div className="text-muted small">Monthly recurring revenue</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="card shadow-sm border-0" style={{ borderRadius: 18 }}>
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-warning bg-opacity-10 text-warning rounded-3 p-2 me-3">
                    <i className="bi bi-box-seam fs-3"></i>
                  </div>
                  <span className="badge bg-success bg-opacity-25 text-success ms-auto">
                    <i className="bi bi-arrow-up me-1"></i>+6.4%
                  </span>
                </div>
                <h4 className="fw-bold mb-0">8,924</h4>
                <small className="text-muted">Active Subscriptions</small>
                <div className="text-muted small">Premium subscriptions</div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Activity & Quick Actions */}
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: 18 }}>
              <div className="card-header bg-white d-flex justify-content-between align-items-center" style={{ borderRadius: 18 }}>
                <span className="fw-bold">Recent Activity</span>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge bg-primary bg-opacity-10 text-primary">Live</span>
                  <i className="bi bi-funnel text-muted" title="Filter"></i>
                  <i className="bi bi-arrow-down-up text-muted" title="Sort"></i>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-2 text-muted small">
                  <span className="text-success me-2">●</span>8 new activities today &nbsp;•&nbsp; Last updated 2 min ago
                </div>
                <div className="alert alert-success d-flex align-items-center mb-0" role="alert" style={{ borderRadius: 12 }}>
                  <i className="bi bi-person-plus me-2 fs-5"></i>
                  <div>
                    <strong>New User Registration</strong> <br />
                    Sarah Johnson joined as a buyer
                    <div className="mt-1 d-flex align-items-center gap-2">
                      <span className="badge bg-light text-dark border">Sarah Johnson</span>
                      <span className="text-muted small">2 minutes ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm border-0 mb-4" style={{ borderRadius: 18 }}>
              <div className="card-header bg-white fw-bold" style={{ borderRadius: 18 }}>
                Quick Actions
              </div>
              <div className="card-body d-flex flex-column gap-3">
                <button className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 py-3 rounded-3">
                  <i className="bi bi-person-plus fs-4"></i>
                  <div>
                    <div className="fw-semibold">Add New User</div>
                    <div className="text-muted small">Create new buyer or seller account</div>
                  </div>
                </button>
                <button className="btn btn-outline-success d-flex align-items-center justify-content-center gap-2 py-3 rounded-3">
                  <i className="bi bi-gear fs-4"></i>
                  <div>
                    <div className="fw-semibold">System Settings</div>
                    <div className="text-muted small">Configure platform settings</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;




import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const navLinks = [
  { icon: <FaThLarge />, label: "Dashboard" },
  {
    icon: <FaUsers />, label: "User Management", expandable: true, subItems: [
      { label: "All Users" },
      { label: "Add User" },
      { label: "Roles & Permissions" },
    ]
  },
  {
    icon: <FaCreditCard />, label: "Subscription Plans", expandable: true, subItems: [
      { label: "All Plans" },
      { label: "Add Plan" },
    ]
  },
  { icon: <FaTags />, label: "Coupons" },
  { icon: <FaGlobe />, label: "Domain Control" },
  { icon: <FaReceipt />, label: "Payment Logs" },
  { icon: <FaChartBar />, label: "Reports & Analytics" },
  { icon: <FaCog />, label: "Admin Settings" },
];

function Nevbar({ onSidebarToggle }) {
  const [active, setActive] = useState("Dashboard");
  const [expanded, setExpanded] = useState({});
  // State for calendar (date range selector)
  const [startDate, setStartDate] = useState(new Date());

  const handleNavClick = (label, expandable) => {
    setActive(label);
    if (expandable) {
      setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
    }
  };

  // Color palette
  const sidebarBg = '#f9fafb';
  const activeBg = '#4f46e5';
  const activeText = '#fff';
  const activeIcon = '#fff';
  const inactiveText = '#334155';
  const inactiveIcon = '#334155';
  const hoverBg = '#f1f5f9';
  const borderColor = '#e5e7eb';
  const activeBorder = '#6366f1';
  const dividerColor = '#e2e8f0';

  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3" style={{ fontFamily: 'Inter, sans-serif', minHeight: 72 }}>
        <div className="container-fluid">
          {/* Hamburger for mobile */}
          <button className="btn d-lg-none me-2" type="button" onClick={onSidebarToggle} aria-label="Toggle sidebar">
            <span style={{ fontSize: 24 }}>&#9776;</span>
          </button>
          <span className="navbar-brand fw-bold" style={{ fontSize: 20, color: '#222' }}>Admin Dashboard</span>
          <div className="d-flex align-items-center ms-auto gap-3">
            {/* Search Icon */}
            <button className="btn btn-link p-0" style={{ color: '#94a3b8', fontSize: 22 }}>
              <FiSearch />
            </button>
            {/* Notification Icon */}
            <div className="position-relative">
              <button className="btn btn-link p-0" style={{ color: '#94a3b8', fontSize: 24 }}>
                <IoMdNotificationsOutline />
              </button>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: 11, padding: '2px 6px', right: -6, top: 2 }}>3</span>
            </div>
            {/* Message Icon */}
            <div className="position-relative">
              <button className="btn btn-link p-0" style={{ color: '#94a3b8', fontSize: 22 }}>
                <IoMailOutline />
              </button>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" style={{ fontSize: 11, padding: '2px 6px', right: -6, top: 2 }}>7</span>
            </div>
            {/* User Info */}
            <div className="d-flex align-items-center gap-2 ms-2">
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: '#222' }}>Admin User</div>
                <div className="text-muted small" style={{ fontSize: 13 }}>System Administrator</div>
              </div>
              <div style={{ width: 36, height: 36, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, marginLeft: 6 }}>
                A
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Nevbar;



import React, { useState } from "react";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const navLinks = [
  { icon: <FaThLarge />, label: "Dashboard" },
  {
    icon: <FaUsers />, label: "User Management", expandable: true, subItems: [
      { label: "All Users" },
      { label: "Add User" },
      { label: "Roles & Permissions" },
    ]
  },
  {
    icon: <FaCreditCard />, label: "Subscription Plans", expandable: true, subItems: [
      { label: "All Plans" },
      { label: "Add Plan" },
    ]
  },
  { icon: <FaTags />, label: "Coupons" },
  { icon: <FaGlobe />, label: "Domain Control" },
  { icon: <FaReceipt />, label: "Payment Logs" },
  { icon: <FaChartBar />, label: "Reports & Analytics" },
  { icon: <FaCog />, label: "Admin Settings" },
];

function Shidebar({ show, onClose }) {
  const [active, setActive] = useState("Dashboard");
  const [expanded, setExpanded] = useState({});

  const handleNavClick = (label, expandable) => {
    setActive(label);
    if (expandable) {
      setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
    }
  };

  // Color palette
  const sidebarBg = '#f9fafb'; // very light gray
  const activeBg = '#4f46e5'; // lighter blue
  const activeText = '#fff';
  const activeIcon = '#fff';
  const inactiveText = '#334155'; // darker gray
  const inactiveIcon = '#334155';
  const hoverBg = '#f1f5f9'; // slightly darker gray
  const borderColor = '#e5e7eb';
  const activeBorder = '#6366f1'; // soft blue
  const dividerColor = '#e2e8f0';

  return (
    <>
      {/* Overlay for mobile */}
      {show && (
        <div className="d-lg-none position-fixed top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.3)', zIndex: 1040 }} onClick={onClose}></div>
      )}
      <div
        className={`d-none d-lg-flex flex-column flex-shrink-0 p-3 border-end ${show ? 'd-flex d-lg-flex position-fixed top-0 start-0 h-100' : ''}`}
        style={{
          width: 270,
          minHeight: "100vh",
          fontFamily: 'Inter, system-ui, sans-serif',
          background: sidebarBg,
          zIndex: show ? 1041 : 2,
          backgroundColor: "white",
          borderRight: `1px solid ${borderColor}`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          transition: 'left 0.3s',
          left: show ? 0 : '-270px',
        }}
      >
        {/* Logo and Panel Title */}
        <a
          href="/"
          className="d-flex align-items-center mb-4 text-decoration-none"
          style={{ gap: 14 }}
        >
          <span style={{ fontSize: 32, color: '#6366f1', display: 'flex', alignItems: 'center' }}>
            <MdOutlineAdminPanelSettings />
          </span>
          <span className="fs-5 fw-bold" style={{ color: '#222', letterSpacing: 0.2, fontWeight: 700, fontSize: 20 }}>Admin Panel</span>
        </a>
        <span className="text-muted small mb-4 ms-1" style={{ fontSize: 13, color: '#94a3b8', marginBottom: 18, display: 'block' }}>CRM Management System</span>
        <ul className="nav nav-pills flex-column mb-auto gap-1" style={{ marginTop: 8 }}>
          {navLinks.map((item, idx) => (
            <React.Fragment key={item.label}>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link d-flex align-items-center rounded-3 px-3 py-2"
                  style={{
                    background: active === item.label ? activeBg : 'transparent',
                    color: active === item.label ? activeText : inactiveText,
                    fontWeight: active === item.label ? 600 : 500,
                    fontSize: 16,
                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s',
                    gap: 14,
                    cursor: 'pointer',
                    justifyContent: 'flex-start',
                    borderRadius: 12,
                    marginBottom: 2,
                    boxShadow: active === item.label ? '0 2px 12px 0 rgba(79,70,229,0.10)' : 'none',
                    outline: active === item.label ? `1.5px solid #e0e7ff` : 'none',
                    borderLeft: active === item.label ? `4px solid ${activeBorder}` : '4px solid transparent',
                    paddingLeft: 20,
                    position: 'relative',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                  onClick={() => handleNavClick(item.label, item.expandable)}
                  onMouseOver={e => { if (active !== item.label) e.currentTarget.style.background = hoverBg; }}
                  onMouseOut={e => { if (active !== item.label) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="d-flex align-items-center" style={{ gap: 14, minWidth: 0 }}>
                    <span style={{ fontSize: 20, display: 'flex', alignItems: 'center', color: active === item.label ? activeIcon : inactiveIcon, minWidth: 24 }}>
                      {item.icon}
                    </span>
                    <span style={{ fontWeight: active === item.label ? 600 : 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                  </span>
                  {item.expandable && (
                    <span style={{ marginLeft: 'auto', color: active === item.label ? activeIcon : inactiveIcon }}>
                      {expanded[item.label] ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  )}
                </a>
              </li>
              {/* Sub-items for expandable menus */}
              {item.expandable && expanded[item.label] && (
                <ul style={{ listStyle: 'none', paddingLeft: 36, margin: 0 }}>
                  {item.subItems.map(sub => (
                    <li key={sub.label}>
                      <a
                        href="#"
                        className="nav-link d-flex align-items-center rounded-3 px-2 py-1"
                        style={{
                          background: active === sub.label ? activeBg : 'transparent',
                          color: active === sub.label ? activeText : inactiveText,
                          fontWeight: active === sub.label ? 600 : 500,
                          fontSize: 15,
                          marginBottom: 2,
                          transition: 'background 0.2s, color 0.2s',
                          cursor: 'pointer',
                          borderRadius: 8,
                          paddingLeft: 8,
                        }}
                        onClick={() => setActive(sub.label)}
                        onMouseOver={e => { if (active !== sub.label) e.currentTarget.style.background = hoverBg; }}
                        onMouseOut={e => { if (active !== sub.label) e.currentTarget.style.background = 'transparent'; }}
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* Divider above user info */}
        <div style={{ borderTop: `1.5px solid ${dividerColor}`, margin: '22px 0 0 0' }} />
        {/* User Info at Bottom */}
        <div className="mt-auto d-flex align-items-center gap-3 pt-4" style={{ minHeight: 60 }}>
          <div style={{ width: 38, height: 38, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)' }}>
            A
          </div>
          <div>
            <div className="fw-semibold" style={{ fontSize: 15, color: '#222', fontWeight: 600 }}>Admin User</div>
            <div className="text-muted small" style={{ fontSize: 13, color: '#94a3b8' }}>System Administrator</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shidebar;





import React, { useState } from 'react';
import { FaUser, FaCheckCircle, FaUserTie, FaUserTag, FaSearch, FaThList, FaThLarge } from 'react-icons/fa';

const usersData = [
  { initials: 'JA', name: 'John Anderson', email: 'john.anderson@email.com', role: 'Buyer', status: 'Active', joined: 'Jan 15, 2024', lastLogin: 'Jan 20, 2024', orders: 25 },
  { initials: 'SM', name: 'Sarah Mitchell', email: 'sarah.mitchell@email.com', role: 'Seller', status: 'Active', joined: 'Dec 10, 2023', lastLogin: 'Jan 19, 2024', revenue: '$15,750.00' },
  { initials: 'MC', name: 'Michael Chen', email: 'michael.chen@email.com', role: 'Buyer', status: 'Suspended', joined: 'Jan 8, 2024', lastLogin: 'Jan 18, 2024', orders: 8 },
  { initials: 'ER', name: 'Emma Rodriguez', email: 'emma.rodriguez@email.com', role: 'Seller', status: 'Active', joined: 'Nov 22, 2023', lastLogin: 'Jan 20, 2024', revenue: '$28,900.00' },
  { initials: 'DJ', name: 'David Johnson', email: 'david.johnson@email.com', role: 'Buyer', status: 'Active', joined: 'Oct 5, 2023', lastLogin: 'Jan 17, 2024', orders: 42 },
  { initials: 'LT', name: 'Lisa Thompson', email: 'lisa.thompson@email.com', role: 'Seller', status: 'Suspended', joined: 'Sep 18, 2023', lastLogin: 'Jan 10, 2024', revenue: '$8,200.00' },
  { initials: 'RW', name: 'Robert Wilson', email: 'robert.wilson@email.com', role: 'Buyer', status: 'Active', joined: 'Jan 12, 2024', lastLogin: 'Jan 19, 2024', orders: 15 },
  { initials: 'JL', name: 'Jennifer Lee', email: 'jennifer.lee@email.com', role: 'Seller', status: 'Active', joined: 'Aug 30, 2023', lastLogin: 'Jan 20, 2024', revenue: '$45,600.00' },
  { initials: 'MT', name: 'Mark Taylor', email: 'mark.taylor@email.com', role: 'Buyer', status: 'Active', joined: 'Nov 5, 2023', lastLogin: 'Jan 18, 2024', orders: 33 },
  { initials: 'JB', name: 'Jessica Brown', email: 'jessica.brown@email.com', role: 'Seller', status: 'Active', joined: 'Oct 20, 2023', lastLogin: 'Jan 16, 2024', revenue: '$22,400.00' },
  { initials: 'KM', name: 'Kevin Martinez', email: 'kevin.martinez@email.com', role: 'Buyer', status: 'Suspended', joined: 'Dec 28, 2023', lastLogin: 'Jan 15, 2024', orders: 12 },
  { initials: 'AD', name: 'Amanda Davis', email: 'amanda.davis@email.com', role: 'Seller', status: 'Active', joined: 'Sep 10, 2023', lastLogin: 'Jan 12, 2024', revenue: '$31,200.00' },
];

const summary = {
  total: 12,
  active: 9,
  buyers: 6,
  sellers: 6,
};

function AllUsers() {
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');

  const filteredUsers = usersData.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid py-4 px-2 px-md-4" style={{ fontFamily: 'Inter, sans-serif', background: '#f7f9fb', minHeight: '100vh' }}>
      {/* Header */}
      <div className="bg-white rounded-top-4 px-4 pt-4 pb-0 mb-0 shadow-sm d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div>
          <h3 className="fw-bold mb-1" style={{ fontSize: 28, color: '#222' }}>All Users</h3>
          <div className="text-muted" style={{ fontSize: 15 }}>Complete overview of all registered users</div>
        </div>
        <button className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2 rounded-3 fw-medium" style={{ fontSize: 15, background: '#2563eb', border: 'none' }}>
          <FaUser className="me-1" /> Manage Users
        </button>
      </div>
      {/* Summary Cards */}
      <div className="bg-white rounded-bottom-4 shadow-sm px-4 pt-3 pb-4 mb-4 row g-3" style={{ marginTop: '-2px' }}>
        <div className="col-6 col-md-3">
          <div className="d-flex flex-column align-items-center justify-content-center bg-light rounded-3 py-3 h-100" style={{ background: '#f7f9fb' }}>
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-2" style={{ background: '#eef2ff', color: '#2563eb', width: 38, height: 38 }}><FaUser /></div>
            <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.total}</div>
            <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Total Users</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="d-flex flex-column align-items-center justify-content-center bg-light rounded-3 py-3 h-100" style={{ background: '#f7f9fb' }}>
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-2" style={{ background: '#ecfdf5', color: '#22c55e', width: 38, height: 38 }}><FaCheckCircle /></div>
            <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.active}</div>
            <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Active Users</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="d-flex flex-column align-items-center justify-content-center bg-light rounded-3 py-3 h-100" style={{ background: '#f7f9fb' }}>
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-2" style={{ background: '#f3f0ff', color: '#a78bfa', width: 38, height: 38 }}><FaUserTie /></div>
            <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.buyers}</div>
            <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Buyers</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="d-flex flex-column align-items-center justify-content-center bg-light rounded-3 py-3 h-100" style={{ background: '#f7f9fb' }}>
            <div className="rounded-3 d-flex align-items-center justify-content-center mb-2" style={{ background: '#fff7ed', color: '#f59e42', width: 38, height: 38 }}><FaUserTag /></div>
            <div className="fw-bold" style={{ fontSize: 22, color: '#222' }}>{summary.sellers}</div>
            <div className="text-muted" style={{ fontSize: 15, fontWeight: 500 }}>Sellers</div>
          </div>
        </div>
      </div>
      {/* User Directory */}
      <div className="bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <div className="fw-semibold" style={{ fontSize: 18, color: '#222' }}>User Directory</div>
          <div className="d-flex align-items-center gap-2 position-relative">
            <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontSize: 16 }}><FaSearch /></span>
            <input
              type="text"
              className="form-control ps-5 py-2 rounded-3"
              style={{ minWidth: 220, fontSize: 15, background: '#f7f9fb', border: '1.5px solid #e5e7eb', color: '#222' }}
              placeholder="Search users..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className={`btn px-0 py-0 ms-2 rounded-3 border-0${view === 'grid' ? ' bg-primary text-white' : ' bg-light text-secondary'}`} style={{ width: 38, height: 38, fontSize: 18, border: '1.5px solid #e5e7eb' }} onClick={() => setView('grid')}><FaThLarge /></button>
            <button className={`btn px-0 py-0 ms-2 rounded-3 border-0${view === 'list' ? ' bg-primary text-white' : ' bg-light text-secondary'}`} style={{ width: 38, height: 38, fontSize: 18, border: '1.5px solid #e5e7eb' }} onClick={() => setView('list')}><FaThList /></button>
          </div>
        </div>
        {/* User Cards Grid */}
        {view === 'grid' ? (
          <div className="row g-3">
            {filteredUsers.map((user, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div className="bg-light rounded-3 shadow-sm p-3 h-100 d-flex flex-column gap-2" style={{ background: '#f7f9fb', minHeight: 170 }}>
                  <div className="d-flex align-items-center gap-3 mb-1">
                    <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 44, height: 44, background: '#6366f1', color: '#fff', fontWeight: 600, fontSize: 18 }}>{user.initials}</div>
                    <div>
                      <div className="fw-semibold" style={{ fontSize: 16, color: '#222' }}>{user.name}</div>
                      <div className="text-muted small" style={{ fontSize: 13 }}>{user.email}</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 mb-1">
                    <span className={`badge rounded-pill px-3 py-1 fw-semibold${user.role === 'Buyer' ? '' : ''}`} style={{ background: user.role === 'Buyer' ? '#eef2ff' : '#f3f0ff', color: user.role === 'Buyer' ? '#2563eb' : '#a78bfa', fontSize: 12 }}>{user.role}</span>
                    <span className={`badge rounded-pill px-3 py-1 fw-semibold${user.status === 'Active' ? '' : ''}`} style={{ background: user.status === 'Active' ? '#ecfdf5' : '#fef2f2', color: user.status === 'Active' ? '#22c55e' : '#f87171', fontSize: 12 }}>{user.status}</span>
                  </div>
                  <div className="d-flex flex-wrap gap-3" style={{ fontSize: 13, color: '#64748b' }}>
                    <div>Joined: <span className="fw-semibold text-dark">{user.joined}</span></div>
                    <div>Last Login: <span className="fw-semibold text-dark">{user.lastLogin}</span></div>
                    {user.orders !== undefined && <div>Orders: <span className="fw-semibold text-dark">{user.orders}</span></div>}
                    {user.revenue !== undefined && <div>Revenue: <span className="fw-semibold text-dark">{user.revenue}</span></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Last Login</th>
                  <th>Orders</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, idx) => (
                  <tr key={idx}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 36, height: 36, background: '#6366f1', color: '#fff', fontWeight: 600, fontSize: 16 }}>{user.initials}</div>
                        <div>
                          <div className="fw-semibold" style={{ color: '#222' }}>{user.name}</div>
                          <div className="text-muted small" style={{ fontSize: 13 }}>{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td><span className={`badge rounded-pill px-3 py-1 fw-semibold${user.role === 'Buyer' ? '' : ''}`} style={{ background: user.role === 'Buyer' ? '#eef2ff' : '#f3f0ff', color: user.role === 'Buyer' ? '#2563eb' : '#a78bfa', fontSize: 12 }}>{user.role}</span></td>
                    <td><span className={`badge rounded-pill px-3 py-1 fw-semibold${user.status === 'Active' ? '' : ''}`} style={{ background: user.status === 'Active' ? '#ecfdf5' : '#fef2f2', color: user.status === 'Active' ? '#22c55e' : '#f87171', fontSize: 12 }}>{user.status}</span></td>
                    <td>{user.joined}</td>
                    <td>{user.lastLogin}</td>
                    <td>{user.orders !== undefined ? user.orders : '-'}</td>
                    <td>{user.revenue !== undefined ? user.revenue : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllUsers;











import React, { useEffect, useState } from "react";
import { adminMenuItems } from "../Layouts/menuConfig"
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog, FaChevronDown, FaChevronUp } from "react-icons/fa";



const navLinks = [
  { icon: <FaThLarge />, label: "Dashboard", path: "/" },
  {
    icon: <FaUsers />, label: "User Management", expandable: true, path: "/admin/users", subItems: [
      { label: "All Users", path: "/allUsers" },
      { label: "Add User", path: "/buyers" },
      { label: "Roles & Permissions", path: "/sellers" },
    ]
  },
  {
    icon: <FaCreditCard />, label: "Subscription Plans", expandable: true, path: "/admin/plans", subItems: [
      { label: "All Plans", path: "/admin/plans/all" },
      { label: "Add Plan", path: "/admin/plans/add" },
    ]
  },
  { icon: <FaTags />, label: "Coupons", path: "/admin/coupons" },
  { icon: <FaGlobe />, label: "Domain Control", path: "/admin/domains" },
  { icon: <FaReceipt />, label: "Payment Logs", path: "/admin/payments" },
  { icon: <FaChartBar />, label: "Reports & Analytics", path: "/admin/reports" },
  { icon: <FaCog />, label: "Admin Settings", path: "/admin/settings" },
];
function Shidebar({ show, onClose }) {

  const [active, setActive] = useState("Dashboard");
  const [expanded, setExpanded] = useState({});

  const handleNavClick = (label, expandable) => {
    setActive(label);
    if (expandable) {
      setExpanded(prev => ({ ...prev, [label]: !prev[label] }));
    }
  };

  // Color palette
  const sidebarBg = '#f9fafb'; // very light gray
  const activeBg = '#4f46e5'; // lighter blue
  const activeText = '#fff';
  const activeIcon = '#fff';
  const inactiveText = '#334155'; // darker gray
  const inactiveIcon = '#334155';
  const hoverBg = '#f1f5f9'; // slightly darker gray
  const borderColor = '#e5e7eb';
  const activeBorder = '#6366f1'; // soft blue
  const dividerColor = '#e2e8f0';

  return (
    <>
      {/* Overlay for mobile */}
      {show && (
        <div className="d-lg-none position-fixed top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.3)', zIndex: 1040 }} onClick={onClose}></div>
      )}
      {/* Sidebar for mobile (slide-in) */}
      <div
        className={`sidebar-main d-lg-none position-fixed top-0 start-0 h-100 d-flex flex-column flex-shrink-0 p-3 border-end${show ? ' open' : ''}`}
        style={{
          width: 270,
          minHeight: "100vh",
          fontFamily: 'Inter, system-ui, sans-serif',
          background: sidebarBg,
          zIndex: show ? 1041 : 2,
          backgroundColor: "white",
          borderRight: `1px solid ${borderColor}`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          transform: show ? 'translateX(0)' : 'translateX(-100%)',
          left: 0,
        }}
      >
        {/* Close button for mobile */}
        <div className="d-lg-none d-flex justify-content-end mb-2">
          <button className="btn btn-link fs-3" style={{ color: '#222' }} onClick={onClose} aria-label="Close sidebar">&times;</button>
        </div>
        {/* Logo and Panel Title */}
        <a
          href="/"
          className="d-flex align-items-center mb-4 text-decoration-none"
          style={{ gap: 14 }}
        >
          <span style={{ fontSize: 32, color: '#6366f1', display: 'flex', alignItems: 'center' }}>
            <MdOutlineAdminPanelSettings />
          </span>
          <span className="fs-5 fw-bold" style={{ color: '#222', letterSpacing: 0.2, fontWeight: 700, fontSize: 20 }}>Admin Panel</span>
        </a>
        <span className="text-muted small mb-4 ms-1" style={{ fontSize: 13, color: '#94a3b8', marginBottom: 18, display: 'block' }}>CRM Management System</span>
        <ul className="nav nav-pills flex-column mb-auto gap-1" style={{ marginTop: 8 }}>
          {adminMenuItems.map((item, idx) => (
            <React.Fragment key={item.label}>
              <li className="nav-item">
                <Link
                  to={item.path}
                  className="nav-link d-flex align-items-center rounded-3 px-3 py-2"
                  style={{
                    background: active === item.label ? activeBg : 'transparent',
                    color: active === item.label ? activeText : inactiveText,
                    fontWeight: active === item.label ? 600 : 500,
                    fontSize: 16,
                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s',
                    gap: 14,
                    cursor: 'pointer',
                    justifyContent: 'flex-start',
                    borderRadius: 12,
                    marginBottom: 2,
                    boxShadow: active === item.label ? '0 2px 12px 0 rgba(79,70,229,0.10)' : 'none',
                    outline: active === item.label ? `1.5px solid #e0e7ff` : 'none',
                    borderLeft: active === item.label ? `4px solid ${activeBorder}` : '4px solid transparent',
                    paddingLeft: 20,
                    position: 'relative',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                  onClick={() => handleNavClick(item.label, item.expandable)}
                  onMouseOver={e => { if (active !== item.label) e.currentTarget.style.background = hoverBg; }}
                  onMouseOut={e => { if (active !== item.label) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="d-flex align-items-center" style={{ gap: 14, minWidth: 0 }}>
                    <span style={{ fontSize: 20, display: 'flex', alignItems: 'center', color: active === item.label ? activeIcon : inactiveIcon, minWidth: 24 }}>
                      {item.icon}
                    </span>
                    <span style={{ fontWeight: active === item.label ? 600 : 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                  </span>
                  {item.expandable && (
                    <span style={{ marginLeft: 'auto', color: active === item.label ? activeIcon : inactiveIcon }}>
                      {expanded[item.label] ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  )}
                </Link>
              </li>
              {/* Sub-items for expandable menus */}
              {item.expandable && expanded[item.label] && (
                <ul style={{ listStyle: 'none', paddingLeft: 36, margin: 0 }}>
                  {item.subItems.map(sub => (
                    <li key={sub.label}>
                      <Link
                        to={sub.path}
                        className="nav-link d-flex align-items-center rounded-3 px-2 py-1"
                        style={{
                          background: active === sub.label ? activeBg : 'transparent',
                          color: active === sub.label ? activeText : inactiveText,
                          fontWeight: active === sub.label ? 600 : 500,
                          fontSize: 15,
                          marginBottom: 2,
                          transition: 'background 0.2s, color 0.2s',
                          cursor: 'pointer',
                          borderRadius: 8,
                          paddingLeft: 8,
                        }}
                        onClick={() => setActive(sub.label)}
                        onMouseOver={e => { if (active !== sub.label) e.currentTarget.style.background = hoverBg; }}
                        onMouseOut={e => { if (active !== sub.label) e.currentTarget.style.background = 'transparent'; }}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* Divider above user info */}
        {/* User Info at Bottom */}
        <div className="mt-auto d-flex align-items-center gap-3 pt-4" style={{ minHeight: 60 }}>
          <div style={{ width: 38, height: 38, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)' }}>
            A
          </div>
          <div>
            <div className="fw-semibold" style={{ fontSize: 15, color: '#222', fontWeight: 600 }}>Admin User</div>
            <div className="text-muted small" style={{ fontSize: 13, color: '#94a3b8' }}>System Administrator</div>
          </div>
        </div>
      </div>
      {/* Sidebar for desktop (always visible) */}
      <div
        className="sidebar-main d-none d-lg-flex flex-column flex-shrink-0 p-3 border-end"
        style={{
          width: 270,
          minHeight: "100vh",
          fontFamily: 'Inter, system-ui, sans-serif',
          background: sidebarBg,
          zIndex: 2,
          backgroundColor: "white",
          borderRight: `1px solid ${borderColor}`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* Logo and Panel Title */}
        <a
          href="/"
          className="d-flex align-items-center mb-4 text-decoration-none"
          style={{ gap: 14 }}
        >
          <span style={{ fontSize: 32, color: '#6366f1', display: 'flex', alignItems: 'center' }}>
            <MdOutlineAdminPanelSettings />
          </span>
          <span className="fs-5 fw-bold" style={{ color: '#222', letterSpacing: 0.2, fontWeight: 700, fontSize: 20 }}>Admin Panel</span>
        </a>
        <span className="text-muted small mb-4 ms-1" style={{ fontSize: 13, color: '#94a3b8', marginBottom: 18, display: 'block' }}>CRM Management System</span>
        <ul className="nav nav-pills flex-column mb-auto gap-1" style={{ marginTop: 8 }}>
          {navLinks.map((item, idx) => (
            <React.Fragment key={item.label}>
              <li className="nav-item">
                <Link
                  to={item.path}
                  className="nav-link d-flex align-items-center rounded-3 px-3 py-2"
                  style={{
                    background: active === item.label ? activeBg : 'transparent',
                    color: active === item.label ? activeText : inactiveText,
                    fontWeight: active === item.label ? 600 : 500,
                    fontSize: 16,
                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s',
                    gap: 14,
                    cursor: 'pointer',
                    justifyContent: 'flex-start',
                    borderRadius: 12,
                    marginBottom: 2,
                    boxShadow: active === item.label ? '0 2px 12px 0 rgba(79,70,229,0.10)' : 'none',
                    outline: active === item.label ? `1.5px solid #e0e7ff` : 'none',
                    borderLeft: active === item.label ? `4px solid ${activeBorder}` : '4px solid transparent',
                    paddingLeft: 20,
                    position: 'relative',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                  onClick={() => handleNavClick(item.label, item.expandable)}
                  onMouseOver={e => { if (active !== item.label) e.currentTarget.style.background = hoverBg; }}
                  onMouseOut={e => { if (active !== item.label) e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="d-flex align-items-center" style={{ gap: 14, minWidth: 0 }}>
                    <span style={{ fontSize: 20, display: 'flex', alignItems: 'center', color: active === item.label ? activeIcon : inactiveIcon, minWidth: 24 }}>
                      {item.icon}
                    </span>
                    <span style={{ fontWeight: active === item.label ? 600 : 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                  </span>
                  {item.expandable && (
                    <span style={{ marginLeft: 'auto', color: active === item.label ? activeIcon : inactiveIcon }}>
                      {expanded[item.label] ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  )}
                </Link>
              </li>
              {/* Sub-items for expandable menus */}
              {item.expandable && expanded[item.label] && (
                <ul style={{ listStyle: 'none', paddingLeft: 36, margin: 0 }}>
                  {item.subItems.map(sub => (
                    <li key={sub.label}>
                      <Link
                        to={sub.path}
                        className="nav-link d-flex align-items-center rounded-3 px-2 py-1"
                        style={{
                          background: active === sub.label ? activeBg : 'transparent',
                          color: active === sub.label ? activeText : inactiveText,
                          fontWeight: active === sub.label ? 600 : 500,
                          fontSize: 15,
                          marginBottom: 2,
                          transition: 'background 0.2s, color 0.2s',
                          cursor: 'pointer',
                          borderRadius: 8,
                          paddingLeft: 8,
                        }}
                        onClick={() => setActive(sub.label)}
                        onMouseOver={e => { if (active !== sub.label) e.currentTarget.style.background = hoverBg; }}
                        onMouseOut={e => { if (active !== sub.label) e.currentTarget.style.background = 'transparent'; }}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* Divider above user info */}
        {/* User Info at Bottom */}
        <div className="mt-auto d-flex align-items-center gap-3 pt-4" style={{ minHeight: 60 }}>
          <div style={{ width: 38, height: 38, background: '#6366f1', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)' }}>
            A
          </div>
          <div>
            <div className="fw-semibold" style={{ fontSize: 15, color: '#222', fontWeight: 600 }}>Admin User</div>
            <div className="text-muted small" style={{ fontSize: 13, color: '#94a3b8' }}>System Administrator</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shidebar;








































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
  const [activeTab, setActiveTab] = useState('system');
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

  // Tab labels for settings
  const settingsTabs = [
    { key: 'general', label: 'General' },
    { key: 'email', label: 'Email Settings' },
    { key: 'system', label: 'System Settings' },
    { key: 'preferences', label: 'Preferences' },
  ];

  return (
    <div className="container-fluid px-0" style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Custom horizontal nav */}
      <nav className="border-bottom bg-white px-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16 }}>
        <ul className="nav nav-underline" style={{ gap: '2rem', height: 56, alignItems: 'center' }}>
          {settingsTabs.map(tab => (
            <li className="nav-item" key={tab.key}>
              <button
                className={`nav-link px-0${activeTab === tab.key ? ' active text-primary fw-semibold' : ' text-dark'}`}
                style={{ background: 'none', border: 'none', fontSize: 16, boxShadow: 'none' }}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Settings Tabs */}
      <div className="pt-4 d-flex justify-content-center" style={{ background: '#f8fafc' }}>
        <div className="w-100" style={{ maxWidth: 1100 }}>
          <ul className="nav nav-tabs align-items-center mb-4 px-3 pt-2" style={{ background: '#fff', borderRadius: 10, border: '1px solid #e5e7eb' }}>
            {settingsTabs.map(tab => (
              <li className="nav-item" key={tab.key}>
                <button
                  className={`nav-link px-3 py-2${activeTab === tab.key ? ' active fw-semibold' : ''}`}
                  style={{ border: 'none', background: 'none', fontSize: 16, color: activeTab === tab.key ? '#2563eb' : '#222', borderBottom: activeTab === tab.key ? '2.5px solid #2563eb' : '2.5px solid transparent' }}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          {/* System Settings Content */}
          {activeTab === 'system' && (
            <div className="bg-white rounded-3 shadow-sm p-4 mb-4" style={{ border: '1px solid #e5e7eb' }}>
              <form onSubmit={handleSave}>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="form-label fw-semibold mb-0">Maintenance Mode</div>
                    <div className="text-muted small">Enable maintenance mode to restrict access</div>
                  </div>
                  <div className="col-md-6 text-end">
                    <div className="form-check form-switch d-flex justify-content-end">
                      <input className="form-check-input" type="checkbox" id="maintenanceMode" checked={maintenanceMode} onChange={() => setMaintenanceMode(v => !v)} />
                    </div>
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="form-label fw-semibold mb-0">User Registration</div>
                    <div className="text-muted small">Allow new users to register</div>
                  </div>
                  <div className="col-md-6 text-end">
                    <div className="form-check form-switch d-flex justify-content-end">
                      <input className="form-check-input" type="checkbox" id="userRegistration" checked={userRegistration} onChange={() => setUserRegistration(v => !v)} />
                    </div>
                  </div>
                </div>
                <div className="row mb-3 align-items-center">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <div className="form-label fw-semibold mb-0">Auto-Approve Listings</div>
                    <div className="text-muted small">Automatically approve new domain listings</div>
                  </div>
                  <div className="col-md-6 text-end">
                    <div className="form-check form-switch d-flex justify-content-end">
                      <input className="form-check-input" type="checkbox" id="autoApprove" checked={autoApprove} onChange={() => setAutoApprove(v => !v)} />
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Max File Size (MB)</label>
                    <input type="number" className="form-control" value={maxFileSize} onChange={e => setMaxFileSize(e.target.value)} min="1" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Session Timeout (minutes)</label>
                    <input type="number" className="form-control" value={sessionTimeout} onChange={e => setSessionTimeout(e.target.value)} min="1" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Allowed File Types</label>
                  <input type="text" className="form-control" value={allowedFileTypes} onChange={e => setAllowedFileTypes(e.target.value)} />
                  <div className="form-text">Separate file extensions with commas</div>
                </div>
                <div className="d-flex justify-content-end gap-2">
                  <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>Reset to Default</button>
                  <button type="submit" className="btn btn-primary"><i className="bi bi-save me-2"></i>Save Changes</button>
                </div>
              </form>
            </div>
          )}

          {/* Quick Actions Section */}
          {activeTab === 'system' && (
            <div className="bg-white rounded-3 shadow-sm p-4" style={{ border: '1px solid #e5e7eb' }}>
              <div className="row g-3">
                <div className="col-md-4">
                  <button className="btn w-100" style={{ background: '#f0fdf4', color: '#16a34a', fontWeight: 500, fontSize: 16, border: 'none' }}>
                    <i className="bi bi-database-fill me-2"></i>Backup Settings
                  </button>
                </div>
                <div className="col-md-4">
                  <button className="btn w-100" style={{ background: '#fefce8', color: '#b45309', fontWeight: 500, fontSize: 16, border: 'none' }}>
                    <i className="bi bi-arrow-clockwise me-2"></i>Clear Cache
                  </button>
                </div>
                <div className="col-md-4">
                  <button className="btn w-100" style={{ background: '#f5f3ff', color: '#7c3aed', fontWeight: 500, fontSize: 16, border: 'none' }}>
                    <i className="bi bi-shield-check me-2"></i>Run Security Check
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Security Logs Tab (only render this for now) */}
      {activeTab === 'securityLogs' && (
        <div className="d-flex justify-content-center align-items-start pt-4" style={{ minHeight: 'calc(100vh - 56px)' }}>
          <div className="bg-white rounded-3 shadow-sm p-4 w-100" style={{ maxWidth: 1100 }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-semibold mb-0" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Security Logs</h5>
              <div className="d-flex gap-2 align-items-center">
                <select className="form-select" style={{ width: 140, height: 38, fontSize: 15 }} value={eventFilter} onChange={e => setEventFilter(e.target.value)}>
                  <option>All Events</option>
                  <option>Blocked</option>
                  <option>Success</option>
                  <option>Warning</option>
                </select>
                <button className="btn btn-primary d-flex align-items-center" style={{ height: 38, fontSize: 15, fontWeight: 500 }}>
                  <i className="bi bi-box-arrow-up me-2" style={{ fontSize: 17 }}></i>Export Logs
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table mb-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: 15 }}>
                <thead style={{ background: '#f8fafc' }}>
                  <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>Event</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>User</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>IP Address</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>Time</th>
                    <th className="fw-medium" style={{ color: '#6b7280', fontWeight: 500, fontSize: 15 }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {securityLogs.filter(log => eventFilter === 'All Events' || log.status === eventFilter)
                    .map((log, idx) => (
                      <tr key={idx} style={{ borderBottom: '1.5px solid #f1f5f9' }}>
                        <td style={{ padding: '12px 8px' }}>{log.event}</td>
                        <td style={{ padding: '12px 8px' }}>{log.user}</td>
                        <td style={{ padding: '12px 8px' }}>{log.ip}</td>
                        <td style={{ padding: '12px 8px' }}>{log.time}</td>
                        <td style={{ padding: '12px 8px' }}>
                          {log.status === 'Blocked' && <span className="badge rounded-pill" style={{ background: '#fee2e2', color: '#dc2626', fontWeight: 500, fontSize: 14, padding: '6px 16px' }}>Blocked</span>}
                          {log.status === 'Success' && <span className="badge rounded-pill" style={{ background: '#dcfce7', color: '#16a34a', fontWeight: 500, fontSize: 14, padding: '6px 16px' }}>Success</span>}
                          {log.status === 'Warning' && <span className="badge rounded-pill" style={{ background: '#fef9c3', color: '#b45309', fontWeight: 500, fontSize: 14, padding: '6px 16px' }}>Warning</span>}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GeneralSettings;






















message chat hai is code me
import React, { useState, useRef, useEffect } from 'react';

function SellerDashboard() {
  // Chat state
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
    { sender: 'user', text: 'Hi, I have a question about my sales.' },
    { sender: 'bot', text: 'Sure! Please ask your question.' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    // Optionally, add a bot reply after a delay
    setTimeout(() => {
      setMessages(msgs => [...msgs, { sender: 'bot', text: 'Thank you for your message! (Demo reply)' }]);
    }, 800);
  };

  return (
    <div className="container-fluid py-4" style={{ background: '#f8fafc', minHeight: '100vh', position: 'relative' }}>
      <div className="mb-3">
        <h2 className="fw-bold">Dashboard Overview</h2>
        <div className="text-muted">Monitor your sales performance and manage your business</div>
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
        <div></div>
        <div className="d-flex align-items-center gap-2">
          <select className="form-select form-select-sm" style={{ width: 120 }}>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>This Month</option>
          </select>
          <button className="btn btn-primary btn-sm">
            <i className="bi bi-download me-1"></i> Export Report
          </button>
        </div>
      </div>
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-primary text-white rounded-3 p-3 me-3">
                <i className="bi bi-person-plus fs-4"></i>
              </div>
              <div>
                <div className="fs-5 fw-bold">1,247</div>
                <div className="text-muted small">Total Leads</div>
                <div className="text-success small fw-semibold mt-1">
                  <i className="bi bi-arrow-up"></i> +12.5%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-success text-white rounded-3 p-3 me-3">
                <i className="bi bi-chat-dots fs-4"></i>
              </div>
              <div>
                <div className="fs-5 fw-bold">89</div>
                <div className="text-muted small">Active Inquiries</div>
                <div className="text-success small fw-semibold mt-1">
                  <i className="bi bi-arrow-up"></i> +8.2%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-purple text-white rounded-3 p-3 me-3" style={{ background: '#a259ff' }}>
                <i className="bi bi-bar-chart-line fs-4"></i>
              </div>
              <div>
                <div className="fs-5 fw-bold">$45,230</div>
                <div className="text-muted small">Monthly Sales</div>
                <div className="text-success small fw-semibold mt-1">
                  <i className="bi bi-arrow-up"></i> +15.3%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-warning text-white rounded-3 p-3 me-3">
                <i className="bi bi-percent fs-4"></i>
              </div>
              <div>
                <div className="fs-5 fw-bold">7.2%</div>
                <div className="text-muted small">Conversion Rate</div>
                <div className="text-danger small fw-semibold mt-1">
                  <i className="bi bi-arrow-down"></i> -2.1%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <span className="fw-semibold">Revenue Trend</span>
                <span className="ms-auto text-primary small"><i className="bi bi-dot"></i> Revenue</span>
              </div>
              {/* Chart Placeholder */}
              <div style={{ height: 200, background: 'linear-gradient(180deg, #e3eafe 60%, #fff 100%)', borderRadius: 8 }} className="d-flex align-items-end justify-content-center">
                <span className="text-muted">[Chart]</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex align-items-center mb-2">
                <span className="fw-semibold">Lead Generation</span>
                <span className="ms-auto text-success small"><i className="bi bi-dot"></i> Leads</span>
              </div>
              {/* Chart Placeholder */}
              <div style={{ height: 200, background: 'linear-gradient(180deg, #e3fcec 60%, #fff 100%)', borderRadius: 8 }} className="d-flex align-items-end justify-content-center">
                <span className="text-muted">[Chart]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <span className="fw-semibold">Recent Leads</span>
          <a href="#" className="small text-primary">View All Leads</a>
        </div>
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>Contact</th>
                <th>Company</th>
                <th>Status</th>
                <th>Value</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="rounded-circle me-2" width="40" height="40" />
                    <div>
                      <div className="fw-semibold">Sarah Johnson</div>
                      <div className="text-muted small">sarah@techstart.com</div>
                    </div>
                  </div>
                </td>
                <td>TechStart Inc.</td>
                <td><span className="badge bg-primary">new</span></td>
                <td className="fw-semibold">$12,000</td>
                <td>2 min ago</td>
                <td>
                  <button className="btn btn-light btn-sm me-1"><i className="bi bi-eye"></i></button>
                  <button className="btn btn-light btn-sm"><i className="bi bi-three-dots"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Chat Widget */}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1050, width: 340, maxWidth: '90vw' }}>
        <div className="card shadow-lg">
          <div className="card-header bg-primary text-white py-2 px-3 d-flex align-items-center justify-content-between">
            <span className="fw-semibold">Chat Support</span>
            <span className="badge bg-light text-primary">Online</span>
          </div>
          <div className="card-body p-2" style={{ height: 260, overflowY: 'auto', background: '#f4f7fa' }}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div className={`p-2 rounded-3 ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'}`} style={{ maxWidth: '80%' }}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form className="card-footer d-flex p-2 gap-2 bg-white" onSubmit={handleSend} autoComplete="off">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <button className="btn btn-primary btn-sm" type="submit">
              <i className="bi bi-send"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;





















import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from "./features/Auth/Login";
import PageNotfound from './features/Auth/PageNotfound';
// import Register from "./features/Auth/Register";
// import ForgotPassword from './features/Auth/ForgotPassword';
// import ResetPassword from './features/Auth/ResetPassword';
import AdminRouters from './Routers/AdminRouters';
import SellerRouters from './Routers/SellerRouters';
import ProtectedRoute from "./features/Auth/ProtectedRoute";


function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/Signup" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/resetPassword" element={<ResetPassword/>} /> */}
        {/* Admin Routes */}
        <Route path='/admin/*' element={<ProtectedRoute>
          <AdminRouters />
        </ProtectedRoute>} />
        <Route path='/seller/*' element={<ProtectedRoute>
          <SellerRouters />
        </ProtectedRoute>} />
        <Route path='/*' element={
          <PageNotfound />
        } />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;













import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Nevbar from "./features/Layouts/Nevbar";
import Shidebar from "./features/Layouts/Shidebar";
import Dashboard from "./features/Admin/Dashboard";
import AllUsers from "./features/Admin/UserManagement/AllUsers";
import Buyers from "./features/Admin/UserManagement/Buyers";
import Sellers from "./features/Admin/UserManagement/Sellers";
import CouponManagement from "./features/Admin/Coupon/CouponManagement";
import DomainManagement from "./features/Admin/Coupon/DomainManagement";
import PaymentLogs from "./features/Admin/Payment/PaymentLogs";
import AllPlans from "./features/Admin/Plans/AllPlans";
import GeneralSettings from "./features/Admin/Settings/GeneralSettings";
import Reportanalatics from "./features/Admin/Reports/Reportanalatics";


import SellerDashboard from "./features/Seller/Dashboard/SellerDashboard";
import LeadManager from "./features/Seller/Lead/LeadManager";
import ProductCatalog from "./features/Seller/Product/ProductCatalog";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen((open) => !open);
  const handleSidebarClose = () => setSidebarOpen(false);
  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f7f9fb" }}>
      <Shidebar show={sidebarOpen} onClose={handleSidebarClose} />
      <div className="flex-grow-1">
        <Nevbar onSidebarToggle={handleSidebarToggle} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/allUsers" element={<AllUsers />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/CouponManagement" element={<CouponManagement />} />
          <Route path="/domain" element={<DomainManagement />} />
          <Route path="/Payment" element={<PaymentLogs />} />
          <Route path="/AllPlans" element={<AllPlans />} />
          <Route path="/reports" element={<Reportanalatics />} />
          <Route path="/settings" element={<GeneralSettings />} />

          <Route path="/Seller/Dashboard" element={<SellerDashboard />} />
          <Route path="/Seller/LeadManager" element={<LeadManager />} />
          <Route path="/Seller/project" element={<ProductCatalog />} />
          {/* 404 ‑‑ optional fallback */}
          <Route path="*" element={<h2 className="p-4">Page not found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;













import React from 'react';

const inquiries = [
  {
    title: 'Industrial Equipment Supplier',
    company: 'TechCorp Manufacturing',
    date: '2024-01-15',
    status: 'Pending',
    statusColor: 'secondary',
  },
  {
    title: 'Software Development Services',
    company: 'Digital Solutions Inc',
    date: '2024-01-14',
    status: 'Responded',
    statusColor: 'info',
  },
  {
    title: 'Marketing Consultation',
    company: 'Growth Partners LLC',
    date: '2024-01-13',
    status: 'In Progress',
    statusColor: 'primary',
  },
  {
    title: 'Cloud Infrastructure Setup',
    company: 'CloudTech Systems',
    date: '2024-01-12',
    status: 'Completed',
    statusColor: 'success',
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
  return (
    <div className="container py-4">
      <h4 className="fw-bold mb-4">Dashboard Overview</h4>
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 rounded-3 p-3 me-3">
                <i className="bi bi-journal-text fs-3 text-primary"></i>
              </div>
              <div>
                <div className="fw-semibold fs-5">24</div>
                <div className="text-muted small">Total Inquiries</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-success bg-opacity-10 rounded-3 p-3 me-3">
                <i className="bi bi-person-check fs-3 text-success"></i>
              </div>
              <div>
                <div className="fw-semibold fs-5">12</div>
                <div className="text-muted small">Active Sellers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-purple bg-opacity-10 rounded-3 p-3 me-3" style={{ backgroundColor: '#f3e8ff' }}>
                <i className="bi bi-chat-dots fs-3" style={{ color: '#a259ff' }}></i>
              </div>
              <div>
                <div className="fw-semibold fs-5">47</div>
                <div className="text-muted small">Messages</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex align-items-center">
              <div className="bg-warning bg-opacity-10 rounded-3 p-3 me-3">
                <i className="bi bi-check2-square fs-3 text-warning"></i>
              </div>
              <div>
                <div className="fw-semibold fs-5">8</div>
                <div className="text-muted small">Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-3">
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="fw-semibold">Recent Inquiries</div>
                <a href="#" className="text-primary small fw-semibold">View All</a>
              </div>
              <ul className="list-group list-group-flush">
                {inquiries.map((inq, idx) => (
                  <li key={idx} className="list-group-item px-0 py-3 border-0 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-semibold">{inq.title}</div>
                        <div className="text-muted small">{inq.company}</div>
                        <div className="text-muted small">{inq.date}</div>
                      </div>
                      <span className={`badge bg-${inq.statusColor} fw-normal`} style={{ fontSize: '0.85em' }}>{inq.status}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="fw-semibold">Recent Sellers Contacted</div>
                <a href="#" className="text-primary small fw-semibold">View All</a>
              </div>
              <ul className="list-group list-group-flush">
                {sellers.map((seller, idx) => (
                  <li key={idx} className="list-group-item px-0 py-3 border-0">
                    <div className="d-flex align-items-center">
                      <img src={seller.avatar} alt={seller.name} className="rounded-circle me-3" width="44" height="44" style={{ objectFit: 'cover' }} />
                      <div className="flex-grow-1">
                        <div className="fw-semibold">{seller.name}</div>
                        <div className="text-muted small">{seller.company}</div>
                      </div>
                      <div className="text-end">
                        <div className="text-warning fw-semibold">
                          <i className="bi bi-star-fill"></i> {seller.rating}
                        </div>
                        <div className="text-muted small">{seller.time}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-primary px-4 py-2 fw-semibold" style={{ borderRadius: '8px' }}>Create New Inquiry</button>
      </div>
    </div>
  );
}

export default Dashboard;





<<<<<<< HEAD
// Lakhan
=======
>>>>>>> 4d6719d (login input filed ok)
