import React, { useState } from "react";
import "./Reportanalatics.css";

const summary = [
  { label: "Total Revenue", value: "$892,450", icon: "🟢", trend: "+12.5%", trendColor: "#22c55e" },
  { label: "Active Users", value: "24,891", icon: "🟢", trend: "+8.2%", trendColor: "#22c55e" },
  { label: "Domain Sales", value: "1,247", icon: "🟢", trend: "+15.7%", trendColor: "#22c55e" },
  { label: "Conversion Rate", value: "3.84%", icon: "🔴", trend: "-2.1%", trendColor: "#ef4444" },
];

const tabs = [
  "Overview Report",
  "Sales Report",
  "User Analytics",
  "Domain Analytics",
  "Revenue Report",
  "Conversion Analytics",
];

const revenueTrend = [
  { month: "Jan", revenue: "$45,000", domains: "120 domains" },
  { month: "Feb", revenue: "$52,000", domains: "145 domains" },
  { month: "Mar", revenue: "$48,000", domains: "135 domains" },
  { month: "Apr", revenue: "$61,000", domains: "167 domains" },
  { month: "May", revenue: "$55,000", domains: "152 domains" },
  { month: "Jun", revenue: "$73,000", domains: "189 domains" },
];

const topDomains = [
  { domain: "techstartup.com", type: "Technology", sales: "$67,500", count: 45 },
  { domain: "healthplus.org", type: "Healthcare", sales: "$57,000", count: 38 },
  { domain: "ecogreen.net", type: "Environment", sales: "$48,000", count: 32 },
  { domain: "fashionhub.co", type: "Fashion", sales: "$42,000", count: 28 },
  { domain: "foodie.io", type: "Food & Beverage", sales: "$37,500", count: 25 },
];

const Reportanalatics = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [reportDate, setReportDate] = useState("Today");

  // User Growth Analytics data
  const growthWeeks = [
    { week: 'Week 1', newUsers: '+1,250', total: '22,500' },
    { week: 'Week 2', newUsers: '+1,420', total: '23,920' },
    { week: 'Week 3', newUsers: '+1,180', total: '25,100' },
    { week: 'Week 4', newUsers: '+1,650', total: '26,750' },
  ];

  // Detailed Analytics data
  const details = [
    {
      metric: 'Total Page Views', desc: 'Unique page visits', current: '1,247,892', previous: '1,156,743', change: '+7.9%', trend: 'up', changeType: 'positive'
    },
    {
      metric: 'Domain Searches', desc: 'Total domain searches', current: '89,456', previous: '82,134', change: '+8.9%', trend: 'up', changeType: 'positive'
    },
    {
      metric: 'User Registrations', desc: 'New user signups', current: '3,847', previous: '4,125', change: '-6.7%', trend: 'down', changeType: 'negative'
    },
    {
      metric: 'Average Session Duration', desc: 'Time spent per session', current: '4m 32s', previous: '4m 18s', change: '+5.4%', trend: 'up', changeType: 'positive'
    },
    {
      metric: 'Bounce Rate', desc: 'Single page sessions', current: '24.8%', previous: '28.3%', change: '-12.4%', trend: 'up', changeType: 'positive'
    },
  ];

  return (
    <div className="analytics-container">
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
          <div className="fw-bold mb-1" style={{ fontWeight: 800, fontSize: 22, color: 'black', letterSpacing: 1, marginBottom: 6 }}>Reports & Analytics</div>
          <div className="text-muted" style={{ fontSize: 14, color: 'black', fontWeight: 500, letterSpacing: 0.5, marginBottom: 0 }}>Comprehensive business insights and performance metrics</div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <select value={reportDate} onChange={e => setReportDate(e.target.value)} style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #e5e7eb', fontSize: 12 }}>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
          <button style={{ background: '#2563eb', color: '#fff', borderRadius: 8, padding: '8px 18px', fontWeight: 600, fontSize: 13, border: 'none' }}>Export Report</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="analytics-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`analytics-tab${activeTab === idx ? ' active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="analytics-summary">
        {summary.map((item, idx) => (
          <div key={item.label} className="analytics-summary-card">
            <div style={{ fontSize: 12, color: '#6c757d', marginBottom: 8 }}>{item.label}</div>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#222' }}>{item.value}</div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
              <span>{item.icon}</span>
              <span className="trend" style={{ color: item.trendColor }}>{item.trend}</span>
            </div>
          </div>
        ))}
      </div>


      {/* ...existing code... */}
      <div className="analytics-main">
        {/* Revenue Trend */}
        <div className="analytics-trend">
          <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>Revenue Trend</div>
          <div style={{ display: 'flex', gap: 18, fontSize: 12, marginBottom: 8 }}>
            <span style={{ color: '#2563eb', fontWeight: 500 }}>● Revenue</span>
            <span style={{ color: '#22c55e', fontWeight: 500 }}>● Domains</span>
          </div>
          <div className="analytics-trend-list">
            {revenueTrend.map((row) => (
              <div key={row.month} className="analytics-trend-row">
                <span>{row.month}</span>
                <span style={{ color: '#2563eb', fontWeight: 500 }}>{row.revenue}</span>
                <span style={{ color: '#22c55e', fontWeight: 500 }}>{row.domains}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Domains */}
        <div className="analytics-domains">
          <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>Top Performing Domains</div>
          <div className="analytics-domains-list">
            {topDomains.map((row) => (
              <div key={row.domain} className="analytics-domain-row">
                <div className="analytics-domain-info">
                  <span style={{ fontWeight: 500 }}>{row.domain}</span>
                  <span className="analytics-domain-type">{row.type}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontWeight: 500 }}>{row.sales}</span>
                  <div style={{ color: '#6c757d', fontSize: 11 }}>{row.count} sales</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* User Growth Analytics Section */}
      <div className="analytics-growth-section">
        <div className="analytics-growth-title">User Growth Analytics</div>
        <div className="analytics-growth-cards">
          {growthWeeks.map((w) => (
            <div key={w.week} className="analytics-growth-card">
              <div style={{ fontWeight: 500, fontSize: 13 }}>{w.week}</div>
              <div className="growth-new">New Users: {w.newUsers}</div>
              <div className="growth-total">Total Users: {w.total}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Analytics Section */}
      <div className="analytics-details-section">
        <div className="analytics-details-title">Detailed Analytics</div>
        <div className="analytics-details-header">
          <div></div>
          <div className="analytics-details-actions">
            <button style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', fontWeight: 500, fontSize: 12, color: '#222', cursor: 'pointer' }}>Filter</button>
            <button style={{ padding: '6px 12px', borderRadius: 8, border: '1px solid #e5e7eb', background: '#fff', fontWeight: 500, fontSize: 12, color: '#222', cursor: 'pointer' }}>Search</button>
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="analytics-details-table" style={{ fontSize: 12 }}>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Current Period</th>
                <th>Previous Period</th>
                <th>Change</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              {details.map((row) => (
                <tr key={row.metric}>
                  <td>
                    <div>{row.metric}</div>
                    <div className="details-desc">{row.desc}</div>
                  </td>
                  <td>{row.current}</td>
                  <td>{row.previous}</td>
                  <td>
                    <span className={`details-change ${row.changeType}`}>{row.change}</span>
                  </td>
                  <td>
                    <span
                      className="details-trend"
                      style={{ color: row.trend === 'up' ? '#22c55e' : '#ef4444' }}
                    >
                      {row.trend === 'up' ? '↑' : '↓'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div >
  );
};

export default Reportanalatics;