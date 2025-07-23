import React from "react";
import "./SalesReports.css";

const salesData = {
    totalRevenue: 812450,
    totalOrders: 2334,
    avgOrderValue: 348,
    conversionRate: 12.2,
    revenueChange: 15.3,
    ordersChange: 8.7,
    avgOrderChange: 5.2,
    conversionChange: -2.1,
    revenueByMonth: [
        50000, 55000, 60000, 70000, 65000, 80000, 75000, 85000, 90000, 95000, 100000, 110000
    ],
    salesFunnel: {
        Leads: 2340,
        Qualified: 1876,
        Proposals: 945,
        Negotiations: 432,
        "Closed Won": 285
    },
    topProducts: [
        {
            name: "Premium Software License",
            sales: 485,
            revenue: 145050,
            growth: 12.5,
            performance: 90
        },
        {
            name: "Enterprise Solution",
            sales: 267,
            revenue: 346830,
            growth: 18.2,
            performance: 80
        },
        {
            name: "Professional Tools Suite",
            sales: 356,
            revenue: 177644,
            growth: -5.3,
            performance: 60
        },
        {
            name: "Analytics Pro",
            sales: 423,
            revenue: 84177,
            growth: 23.1,
            performance: 70
        },
        {
            name: "Marketing Automation",
            sales: 198,
            revenue: 158202,
            growth: 15.7,
            performance: 65
        }
    ]
};

const SalesReports = () => {
    return (
        <div className="sales-report-container">
            <div className="sales-report-header">
                <div>
                    <h2 style={{ fontSize: 22 }}>Sales Reports</h2>
                    <p style={{ fontSize: 13 }}>Analyze your sales performance and trends</p>
                </div>
                <div className="sales-report-header-actions">
                    <select style={{ fontSize: 12 }}>
                        <option>Last 3 months</option>
                        <option>Last 6 months</option>
                        <option>Last year</option>
                    </select>
                    <button className="export-btn" style={{ fontSize: 12 }}>Export Report</button>
                </div>
            </div>

            <div className="sales-report-stats-grid">
                <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
                    <div className="stat-title" style={{ fontSize: 12 }}>Total Revenue</div>
                    <div className="stat-value" style={{ fontSize: 15 }}>${salesData.totalRevenue.toLocaleString()}</div>
                    <div className="stat-change positive" style={{ fontSize: 11 }}>↑ {salesData.revenueChange}% from last period</div>
                </div>
                <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
                    <div className="stat-title" style={{ fontSize: 12 }}>Total Orders</div>
                    <div className="stat-value" style={{ fontSize: 15 }}>{salesData.totalOrders.toLocaleString()}</div>
                    <div className="stat-change positive" style={{ fontSize: 11 }}>↑ {salesData.ordersChange}% from last period</div>
                </div>
                <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
                    <div className="stat-title" style={{ fontSize: 12 }}>Avg Order Value</div>
                    <div className="stat-value" style={{ fontSize: 15 }}>${salesData.avgOrderValue.toLocaleString()}</div>
                    <div className="stat-change negative" style={{ fontSize: 11 }}>↑ {salesData.avgOrderChange}% from last period</div>
                </div>
                <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
                    <div className="stat-title" style={{ fontSize: 12 }}>Conversion Rate</div>
                    <div className="stat-value" style={{ fontSize: 15 }}>{salesData.conversionRate}%</div>
                    <div className="stat-change negative" style={{ fontSize: 11 }}>↓ {Math.abs(salesData.conversionChange)}% from last period</div>
                </div>
            </div>

            <div className="sales-report-main-grid">
                <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
                    <div className="card-title" style={{ fontSize: 13 }}>Revenue by Month</div>
                    <svg width="100%" height="180" viewBox="0 0 400 180">
                        <rect x="0" y="0" width="400" height="180" fill="#f8fafc" />
                        {/* Simple line chart */}
                        <polyline
                            fill="none"
                            stroke="#2563eb"
                            strokeWidth="3"
                            points={salesData.revenueByMonth.map((v, i) => `${30 + i * 32},${180 - v / 1200}`).join(" ")}

                        />
                        {/* X axis labels */}
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m, i) => (
                            <text key={m} x={30 + i * 32} y={175} fontSize="9" textAnchor="middle" fill="#888">{m}</text>
                        ))}
                    </svg>
                </div>
                <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
                    <div className="card-title" style={{ fontSize: 13 }}>Sales Funnel</div>
                    <div className="sales-funnel-pie">
                        {/* Simple pie chart using SVG */}
                        <svg width="140" height="140" viewBox="0 0 140 140">
                            {/* Pie chart segments */}
                            {(() => {
                                const funnel = salesData.salesFunnel;
                                const total = Object.values(funnel).reduce((a, b) => a + b, 0);
                                let startAngle = 0;
                                const colors = ["#2563eb", "#22c55e", "#f59e42", "#e11d48", "#6366f1"];
                                return Object.entries(funnel).map(([key, value], idx) => {
                                    const angle = (value / total) * 360;
                                    const large = angle > 180 ? 1 : 0;
                                    const x1 = 70 + 60 * Math.cos((Math.PI * startAngle) / 180);
                                    const y1 = 70 + 60 * Math.sin((Math.PI * startAngle) / 180);
                                    const x2 = 70 + 60 * Math.cos((Math.PI * (startAngle + angle)) / 180);
                                    const y2 = 70 + 60 * Math.sin((Math.PI * (startAngle + angle)) / 180);
                                    const d = `M70,70 L${x1},${y1} A60,60 0 ${large},1 ${x2},${y2} Z`;

                                    const seg = (
                                        <path key={key} d={d} fill={colors[idx % colors.length]} />
                                    );
                                    startAngle += angle;
                                    return seg;
                                });
                            })()}
                        </svg>
                        <div className="sales-funnel-legend">
                            {Object.entries(salesData.salesFunnel).map(([key, value], idx) => (
                                <div key={key} className="legend-item" style={{ fontSize: 11 }}>
                                    <span className="legend-dot" style={{ background: ["#2563eb", "#22c55e", "#f59e42", "#e11d48", "#6366f1"][idx] }}></span>
                                    {key} <span className="legend-value">{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
                <div className="card-title" style={{ fontSize: 13 }}>Top Selling Products</div>
                <div className="top-products-table" style={{ fontSize: 12 }}>
                    <div className="table-header" style={{ fontSize: 12 }}>
                        <div>Product</div>
                        <div>Sales</div>
                        <div>Revenue</div>
                        <div>Growth</div>
                        <div>Performance</div>
                    </div>
                    {salesData.topProducts.map((prod, idx) => (
                        <div className="table-row" key={prod.name} style={{ fontSize: 12 }}>
                            <div className="product-rank" style={{ fontSize: 11 }}>#{idx + 1}</div>
                            <div>{prod.name}</div>
                            <div>{prod.sales}</div>
                            <div>${prod.revenue.toLocaleString()}</div>
                            <div className={prod.growth > 0 ? "growth-pos" : "growth-neg"} style={{ fontSize: 11 }}>
                                {prod.growth > 0 ? `↑ ${prod.growth}%` : `↓ ${Math.abs(prod.growth)}%`}
                            </div>

                            <div>
                                <div className="performance-bar-bg">
                                    <div className="performance-bar" style={{ width: prod.performance + "%" }}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalesReports;