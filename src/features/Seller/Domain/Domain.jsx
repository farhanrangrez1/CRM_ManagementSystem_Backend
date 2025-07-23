import React, { useState } from "react";
import "./Domain.css";
import { Link } from "react-router-dom";

const domainData = {
  totalDomains: 3,
  activeDomains: 1,
  sslSecured: 2,
  domains: [
    {
      name: "mystore.example.com",
      type: "primary",
      status: "active",
      ssl: "secured",
      addedDate: "2024-01-15",
      expires: "2025-01-15",
      actions: ["edit", "delete"]
    },
    {
      name: "shop.mybrand.com",
      type: "custom",
      status: "pending",
      ssl: "not secured",
      addedDate: "2024-01-20",
      expires: "2024-12-20",
      actions: ["edit", "delete"]
    },
    {
      name: "store.company.net",
      type: "custom",
      status: "inactive",
      ssl: "secured",
      addedDate: "2024-01-10",
      expires: "2024-11-10",
      actions: ["edit", "delete"]
    }
  ]
};

const Domain = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editDomain, setEditDomain] = useState(null);

  const handleAddDomain = () => {
    setAddModalOpen(true);
  };

  const handleEditDomain = (domain) => {
    setEditDomain(domain);
    setEditModalOpen(true);
  };

  const closeModal = () => {
    setAddModalOpen(false);
    setEditModalOpen(false);
    setEditDomain(null);
  };

  return (
    <div className="domain-manager-container">
      <div className="domain-manager-header">
        <div>
          <h2 style={{ fontSize: 22 }}>Domain Manager</h2>
          <p style={{ fontSize: 13 }}>Manage your custom domains and SSL certificates</p>
        </div>
        <div className="add-domain">
          <input
            type="text"
            placeholder="Enter your domain (e.g., shop.yourdomain.com)"
            style={{ fontSize: 12 }}
          />
          <Link to={"/admin/DomainCreate"}> <button className="add-domain-btn" onClick={handleAddDomain} style={{ fontSize: 12 }}>+ Add Domain</button></Link>
        </div>
      </div>

      <div className="domain-stats-grid">
        <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
          <div className="stat-title" style={{ fontSize: 12 }}>Total Domains</div>
          <div className="stat-value" style={{ fontSize: 15 }}>{domainData.totalDomains}</div>
        </div>
        <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
          <div className="stat-title" style={{ fontSize: 12 }}>Active Domains</div>
          <div className="stat-value" style={{ fontSize: 15 }}>{domainData.activeDomains}</div>
        </div>
        <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
          <div className="stat-title" style={{ fontSize: 12 }}>SSL Secured</div>
          <div className="stat-value" style={{ fontSize: 15 }}>{domainData.sslSecured}</div>
        </div>
      </div>

      <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
        <div className="list-header" style={{ fontSize: 12 }}>
          <div>Domain</div>
          <div>Type</div>
          <div>Status</div>
          <div>SSL</div>
          <div>Added Date</div>
          <div>Expires</div>
          <div>Actions</div>
        </div>
        {domainData.domains.map((domain, idx) => (
          <div className="list-row" key={idx} style={{ fontSize: 16 }}>
            <div>{domain.name}</div>
            <div>{domain.type}</div>
            <div className={`status ${domain.status}`} style={{ fontSize: 11 }}>{domain.status}</div>
            <div className={`ssl ${domain.ssl.replace(" ", "-")}`} style={{ fontSize: 11 }}>{domain.ssl}</div>
            <div>{domain.addedDate}</div>
            <div>{domain.expires}</div>
            <div className="actions">
              <button className="action-btn edit" onClick={() => handleEditDomain(domain)} style={{ fontSize: 11 }}>Edit</button>
              <button className="action-btn delete" style={{ fontSize: 11 }}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-card bg-white rounded-4 shadow-sm px-4 pt-4 pb-3 mb-0 mt-4" style={{ border: '1.5px solid #d6f5c6', background: '#ffffff' }}>
        <h3 style={{ fontSize: 13 }}>DNS Configuration Guide</h3>
        <ul style={{ fontSize: 12 }}>
          <li>Step 1: Add an A record pointing to our server IP: 192.168.1.100</li>
          <li>Step 2: Add a CNAME record for www pointing to your domain</li>
          <li>Step 3: Wait for DNS propagation (up to 24 hours)</li>
          <li>Step 4: SSL certificate will be automatically generated once domain is verified</li>
        </ul>
      </div>

      {isAddModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3 style={{ fontSize: 13 }}>Add Domain</h3>
            <form>
              <input type="text" placeholder="Domain Name" style={{ fontSize: 12 }} />
              <input type="text" placeholder="Type" style={{ fontSize: 12 }} />
              <input type="text" placeholder="Status" style={{ fontSize: 12 }} />
              <input type="text" placeholder="SSL" style={{ fontSize: 12 }} />
              <input type="text" placeholder="Added Date" style={{ fontSize: 12 }} />
              <input type="text" placeholder="Expires" style={{ fontSize: 12 }} />
              <button type="submit" style={{ fontSize: 12 }}>Add</button>
            </form>
            <button className="close-btn" onClick={closeModal} style={{ fontSize: 12 }}>Close</button>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3 style={{ fontSize: 13 }}>Edit Domain</h3>
            <form>
              <input type="text" defaultValue={editDomain.name} style={{ fontSize: 12 }} />
              <input type="text" defaultValue={editDomain.type} style={{ fontSize: 12 }} />
              <input type="text" defaultValue={editDomain.status} style={{ fontSize: 12 }} />
              <input type="text" defaultValue={editDomain.ssl} style={{ fontSize: 12 }} />
              <input type="text" defaultValue={editDomain.addedDate} style={{ fontSize: 12 }} />
              <input type="text" defaultValue={editDomain.expires} style={{ fontSize: 12 }} />
              <button type="submit" style={{ fontSize: 12 }}>Save</button>
            </form>
            <button className="close-btn" onClick={closeModal} style={{ fontSize: 12 }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Domain;