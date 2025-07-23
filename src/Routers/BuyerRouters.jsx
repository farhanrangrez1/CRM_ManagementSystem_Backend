import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../App.css";

// ///////
import Nevbar from "../features/Layouts/Nevbar";
import Shidebar from "../features/Layouts/Shidebar";
import Dashboard from "../features/Buyer/Dashboard/Dashboard";

// Add this import for ProtectedRoute
import ProtectedRoute from "../features/Auth/ProtectedRoute";
import BrowseProducts from "../features/Buyer/BrowseProducts/BrowseProducts";
import InquiryHistory from "../features/Buyer/InquiryHistory/InquiryHistory";
import SellerDirectory from "../features/Buyer/SellerDirectory/SellerDirectory";
import Messages from "../features/Buyer/Messages/Messages";
import Profile from "../features/Buyer/ProfileSettings/Profile";


function BuyerRouters() {
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
       <Route path="browseProducts" element={<BrowseProducts/>} />
        <Route path="InquiryHistory" element={<InquiryHistory/>} />
         <Route path="SellerDirectory" element={<SellerDirectory/>} />
             <Route path="Messages" element={<Messages/>} />
                  <Route path="Profile" element={<Profile/>} />
            {/* 404 ‑‑ optional fallback */}
            <Route path="*" element={<h2 className="p-4">Page not found</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default BuyerRouters;