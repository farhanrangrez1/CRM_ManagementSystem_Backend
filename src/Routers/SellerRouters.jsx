import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../App.css";
import SellerDashboard from "../features/Seller/Dashboard/SellerDashboard";
import LeadManager from "../features/Seller/Lead/LeadManager";
import ProductCatalog from "../features/Seller/Product/ProductCatalog";
import Shidebar from "../features/Layouts/Shidebar";
import Nevbar from "../features/Layouts/Nevbar";
import SalesReports from "../features/Seller/SalesReports/SalesReports";
import Domain from "../features/Seller/Domain/Domain";
import Customers from "../features/Seller/Customers/Customers";
import Reports from "../features/Seller/Reports/ReportsAnalytics";
import Settings from "../features/Seller/Settings/Settings";
import ReportsAnalytics from "../features/Seller/Reports/ReportsAnalytics";
import LeadCreate from "../features/Seller/Lead/LeadCreate";
import ProductCreate from "../features/Seller/Product/ProductCreate";

function SellerRouters() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => setSidebarOpen((open) => !open);
  const handleSidebarClose = () => setSidebarOpen(false);

  const location = useLocation();
  const hideLayout =
    location.pathname === "/" || location.pathname.toLowerCase() === "/signup";
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f7f9fb" }}>
      {!hideLayout && (<Shidebar show={sidebarOpen} onClose={handleSidebarClose} />)}
      <div className={`Main-App-container ${hideLayout ? "no-sidebar" : ""}`}>
        {!hideLayout && <Nevbar onSidebarToggle={handleSidebarToggle} />}
        <div className="Main-App-Content">
          <Routes>
            <Route path="dashboard" element={<SellerDashboard />} />
            <Route path="leads" element={<LeadManager />} />
            <Route path="LeadCreate" element={<LeadCreate />} />
            <Route path="products" element={<ProductCatalog />} />
            <Route path="salesReports" element={<SalesReports />} />
            <Route path="domain" element={<Domain />} />
            <Route path="Customers" element={<Customers />} />
            <Route path="Reports" element={<ReportsAnalytics />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="product/create" element={<ProductCreate />} />
            {/* 404 ‑‑ optional fallback */}
            <Route path="*" element={<h2 className="p-4">Page not found</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default SellerRouters;
// <Shidebar show={sidebarOpen} onClose={handleSidebarClose} />
//  <Nevbar onSidebarToggle={handleSidebarToggle} />



