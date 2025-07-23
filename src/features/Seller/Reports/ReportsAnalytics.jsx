import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFileExport, FaArrowUp, FaEye } from 'react-icons/fa';
import {
    AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Modal, Button } from 'react-bootstrap';
import './ReportsAnalytics.css';

const ReportsAnalytics = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Sample data for charts
    const salesData = [
        { name: 'Jan', value: 15000 },
        { name: 'Feb', value: 25000 },
        { name: 'Mar', value: 35000 },
        { name: 'Apr', value: 28000 },
        { name: 'May', value: 42000 },
        { name: 'Jun', value: 39000 },
        { name: 'Jul', value: 48000 },
        { name: 'Aug', value: 52000 },
        { name: 'Sep', value: 45000 },
        { name: 'Oct', value: 55000 },
        { name: 'Nov', value: 60000 },
        { name: 'Dec', value: 58000 },
    ];

    const ordersData = [
        { name: 'Jan', value: 35 },
        { name: 'Feb', value: 70 },
        { name: 'Mar', value: 105 },
        { name: 'Apr', value: 90 },
        { name: 'May', value: 120 },
        { name: 'Jun', value: 110 },
        { name: 'Jul', value: 130 },
        { name: 'Aug', value: 140 },
        { name: 'Sep', value: 125 },
        { name: 'Oct', value: 135 },
        { name: 'Nov', value: 140 },
        { name: 'Dec', value: 130 },
    ];

    const customerData = [
        { name: 'Jan', value: 15 },
        { name: 'Feb', value: 25 },
        { name: 'Mar', value: 35 },
        { name: 'Apr', value: 30 },
        { name: 'May', value: 45 },
        { name: 'Jun', value: 40 },
    ];

    const productData = [
        { name: 'Standard ', value: 20 },
        { name: 'Premium ', value: 35 },
        { name: 'Enterprise ', value: 15 },
        { name: 'Basic ', value: 22 },
    ];

    const topProducts = [
        {
            name: 'Premium Business Package',
            sales: 85200,
            orders: 142,
            growth: '+18.5%',
            description: 'Comprehensive business solution with advanced features',
            category: 'Business',
            launchDate: '2022-01-15',
            rating: 4.8
        },
        {
            name: 'Standard Marketing Suite',
            sales: 67800,
            orders: 134,
            growth: '+12.3%',
            description: 'Essential marketing tools for small to medium businesses',
            category: 'Marketing',
            launchDate: '2022-03-10',
            rating: 4.5
        },
        {
            name: 'Basic Starter Plan',
            sales: 45600,
            orders: 156,
            growth: '+8.7%',
            description: 'Entry-level package for new businesses',
            category: 'Starter',
            launchDate: '2022-05-22',
            rating: 4.2
        },
        {
            name: 'Enterprise Solution',
            sales: 125900,
            orders: 89,
            growth: '+25.2%',
            description: 'Customizable enterprise-grade solution',
            category: 'Enterprise',
            launchDate: '2021-11-05',
            rating: 4.9
        },
        {
            name: 'Custom Development',
            sales: 92400,
            orders: 67,
            growth: '+15.1%',
            description: 'Tailored development services for specific needs',
            category: 'Custom',
            launchDate: '2022-02-18',
            rating: 4.7
        },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    return (
        <div className="container-fluid p-4 reports-analytics-dashboard">
            {/* Header Row with Title and Sales Report */}
            <div className="row mb-4">
                <div className="col-md-6">
                    <h1 className="dashboard-title" style={{ fontSize: 22 }}>Reports & Analytics</h1>
                    <p className="dashboard-subtitle" style={{ fontSize: 13 }}>Comprehensive insights into your business performance</p>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-md-end flex-wrap gap-2">
                    <select className="form-select form-select-sm" style={{ maxWidth: "150px", fontSize: 12 }}>
                        <option>Sales Report</option>
                        <option>Orders Report</option>
                        <option>Customer Report</option>
                    </select>

                    <select className="form-select form-select-sm" style={{ maxWidth: "120px", fontSize: 12 }}>
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last Year</option>
                    </select>

                    <button className="btn btn-primary btn-sm d-flex align-items-center gap-1" style={{ fontSize: 12 }}>
                        <FaFileExport /> Export Report
                    </button>
                </div>
            </div>

            {/* Top Metrics Row */}
            <div className="row mb-4 g-3">
                <div className="col-xl-3 col-md-6">
                    <div className="metric-card h-100 p-3">
                        <div className="d-flex align-items-center mb-1">
                            <FaArrowUp className="text-success me-1" />
                            <span className="metric-change" style={{ fontSize: 11 }}>+12.5%</span>
                        </div>
                        <h3 className="metric-value" style={{ fontSize: 15 }}>$324,500</h3>
                        <p className="metric-label" style={{ fontSize: 12 }}>Total Revenue</p>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="metric-card h-100 p-3">
                        <div className="d-flex align-items-center mb-1">
                            <FaArrowUp className="text-success me-1" />
                            <span className="metric-change" style={{ fontSize: 11 }}>+12.5%</span>
                        </div>
                        <h3 className="metric-value" style={{ fontSize: 15 }}>1,247</h3>
                        <p className="metric-label" style={{ fontSize: 12 }}>Total Orders</p>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="metric-card h-100 p-3">
                        <div className="d-flex align-items-center mb-1">
                            <FaArrowUp className="text-success me-1" />
                            <span className="metric-change" style={{ fontSize: 11 }}>+8.3%</span>
                        </div>
                        <h3 className="metric-value" style={{ fontSize: 15 }}>$260</h3>
                        <p className="metric-label" style={{ fontSize: 12 }}>Avg Order Value</p>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="metric-card h-100 p-3">
                        <div className="d-flex align-items-center mb-1">
                            <FaArrowUp className="text-success me-1" />
                            <span className="metric-change" style={{ fontSize: 11 }}>+4.1%</span>
                        </div>
                        <h3 className="metric-value" style={{ fontSize: 15 }}>32.4%</h3>
                        <p className="metric-label" style={{ fontSize: 12 }}>Profit Margin</p>
                    </div>
                </div>
            </div>

            {/* Main Content Row */}
            <div className="row g-3">
                {/* Sales Performance Column */}
                <div className="col-xl-8">
                    <div className="chart-card h-100 p-3">
                        <h4 className="chart-title mb-3" style={{ fontSize: 13 }}>Sales Performance</h4>
                        <div className="chart-container" style={{ height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="name"
                                        tick={{ fill: '#6c757d' }}
                                        axisLine={{ stroke: '#f0f0f0' }}
                                    />
                                    <YAxis
                                        tick={{ fill: '#6c757d' }}
                                        axisLine={{ stroke: '#f0f0f0' }}
                                    />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#4e73df"
                                        fill="#4e73df"
                                        fillOpacity={0.1}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Product Distribution Column */}
                <div className="col-xl-4">
                    <div className="chart-card h-120 p-3">
                        <h4 className="chart-title mb-3" style={{ fontSize: 13 }}>Product Distribution</h4>
                        <div className="d-flex flex-column h-100">
                            <div className="flex-grow-1" style={{ height: '200px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={productData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                            labelLine={false}
                                        >
                                            {productData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>

                                        <Tooltip formatter={(value) => [`${value} %`, 'Percentage']} />

                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="mt-3">
                                {productData.map((product, index) => (
                                    <div key={index} className="d-flex align-items-center mb-2">
                                        <div
                                            className="color-indicator me-2"
                                            style={{
                                                backgroundColor: COLORS[index % COLORS.length],
                                                width: '12px',
                                                height: '12px',
                                                borderRadius: '3px'
                                            }}
                                        ></div>
                                        <span className="product-label" style={{ fontSize: 11 }}>{product.name}: {product.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Graph Row */}
            <div className="row g-3 mt-3">
                {/* Monthly Orders Column */}
                <div className="col-xl-6">
                    <div className="chart-card h-100 p-3">
                        <h4 className="chart-title mb-3" style={{ fontSize: 13 }}>Monthly Orders</h4>
                        <div className="chart-container" style={{ height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={ordersData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="name"
                                        tick={{ fill: '#6c757d' }}
                                        axisLine={{ stroke: '#f0f0f0' }}
                                    />
                                    <YAxis
                                        tick={{ fill: '#6c757d' }}
                                        axisLine={{ stroke: '#f0f0f0' }}
                                    />
                                    <Tooltip />
                                    <Bar
                                        dataKey="value"
                                        fill="#1cc88a"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Customer Analytics Column */}
                <div className="col-xl-6">
                    <div className="chart-card h-100 p-3">
                        <h4 className="chart-title mb-3" style={{ fontSize: 13 }}>Customer Analytics</h4>
                        <div className="chart-container" style={{ height: '250px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={customerData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="name"
                                        tick={{ fill: '#6c757d' }}
                                        axisLine={{ stroke: '#f0f0f0' }}
                                    />
                                    <YAxis
                                        tick={{ fill: '#6c757d' }}
                                        axisLine={{ stroke: '#f0f0f0' }}
                                    />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#36b9cc"
                                        fill="#36b9cc"
                                        fillOpacity={0.1}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Performing Products Table */}
            <div className="row mt-3">
                <div className="col-12">
                    <div className="chart-card p-3">
                        <h4 className="chart-title mb-3" style={{ fontSize: 13 }}>Top Performing Products</h4>
                        <table className="table table-hover" style={{ fontSize: 12 }}>
                            <thead>
                                <tr>
                                    <th style={{ fontSize: 12 }}>Product Name</th>
                                    <th style={{ fontSize: 12 }}>Total Sales</th>
                                    <th style={{ fontSize: 12 }}>Orders</th>
                                    <th style={{ fontSize: 12 }}>Growth</th>
                                    <th style={{ fontSize: 12 }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topProducts.map((product, index) => (
                                    <tr key={index} style={{ fontSize: 12 }}>
                                        <td>{product.name}</td>
                                        <td>${product.sales.toLocaleString()}</td>
                                        <td>{product.orders}</td>
                                        <td className={product.growth.includes('+') ? 'text-success' : 'text-danger'}>
                                            {product.growth}
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-light"
                                                onClick={() => handleViewDetails(product)}
                                                style={{ fontSize: 11 }}
                                            >
                                                <FaEye className="text-primary" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Product Details Modal */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: 15 }}>Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct && (
                        <div>
                            <h5 style={{ fontSize: 13 }}>{selectedProduct.name}</h5>
                            <div className="row mt-3" style={{ fontSize: 12 }}>
                                <div className="col-md-6">
                                    <p><strong>Total Sales:</strong> ${selectedProduct.sales.toLocaleString()}</p>
                                    <p><strong>Orders:</strong> {selectedProduct.orders}</p>
                                    <p className={selectedProduct.growth.includes('+') ? 'text-success' : 'text-danger'}>
                                        <strong>Growth:</strong> {selectedProduct.growth}
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>Category:</strong> {selectedProduct.category}</p>
                                    <p><strong>Launch Date:</strong> {selectedProduct.launchDate}</p>
                                    <p><strong>Rating:</strong> {selectedProduct.rating}/5</p>
                                </div>
                            </div>
                            <div className="mt-3" style={{ fontSize: 12 }}>
                                <p><strong>Description:</strong></p>
                                <p>{selectedProduct.description}</p>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ReportsAnalytics;