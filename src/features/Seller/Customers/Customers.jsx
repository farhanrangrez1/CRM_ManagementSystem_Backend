import React, { useState } from 'react';

import { FaEye, FaEdit, FaTrash, FaUser, FaUsers, FaCalendarPlus, FaDollarSign, FaPlus, FaSearch, FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Badge, Modal, Button, Form, Card, Pagination } from 'react-bootstrap';

const summaryData = [
    { label: 'Total Customers', value: 6, icon: <FaUser size={20} />, color: 'primary' },
    { label: 'Active Customers', value: 4, icon: <FaUsers size={20} />, color: 'success' },
    { label: 'New This Month', value: 8, icon: <FaCalendarPlus size={20} />, color: 'info' },
    { label: 'Total Revenue', value: '$193,880', icon: <FaDollarSign size={20} />, color: 'warning' },
];

const initialCustomers = [
    { customer: 'Sarah Johnson', email: 'sarah@techstart.com', company: 'TechStart Inc.', status: 'active', orders: 12, totalSpent: '$45,230', lastOrder: '2024-01-15' },
    { customer: 'Michael Chen', email: 'm.chen@digital.com', company: 'Digital Solutions', status: 'active', orders: 8, totalSpent: '$28,500', lastOrder: '2024-01-12' },
    { customer: 'Emily Rodriguez', email: 'emily@growthlabs.com', company: 'Growth Labs', status: 'inactive', orders: 5, totalSpent: '$15,200', lastOrder: '2023-11-28' },
    { customer: 'David Kim', email: 'david@innovation.com', company: 'Innovation Corp', status: 'active', orders: 15, totalSpent: '$62,800', lastOrder: '2024-01-18' },
    { customer: 'Lisa Wang', email: 'lisa@futuretech.com', company: 'Future Tech', status: 'active', orders: 9, totalSpent: '$33,450', lastOrder: '2024-01-10' },
    { customer: 'Robert Miller', email: 'robert@startup.co', company: 'Startup Co', status: 'pending', orders: 2, totalSpent: '$8,900', lastOrder: '2024-01-05' },
    { customer: 'John Doe', email: 'john@example.com', company: 'Example Corp', status: 'active', orders: 7, totalSpent: '$21,300', lastOrder: '2024-01-20' },
    { customer: 'Jane Smith', email: 'jane@example.com', company: 'Sample Inc', status: 'inactive', orders: 3, totalSpent: '$9,800', lastOrder: '2023-12-15' },
    { customer: 'Alex Brown', email: 'alex@example.com', company: 'Demo Ltd', status: 'active', orders: 11, totalSpent: '$38,750', lastOrder: '2024-01-17' },
    { customer: 'Maria Garcia', email: 'maria@example.com', company: 'Test Company', status: 'pending', orders: 1, totalSpent: '$2,500', lastOrder: '2024-01-03' },
    { customer: 'James Wilson', email: 'james@example.com', company: 'Trial Corp', status: 'active', orders: 6, totalSpent: '$19,200', lastOrder: '2024-01-14' },
    { customer: 'Emma Davis', email: 'emma@example.com', company: 'Check Ltd', status: 'inactive', orders: 4, totalSpent: '$12,100', lastOrder: '2023-12-28' },
];

