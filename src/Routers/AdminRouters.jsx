import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../App.css";

// ///////
import Nevbar from "../features/Layouts/Nevbar";
import Shidebar from "../features/Layouts/Shidebar";
import Dashboard from "../features/Admin/Dashboard";
import AllUsers from "../features/Admin/UserManagement/AllUsers";
import Buyers from "../features/Admin/UserManagement/Buyers";
import Sellers from "../features/Admin/UserManagement/Sellers";
import CouponManagement from "../features/Admin/Coupon/CouponManagement";
import DomainManagement from "../features/Admin/Domain/DomainManagement";
import PaymentLogs from "../features/Admin/Payment/PaymentLogs";
import AllPlans from "../features/Admin/Plans/AllPlans";
import GeneralSettings from "../features/Admin/Settings/GeneralSettings";
import Reportanalatics from "../features/Admin/Reports/Reportanalatics";
import ProtectedRoute from "../features/Auth/ProtectedRoute";
import CreatUsers from "../features/Admin/UserManagement/CreatUsers";
import CouponCreate from "../features/Admin/Coupon/CouponCreate";
import DomainCreate from "../features/Admin/Domain/DomainCreate";


function AdminRouters() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => setSidebarOpen((open) => !open);
  const handleSidebarClose = () => setSidebarOpen(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  const hideLayout =
    location.pathname === "/" || location.pathname.toLowerCase() === "/signup";
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#f7f9fb" }}>
   {!hideLayout && (<Shidebar show={sidebarOpen} onClose={handleSidebarClose} />)}
      <div className={`Main-App-container ${hideLayout ? "no-sidebar" : ""}`}>
        {!hideLayout && <Nevbar onSidebarToggle={handleSidebarToggle}/>}
        <div className="Main-App-Content">
          <Routes>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard/>
                </ProtectedRoute>
              }
            />
            <Route path="allUsers" element={<AllUsers />} />
            <Route path="CreatUsers" element={<CreatUsers />} />
            <Route path="buyers" element={<Buyers />} />
            <Route path="sellers" element={<Sellers />} />
            <Route path="CouponManagement" element={<CouponManagement />} />
            <Route path="CouponCreate" element={<CouponCreate/>} />
            <Route path="domain" element={<DomainManagement />} />
            <Route path="DomainCreate" element={<DomainCreate/>} />
            <Route path="Payment" element={<PaymentLogs />} />
            <Route path="AllPlans" element={<AllPlans />} />
            <Route path="reports" element={<Reportanalatics />} />
            <Route path="settings" element={<GeneralSettings />} />
            {/* 404 ‑‑ optional fallback */}
            <Route path="*" element={<h2 className="p-4">Page not found</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminRouters;

      // <Shidebar show={sidebarOpen} onClose={handleSidebarClose} />
      
      //  <Nevbar onSidebarToggle={handleSidebarToggle} />



