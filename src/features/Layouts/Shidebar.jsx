import React, { useEffect, useState } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaThLarge, FaUsers, FaCreditCard, FaTags, FaGlobe, FaReceipt, FaChartBar, FaCog, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./SidebarColors.css";
import { Admin, Seller, Buyer } from "./menuConfig"



function Shidebar({ show, onClose }) {
  const [active, setActive] = useState("Dashboard");
  const [expanded, setExpanded] = useState(""); // Only one expanded at a time
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [roleData, setRoleData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Auto-set userRole based on path
    if (location.pathname.startsWith("/seller/")) {
      if (localStorage.getItem("userRole") !== "seller") {
        localStorage.setItem("userRole", "seller");
        setRoleData("seller");
      } else {
        setRoleData("seller");
      }
    } else if (location.pathname.startsWith("/admin/")) {
      if (localStorage.getItem("userRole") !== "admin") {
        localStorage.setItem("userRole", "admin");
        setRoleData("admin");
      } else {
        setRoleData("admin");
      }
    } else if (location.pathname.startsWith("/buyer/")) {
      if (localStorage.getItem("userRole") !== "buyer") {
        localStorage.setItem("userRole", "buyer");
        setRoleData("buyer");
      } else {
        setRoleData("buyer");
      }
    }
    else {
      // fallback: read from localStorage
      setRoleData(localStorage.getItem("userRole"));
    }
  }, [location.pathname]);

  // Select menu based on role
  let navLinks = [];
  if (roleData === "admin") {
    navLinks = Admin;
  } else if (roleData === "seller") {
    navLinks = Seller;
  } else if (roleData === "buyer") {
    navLinks = Buyer;
  }

  const handleNavClick = (label, expandable) => {
    setActive(label);
    if (expandable) {
      setExpanded(prev => (prev === label ? "" : label));
    }
  };

  // Color palette
  const sidebarBg = 'var(--sidebar-bg)';
  const activeBg = 'var(--sidebar-btn-active)';
  const activeText = 'var(--sidebar-btn-active-text)';
  const activeIcon = 'var(--sidebar-btn-active-text)';
  const inactiveText = 'var(--sidebar-btn-text)';
  const inactiveIcon = 'var(--sidebar-btn-text)';
  const hoverBg = 'var(--sidebar-btn-hover)';
  const hoverIcon = '#fff';
  const borderColor = 'var(--sidebar-divider)';
  const activeBorder = 'var(--sidebar-btn-active-border)';
  const dividerColor = 'var(--sidebar-divider)';

  // Sidebar width based on collapsed state
  const sidebarWidth = collapsed ? 72 : 270;





  // ////////////\
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [activeSubmenuPath, setActiveSubmenuPath] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (!location) return;
    let foundActiveMenuIndex = null;
    let foundActiveSubmenuPath = null;

    navLinks.forEach((item, i) => {
      if (item.submenu) {
        item.submenu.forEach((sub) => {
          if (location.pathname === sub.path) {
            foundActiveMenuIndex = i;
            foundActiveSubmenuPath = sub.path;
          }
        });
      } else if (location.pathname === item.path) {
        foundActiveMenuIndex = i;
        foundActiveSubmenuPath = null;
      }
    });

    setActiveMenuIndex(foundActiveMenuIndex);
    setActiveSubmenuPath(foundActiveSubmenuPath);
    if (foundActiveMenuIndex !== null) {
      setOpenMenuIndex(foundActiveMenuIndex);
    } else {
      setOpenMenuIndex(null);
    }
  }, [location.pathname, navLinks]);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };
  const handleMenuClick = (index, path, isSubmenu = false) => {
    setActiveMenuIndex(index);
    if (isSubmenu) {
      setActiveSubmenuPath(path);
    } else {
      setActiveSubmenuPath(null);
    }
    navigate(path);
  };
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
          width: sidebarWidth,
          minHeight: "100vh",
          fontFamily: 'Inter, system-ui, sans-serif',
          background: sidebarBg,
          zIndex: show ? 1041 : 2,

          backgroundColor: "white",
          borderRight: `1px solid ${borderColor}`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), width 0.3s cubic-bezier(0.4,0,0.2,1)',
          transform: show ? 'translateX(0)' : 'translateX(-100%)',
          left: 0,
        }}
      >
        {/* Close button for mobile */}
        <div className="d-lg-none d-flex justify-content-end mb-2" style={{ position: 'absolute', top: 12, right: 12, zIndex: 1050 }}>
          <button className="btn btn-link fs-3" style={{ color: '#222', fontSize: 28, fontWeight: 700, background: 'none', border: 'none', padding: 0, lineHeight: 1, cursor: 'pointer' }} onClick={onClose} aria-label="Close sidebar">&times;</button>
        </div>
        {/* Logo and Panel Title */}
        <a
          href="/"
          className="d-flex align-items-center mb-4 text-decoration-none"
          style={{ gap: 14, justifyContent: collapsed ? 'center' : 'flex-start' }}
        >
          <span style={{ fontSize: 32, color: '#6366f1', display: 'flex', alignItems: 'center' }}>
            <MdOutlineAdminPanelSettings />
          </span>
          {!collapsed && (
            <span className="fs-5 fw-bold" style={{ color: '#ffffff', letterSpacing: 0.2, fontWeight: 700, fontSize: 20, }}>CRM Management</span>
          )}
        </a>
        {/* {!collapsed && (
          <span className="text-muted small mb-4 ms-1" style={{ fontSize: 13, color: '#ffffffff', marginBottom: 18, display: 'block' }}>CRM Management</span>
        )} */}
        <ul className="nav nav-pills flex-column mb-auto gap-1" style={{ marginTop: 8 }}>
          {navLinks.map((item, idx) => (
            <React.Fragment key={item.label}>
              <li className="nav-item" style={{ position: 'relative', marginBottom: 6 }}>
                {/* Active indicator bar */}
                <div
                  className="active-indicator"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    background: active === item.label ? activeBorder : 'transparent',
                    borderRadius: '4px 0 0 4px',
                    transition: 'background 0.2s',
                  }}
                />
                <Link
                  to={item.path}
                  className={`nav-link d-flex align-items-center rounded-3 px-3 py-2${active === item.label ? ' active' : ''}`}
                  style={{
                    background: active === item.label ? activeBg : 'transparent',
                    color: active === item.label ? activeText : inactiveText,
                    fontWeight: active === item.label ? 600 : 500,
                    fontSize: 16,
                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s',
                    gap: 14,
                    cursor: 'pointer',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    borderRadius: 12,
                    marginBottom: 2,
                    boxShadow: active === item.label ? '0 2px 12px 0 rgba(79,70,229,0.10)' : 'none',
                    outline: active === item.label ? `1.5px solid #e0e7ff` : 'none',
                    borderLeft: '4px solid transparent',
                    paddingLeft: collapsed ? 0 : 20,
                    position: 'relative',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                  onClick={() => handleNavClick(item.label, item.expandable)}
                  onMouseOver={e => {
                    if (active !== item.label) {
                      e.currentTarget.style.background = hoverBg;
                      e.currentTarget.querySelector('span span').style.color = hoverIcon;
                    }
                  }}
                  onMouseOut={e => {
                    if (active !== item.label) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.querySelector('span span').style.color = inactiveIcon;
                    }
                  }}
                >
                  <span className="d-flex align-items-center" style={{ gap: 14, minWidth: 0, justifyContent: collapsed ? 'center' : 'flex-start', width: collapsed ? '100%' : 'auto' }}>
                    <span
                      style={{
                        fontSize: 20,
                        display: 'flex',
                        alignItems: 'center',
                        color: active === item.label ? activeIcon : inactiveIcon,
                        minWidth: 24,
                        transition: 'color 0.2s, transform 0.2s',
                        justifyContent: 'center',
                        width: collapsed ? 32 : 24,
                      }}
                    >
                      {item.icon}
                    </span>
                    {!collapsed && (
                      <span
                        style={{
                          fontWeight: active === item.label ? 600 : 500,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          transition: 'color 0.2s',
                        }}
                      >
                        {item.label}
                      </span>
                    )}
                  </span>
                  {item.expandable && !collapsed && (
                    <span style={{ marginLeft: 'auto', color: active === item.label ? activeIcon : inactiveIcon }}>
                      {expanded === item.label ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  )}
                </Link>
              </li>
              {/* Sub-items for expandable menus */}
              {item.expandable && expanded === item.label && !collapsed && (
                <div
                  style={{
                    maxHeight: expanded === item.label ? 500 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  <ul style={{ listStyle: 'none', paddingLeft: 36, margin: 0 }}>
                    {item.subItems.map(sub => (
                      <li key={sub.label} style={{ marginBottom: 2 }}>
                        <Link
                          to={sub.path}
                          className={`nav-link submenu${active === sub.label ? ' active' : ''}`}
                          style={{
                            background: active === sub.label ? activeBg : 'transparent',
                            color: active === sub.label ? activeText : inactiveText,
                            fontWeight: active === sub.label ? 600 : 500,
                            fontSize: 14,
                            marginBottom: 2,
                            transition: 'background 0.2s, color 0.2s',
                            cursor: 'pointer',
                            borderRadius: 8,
                            paddingLeft: 8,
                          }}
                          onClick={() => setActive(sub.label)}
                          onMouseOver={e => {
                            if (active !== sub.label) {
                              e.currentTarget.style.background = hoverBg;
                              e.currentTarget.style.color = hoverIcon;
                            }
                          }}
                          onMouseOut={e => {
                            if (active !== sub.label) {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = inactiveText;
                            }
                          }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* Divider above user info */}
        {/* User Info at Bottom with dropdown */}
        <div className="mt-auto d-flex align-items-center gap-3 pt-4 sidebar-user-profile" style={{ minHeight: 60, position: 'relative', justifyContent: collapsed ? 'center' : 'flex-start' }}>
          <div
            onClick={() => setProfileOpen(!profileOpen)}
            style={{
              width: 38,
              height: 38,
              background: '#6366f1',
              color: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: 18,
              boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            A
          </div>
          {!collapsed && (
            <div style={{ position: 'relative' }}>
              <div className="fw-semibold" style={{ fontSize: 15, color: '#222', fontWeight: 600 }}>Admin User</div>
              <div className="text-muted small" style={{ fontSize: 13, color: '#94a3b8' }}>System Administrator</div>
              {profileOpen && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 48,
                  background: '#fff',
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                  borderRadius: 8,
                  padding: 12,
                  minWidth: 180,
                  zIndex: 100
                }}>
                  <Link to="/profile" className="dropdown-item" style={{ display: 'block', padding: '6px 0', color: '#222', textDecoration: 'none' }}>Profile</Link>
                  <Link to="/settings" className="dropdown-item" style={{ display: 'block', padding: '6px 0', color: '#222', textDecoration: 'none' }}>Settings</Link>
                  <div style={{ borderTop: '1px solid #e5e7eb', margin: '6px 0' }} />
                  <button className="dropdown-item" style={{ display: 'block', padding: '6px 0', color: '#e11d48', background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Sidebar for desktop (always visible) */}
      <div
        className="sidebar-main d-none d-lg-flex flex-column flex-shrink-0 p-3 border-end"
        style={{
          width: sidebarWidth,
          minHeight: "100vh",
          fontFamily: 'Inter, system-ui, sans-serif',
          background: sidebarBg,
          zIndex: 2,
          backgroundColor: "white",
          borderRight: `1px solid ${borderColor}`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
          position: 'relative',
        }}
      >
        {/* Collapse/Expand Button */}
        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          style={{
            position: 'absolute',
            top: 16,
            right: collapsed ? -18 : -18,
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '50%',
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
            zIndex: 10,
            cursor: 'pointer',
            transition: 'right 0.3s',
          }}
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        {/* Logo and Panel Title */}
        <a
          className="d-flex align-items-center mb-4 text-decoration-none"
          style={{ gap: 14, justifyContent: collapsed ? 'center' : 'flex-start' }}
        >
          <span style={{ fontSize: 32, color: '#6366f1', display: 'flex', alignItems: 'center' }}>
            <MdOutlineAdminPanelSettings />
          </span>
          {!collapsed && (
            <span className="fs-5 fw-bold" style={{ color: '#fff', letterSpacing: 0.2, fontWeight: 700, fontSize: 20 }}>CRM Management</span>
          )}
        </a>
        {/* {!collapsed && (
          <span className="text-muted small mb-4 ms-1" style={{ fontSize: 13, color: '#94a3b8', marginBottom: 18, display: 'block' }}>CRM Management</span>
        )} */}
        <ul className="nav nav-pills flex-column mb-auto gap-1" style={{ marginTop: 8 }}>
          {navLinks.map((item, idx) => (
            <React.Fragment key={item.label}>
              <li className="nav-item" style={{ position: 'relative', marginBottom: 6 }}>
                {/* Active indicator bar */}
                <div
                  className="active-indicator"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 4,
                    background: active === item.label ? activeBorder : 'transparent',
                    borderRadius: '4px 0 0 4px',
                    transition: 'background 0.2s',
                  }}
                />
                <Link
                  to={item.path}
                  className={`nav-link d-flex align-items-center rounded-3 px-3 py-2${active === item.label ? ' active' : ''}`}
                  style={{
                    background: active === item.label ? activeBg : 'transparent',
                    color: active === item.label ? activeText : inactiveText,
                    fontWeight: active === item.label ? 600 : 500,
                    fontSize: 16,
                    transition: 'background 0.2s, color 0.2s, box-shadow 0.2s, border 0.2s',
                    gap: 14,
                    cursor: 'pointer',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    borderRadius: 12,
                    marginBottom: 2,
                    boxShadow: active === item.label ? '0 2px 12px 0 rgba(79,70,229,0.10)' : 'none',
                    outline: active === item.label ? `1.5px solid #e0e7ff` : 'none',
                    borderLeft: '4px solid transparent',
                    paddingLeft: collapsed ? 0 : 20,
                    position: 'relative',
                    alignItems: 'center',
                    display: 'flex',
                  }}
                  onClick={() => handleNavClick(item.label, item.expandable)}
                  onMouseOver={e => {
                    if (active !== item.label) {
                      e.currentTarget.style.background = hoverBg;
                      e.currentTarget.querySelector('span span').style.color = hoverIcon;
                    }
                  }}
                  onMouseOut={e => {
                    if (active !== item.label) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.querySelector('span span').style.color = inactiveIcon;
                    }
                  }}
                >
                  <span className="d-flex align-items-center" style={{ gap: 14, minWidth: 0, justifyContent: collapsed ? 'center' : 'flex-start', width: collapsed ? '100%' : 'auto' }}>
                    <span
                      style={{
                        fontSize: 20,
                        display: 'flex',
                        alignItems: 'center',
                        color: active === item.label ? activeIcon : inactiveIcon,
                        minWidth: 24,
                        transition: 'color 0.2s, transform 0.2s',
                        justifyContent: 'center',
                        width: collapsed ? 32 : 24,
                      }}
                    >
                      {item.icon}
                    </span>
                    {!collapsed && (
                      <span
                        style={{
                          fontWeight: active === item.label ? 600 : 500,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          transition: 'color 0.2s',
                        }}
                      >
                        {item.label}
                      </span>
                    )}
                  </span>
                  {item.expandable && !collapsed && (
                    <span style={{ marginLeft: 'auto', color: active === item.label ? activeIcon : inactiveIcon }}>
                      {expanded === item.label ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </span>
                  )}
                </Link>
              </li>
              {/* Sub-items for expandable menus */}
              {item.expandable && expanded === item.label && !collapsed && (
                <div
                  style={{
                    maxHeight: expanded === item.label ? 500 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)',
                  }}
                >
                  <ul style={{ listStyle: 'none', paddingLeft: 36, margin: 0 }}>
                    {item.subItems.map(sub => (
                      <li key={sub.label} style={{ marginBottom: 2 }}>
                        <Link
                          to={sub.path}
                          className={`nav-link submenu${active === sub.label ? ' active' : ''}`}
                          style={{
                            background: active === sub.label ? activeBg : 'transparent',
                            color: active === sub.label ? activeText : inactiveText,
                            fontWeight: active === sub.label ? 600 : 500,
                            fontSize: 14,
                            marginBottom: 2,
                            transition: 'background 0.2s, color 0.2s',
                            cursor: 'pointer',
                            borderRadius: 8,
                            paddingLeft: 8,
                          }}
                          onClick={() => setActive(sub.label)}
                          onMouseOver={e => {
                            if (active !== sub.label) {
                              e.currentTarget.style.background = hoverBg;
                              e.currentTarget.style.color = hoverIcon;
                            }
                          }}
                          onMouseOut={e => {
                            if (active !== sub.label) {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = inactiveText;
                            }
                          }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* Divider above user info */}
        {/* User Info at Bottom with dropdown */}
        <div className="mt-auto d-flex align-items-center gap-3 pt-4 sidebar-user-profile" style={{ minHeight: 60, position: 'relative', justifyContent: collapsed ? 'center' : 'flex-start' }}>
          <div
            onClick={() => setProfileOpen(!profileOpen)}
            style={{
              width: 38,
              height: 38,
              background: '#6366f1',
              color: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: 18,
              boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)',
              cursor: 'pointer',
              position: 'relative',
            }}
          >
            A
          </div>
          {!collapsed && (
            <div style={{ position: 'relative' }}>
              <div className="fw-semibold" style={{ fontSize: 15, color: 'wahet', fontWeight: 600 }}>Admin User</div>
              <div className=" small" style={{ fontSize: 13, color: 'wahet' }}>System Administrator</div>
              {profileOpen && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 48,
                  background: '#fff',
                  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)',
                  borderRadius: 8,
                  padding: 12,
                  minWidth: 180,
                  zIndex: 100
                }}>
                  <Link to="/profile" className="dropdown-item" style={{ display: 'block', padding: '6px 0', color: '#222', textDecoration: 'none' }}>Profile</Link>
                  <Link to="/settings" className="dropdown-item" style={{ display: 'block', padding: '6px 0', color: '#222', textDecoration: 'none' }}>Settings</Link>
                  <div style={{ borderTop: '1px solid #e5e7eb', margin: '6px 0' }} />
                  <button className="dropdown-item" style={{ display: 'block', padding: '6px 0', color: '#e11d48', background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Shidebar;