const Customers = () => {
    const [customers, setCustomers] = useState(initialCustomers);
    const [showView, setShowView] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [editedCustomer, setEditedCustomer] = useState({});
    const [newCustomer, setNewCustomer] = useState({
        customer: '',
        email: '',
        company: '',
        status: 'active',
        orders: 0,
        totalSpent: '$0',
        lastOrder: new Date().toISOString().split('T')[0]
    });
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); // Number of items per page

    const handleView = (customer) => { setSelectedCustomer(customer); setShowView(true); };
    const handleEdit = (customer) => { setSelectedCustomer(customer); setEditedCustomer(customer); setShowEdit(true); };
    const handleDelete = (customer) => { setSelectedCustomer(customer); setShowDelete(true); };
    const handleAdd = () => { setShowAdd(true); };

    const handleEditChange = (e, key) => {
        setEditedCustomer({ ...editedCustomer, [key]: e.target.value });
    };

    const handleNewCustomerChange = (e, key) => {
        setNewCustomer({ ...newCustomer, [key]: e.target.value });
    };

    const saveEdit = () => {
        setCustomers(customers.map((c) => c.email === selectedCustomer.email ? editedCustomer : c));
        setShowEdit(false);
    };

    const confirmDelete = () => {
        setCustomers(customers.filter((c) => c.email !== selectedCustomer.email));
        setShowDelete(false);
        // Reset to first page if the last item on current page is deleted
        if (filteredCustomers.length % itemsPerPage === 1 && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const addNewCustomer = () => {
        setCustomers([...customers, newCustomer]);
        setShowAdd(false);
        // Reset the form
        setNewCustomer({
            customer: '',
            email: '',
            company: '',
            status: 'active',
            orders: 0,
            totalSpent: '$0',
            lastOrder: new Date().toISOString().split('T')[0]
        });
        // Go to last page after adding new customer
        const totalPages = Math.ceil((filteredCustomers.length + 1) / itemsPerPage);
        setCurrentPage(totalPages);
    };

    const filteredCustomers = customers.filter(c =>
        c.customer.toLowerCase().includes(search.toLowerCase()) &&
        (statusFilter ? c.status === statusFilter : true)
    );

    // Get current customers for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCustomers = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Pagination items
    let paginationItems = [];
    const maxVisiblePages = 5; // Maximum number of visible page numbers

    if (totalPages <= maxVisiblePages) {
        // Show all pages if total pages is less than or equal to maxVisiblePages
        for (let number = 1; number <= totalPages; number++) {
            paginationItems.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                    {number}
                </Pagination.Item>
            );
        }
    } else {
        // Show ellipsis and limited pages if total pages is more than maxVisiblePages
        const halfVisible = Math.floor(maxVisiblePages / 2);
        let startPage = Math.max(1, currentPage - halfVisible);
        let endPage = Math.min(totalPages, currentPage + halfVisible);

        if (currentPage <= halfVisible) {
            endPage = maxVisiblePages;
        } else if (currentPage >= totalPages - halfVisible) {
            startPage = totalPages - maxVisiblePages + 1;
        }

        // Always show first page
        if (startPage > 1) {
            paginationItems.push(
                <Pagination.Item key={1} active={1 === currentPage} onClick={() => paginate(1)}>
                    1
                </Pagination.Item>
            );
            if (startPage > 2) {
                paginationItems.push(<Pagination.Ellipsis key="start-ellipsis" />);
            }
        }

        // Show visible pages
        for (let number = startPage; number <= endPage; number++) {
            paginationItems.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                    {number}
                </Pagination.Item>
            );
        }

        // Always show last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationItems.push(<Pagination.Ellipsis key="end-ellipsis" />);
            }
            paginationItems.push(
                <Pagination.Item key={totalPages} active={totalPages === currentPage} onClick={() => paginate(totalPages)}>
                    {totalPages}
                </Pagination.Item>
            );
        }
    }

    return (
        <div className="p-3 w-100" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <div className="container-fluid">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h1 className="h4 fw-bold mb-0" style={{ fontSize: 22 }}>Customers</h1>
                        <p className="text-muted small mb-0" style={{ fontSize: 13 }}>Manage your customer relationships and track their activity</p>
                    </div>
                    <Button className="d-flex align-items-center gap-2" variant="primary" onClick={handleAdd} style={{ fontSize: 12 }}>
                        <FaPlus /> Add Customer
                    </Button>
                </div>

                <div className="row g-4 mb-4" style={{ marginTop: 8 }}>
                    {summaryData.map((item, idx) => (
                        <div className="col-md-3" key={idx}>
                            <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 12px rgba(60,60,120,0.08)', padding: '24px 18px', minHeight: 140, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                                <div style={{ color: '#64748b', fontWeight: 600, fontSize: 16, marginBottom: 6, textAlign: 'center' }}>{item.label}</div>
                                <div style={{ fontWeight: 800, fontSize: 26, color: item.color, marginBottom: 8, textAlign: 'center' }}>{item.value}</div>
                                <div style={{ textAlign: 'center' }}>{item.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <Card className="border-0 shadow-sm mb-4">
                    <Card.Body className="p-3">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3">
                            <h5 className="mb-2 mb-md-0 fw-semibold" style={{ fontSize: 13 }}>Customer List</h5>
                            <div className="d-flex flex-column flex-sm-row gap-2">
                                <div className="position-relative">
                                    <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                                    <Form.Control
                                        type="text"
                                        placeholder="Search customers..."
                                        className="ps-5"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        style={{ borderRadius: '20px', fontSize: 12 }}
                                    />
                                </div>
                                <Form.Select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    style={{ width: '150px', borderRadius: '20px', fontSize: 12 }}
                                >
                                    <option value="">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="pending">Pending</option>
                                </Form.Select>
                            </div>
                        </div>

                        <div className="table-responsive mb-3">
                            <table className="table align-middle mb-0" style={{ fontSize: 12 }}>
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ fontSize: 12 }}>Customer</th>
                                        <th style={{ fontSize: 12 }}>Company</th>
                                        <th style={{ fontSize: 12 }}>Status</th>
                                        <th style={{ fontSize: 12 }}>Orders</th>
                                        <th style={{ fontSize: 12 }}>Total Spent</th>
                                        <th style={{ fontSize: 12 }}>Last Order</th>
                                        <th style={{ fontSize: 12 }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentCustomers.length > 0 ? currentCustomers.map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            <tr style={{ fontSize: 12 }}>
                                                <td>
                                                    <div className="fw-semibold" style={{ fontSize: 13 }}>{item.customer}</div>
                                                    <div className="small text-muted" style={{ fontSize: 11 }}>{item.email}</div>
                                                </td>
                                                <td style={{ fontSize: 12 }}>{item.company}</td>
                                                <td style={{ fontSize: 12 }}>
                                                    <Badge
                                                        pill
                                                        bg={
                                                            item.status === 'active' ? 'success' :
                                                                item.status === 'inactive' ? 'danger' : 'warning'
                                                        }
                                                        className="text-capitalize"
                                                        style={{ fontSize: 11 }}
                                                    >
                                                        {item.status}
                                                    </Badge>
                                                </td>
                                                <td style={{ fontSize: 12 }}>{item.orders}</td>
                                                <td style={{ fontSize: 12 }}>{item.totalSpent}</td>
                                                <td style={{ fontSize: 12 }}>{item.lastOrder}</td>
                                                <td style={{ fontSize: 12 }}>
                                                    <Button size="sm" variant="outline-info" className="me-1 rounded-circle" onClick={() => handleView(item)} style={{ fontSize: 11 }}><FaEye /></Button>
                                                    <Button size="sm" variant="outline-warning" className="me-1 rounded-circle" onClick={() => handleEdit(item)} style={{ fontSize: 11 }}><FaEdit /></Button>
                                                    <Button size="sm" variant="outline-danger" className="rounded-circle" onClick={() => handleDelete(item)} style={{ fontSize: 11 }}><FaTrash /></Button>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )) : (
                                        <tr><td colSpan="7" className="text-center py-3 text-muted" style={{ fontSize: 12 }}>No customers found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>


                    </Card.Body>
                </Card>
            </div>

            {/* View Modal */}
            <Modal show={showView} animation={false}      // ❌ No fade animation
                backdrop={false} onHide={() => setShowView(false)} centered>
                <Modal.Header><Modal.Title style={{ fontSize: 15 }}>Customer Details</Modal.Title></Modal.Header>
                <Modal.Body>
                    {selectedCustomer && (
                        <ul className="list-group">
                            {Object.entries(selectedCustomer).map(([key, value]) => (
                                <li className="list-group-item d-flex justify-content-between" key={key} style={{ fontSize: 12 }}>
                                    <span className="text-capitalize" style={{ fontSize: 12 }}>{key.replace('_', ' ')}</span><span style={{ fontSize: 12 }}>{value}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </Modal.Body>
                <Modal.Footer><Button variant="secondary" onClick={() => setShowView(false)}>Close</Button></Modal.Footer>
            </Modal>

            {/* Edit Modal */}
            <Modal show={showEdit} animation={false}      // ❌ No fade animation
                backdrop={false} onHide={() => setShowEdit(false)} centered>
                <Modal.Header><Modal.Title style={{ fontSize: 15 }}>Edit Customer</Modal.Title></Modal.Header>
                <Modal.Body>
                    {editedCustomer && Object.keys(editedCustomer).map((key) => (
                        <Form.Group className="mb-2" key={key}>
                            <Form.Label className="text-capitalize" style={{ fontSize: 12 }}>{key}</Form.Label>
                            <Form.Control
                                type="text"
                                value={editedCustomer[key]}
                                onChange={(e) => handleEditChange(e, key)}
                                style={{ fontSize: 12 }}
                            />
                        </Form.Group>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEdit(false)}>Cancel</Button>
                    <Button variant="primary" onClick={saveEdit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            {/* Delete Modal */}
            <Modal show={showDelete} animation={false}      // ❌ No fade animation
                backdrop={false} onHide={() => setShowDelete(false)} centered>
                <Modal.Header><Modal.Title style={{ fontSize: 15 }}>Confirm Delete</Modal.Title></Modal.Header>
                <Modal.Body style={{ fontSize: 12 }}>Are you sure you want to delete <strong>{selectedCustomer?.customer}</strong>?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDelete(false)}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDelete}>Yes, Delete</Button>
                </Modal.Footer>
            </Modal>

            {/* Add Customer Modal */}
            <Modal animation={false}
                backdrop={false}
                show={showAdd} onHide={() => setShowAdd(false)} centered>
                <Modal.Header>
                    <Modal.Title style={{ fontSize: 15 }}>Add New Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontSize: 12 }}>Customer Name <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newCustomer.customer}
                                        onChange={(e) => handleNewCustomerChange(e, 'customer')}
                                        placeholder="Enter customer name"
                                        style={{ fontSize: 12 }}
                                        required
                                    />
                                </Form.Group></div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontSize: 12 }}>Email <span style={{ color: 'red' }}>*</span></Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={newCustomer.email}
                                        onChange={(e) => handleNewCustomerChange(e, 'email')}
                                        placeholder="Enter email"
                                        style={{ fontSize: 12 }}
                                        required
                                    />
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: 12 }}>Company <span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newCustomer.company}
                                    onChange={(e) => handleNewCustomerChange(e, 'company')}
                                    placeholder="Enter company name"
                                    style={{ fontSize: 12 }}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: 12 }}>Status <span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Select
                                    value={newCustomer.status}
                                    onChange={(e) => handleNewCustomerChange(e, 'status')}
                                    style={{ fontSize: 12 }}
                                    required
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="pending">Pending</option>
                                </Form.Select>
                            </Form.Group>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontSize: 12 }}>Orders</Form.Label>
                                    <Form.Control
                                        type="number"
                                        value={newCustomer.orders}
                                        onChange={(e) => handleNewCustomerChange(e, 'orders')}
                                        placeholder="Enter number of orders"
                                        style={{ fontSize: 12 }}
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label style={{ fontSize: 12 }}>Total Spent</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newCustomer.totalSpent}
                                        onChange={(e) => handleNewCustomerChange(e, 'totalSpent')}
                                        placeholder="Enter total amount spent"
                                        style={{ fontSize: 12 }}
                                    />
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label style={{ fontSize: 12 }}>Last Order Date <span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control
                                    type="date"
                                    value={newCustomer.lastOrder}
                                    onChange={(e) => handleNewCustomerChange(e, 'lastOrder')}
                                    style={{ fontSize: 12 }}
                                    required
                                />
                            </Form.Group>
                        </div>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAdd(false)}>Cancel</Button>
                    <Button variant="primary" onClick={addNewCustomer}>Add Customer</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Customers;