import React, { useState } from "react";
import "./Allplans.css";

const plans = [
  {
    name: "Basic Plan",
    price: 299,
    period: "monthly",
    features: ["5 Products", "Basic Support", "Analytics Dashboard", "Mobile App"],
    subscribers: 1248,
    revenue: 372552,
    status: "Active",
  },
  {
    name: "Pro Plan",
    price: 799,
    period: "monthly",
    features: [
      "25 Products",
      "Priority Support",
      "Advanced Analytics",
      "Custom Domain",
      "+1 more features",
    ],
    subscribers: 856,
    revenue: 684344,
    status: "Active",
    popular: true,
  },
  {
    name: "Business Plan",
    price: 1499,
    period: "monthly",
    features: [
      "Unlimited Products",
      "24/7 Support",
      "White Label",
      "API Access",
      "+1 more features",
    ],
    subscribers: 234,
    revenue: 350766,
    status: "Active",
  },
  {
    name: "Starter Plan",
    price: 149,
    period: "monthly",
    features: ["3 Products", "Email Support", "Basic Templates"],
    subscribers: 892,
    revenue: 132908,
    status: "Inactive",
  },
  {
    name: "Enterprise Plan",
    price: 2999,
    period: "monthly",
    features: [
      "Everything Included",
      "Dedicated Manager",
      "Custom Development",
      "SLA Support",
    ],
    subscribers: 67,
    revenue: 200933,
    status: "Active",
  },
  {
    name: "Annual Basic",
    price: 2999,
    period: "yearly",
    features: [
      "5 Products",
      "Basic Support",
      "Analytics Dashboard",
      "12 Months Access",
    ],
    subscribers: 445,
    revenue: 1334555,
    status: "Active",
  },
];

const summary = [
  { label: "Total Plans", value: 6, icon: "📅" },
  { label: "Active Plans", value: 5, icon: "✅" },
  { label: "Total Revenue", value: "₹3,076,058", icon: "💰" },
  { label: "Total Subscribers", value: "3,742", icon: "🧑‍🤝‍🧑" },
];

const initialForm = {
  name: "",
  price: "",
  period: "monthly",
  features: "",
  subscribers: "",
  revenue: "",
  status: "Active",
  popular: false,
};

const RequiredStar = () => <span style={{ color: "red", marginLeft: 2 }}>*</span>;

const AllPlans = () => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleOpenModal = () => {
    setShowModal(true);
    setForm(initialForm);
  };
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add the new plan to your plans array or send to backend
    handleCloseModal();
  };

  return (
    <div className="plans-page-container">
      {/* Header */}
      <div
        style={{
          padding: "22px 0 8px 0",
          background: "white",

          marginBottom: 14,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ marginLeft: 32 }}>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 22,
              color: "black",
              letterSpacing: 1,
              marginBottom: 6,
            }}
          >
            Subscription Plans
          </h2>
          <div
            style={{
              fontSize: 14,
              color: "black",
              fontWeight: 500,
              letterSpacing: 0.5,
              marginBottom: 0,
            }}
          >
            Manage and monitor all subscription plans
          </div>
        </div>
      </div>

      {/* Modal for Create New Plan */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            marginTop: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#0008",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: 32,
              minWidth: 400,
              maxWidth: 400,
              boxShadow: "0 4px 24px #0002",
              position: "relative",
            }}
          >
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: 19,
                right: 16,
                background: "none",
                border: "none",
                fontSize: 12,
                cursor: "pointer",
                color: "#888",
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <h3
              style={{
                marginBottom: 18,
              }}
            >
              Create New Plan
            </h3>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <label style={{ fontWeight: 600 }}>
                Plan Name <RequiredStar />
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Plan Name"
                required
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              />
              <label style={{ fontWeight: 600 }}>
                Price <RequiredStar />
              </label>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                type="number"
                required
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              />
              <label style={{ fontWeight: 600 }}>
                Features <RequiredStar />
              </label>
              <input
                name="features"
                value={form.features}
                onChange={handleChange}
                placeholder="Features (comma separated)"
                required
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              />
              <input
                name="subscribers"
                value={form.subscribers}
                onChange={handleChange}
                placeholder="Subscribers"
                type="number"
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              />
              <input
                name="revenue"
                value={form.revenue}
                onChange={handleChange}
                placeholder="Revenue"
                type="number"
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              />
              <select
                name="period"
                value={form.period}
                onChange={handleChange}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                style={{
                  padding: "8px 12px",
                  borderRadius: 8,
                  border: "1px solid #e5e7eb",
                }}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <input
                  name="popular"
                  type="checkbox"
                  checked={form.popular}
                  onChange={handleChange}
                />{" "}
                Most Popular
              </label>
              <button
                type="submit"
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "10px 0",
                  fontWeight: 600,
                  fontSize: 16,
                  border: "none",
                  marginTop: 8,
                }}
              >
                Create Plan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Summary Cards */}
      <div className="row g-4" style={{ marginTop: 4, marginBottom: 24, fontSize: 18 }}>
        {[
          { title: "Total Plans", value: 6, color: "#222", icon: <span style={{ fontSize: 23 }}>🗓️</span> },
          { title: "Active Plans", value: 5, color: "#222", icon: <span style={{ fontSize: 23 }}>✅</span> },
          { title: "Total Revenue", value: "₹3,076,058", color: "#8b5cf6", icon: <span style={{ fontSize: 23 }}>💰</span> },
          { title: "Total Subscribers", value: "3,742", color: "#f59e42", icon: <span style={{ fontSize: 23 }}>👥</span> },
        ].map((card, idx) => (
          <div className="col-md-3" key={idx}>
            <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 2px 12px rgba(60,60,120,0.08)", padding: "28px 18px", minHeight: 170, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <div style={{ color: "#64748b", fontWeight: 600, fontSize: 17, marginBottom: 6, textAlign: "center" }}>{card.title}</div>
              <div style={{ fontWeight: 800, fontSize: 28, color: card.color, marginBottom: 8, textAlign: "center" }}>{card.value}</div>
              <div style={{ textAlign: "center" }}>{card.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Bar */}
      <div className="plans-topbar">
        <input type="text" placeholder="Search plans..." />
        <div className="plans-status-group">
          <label style={{ fontSize: 13, color: "#6c757d" }}>Status:</label>
          <select>
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button>Export</button>
        </div>
        <button className="create-btn" onClick={handleOpenModal}>
          + Create New Plan
        </button>
      </div>

      {/* Plans Grid */}
      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <div key={plan.name} className="plans-card">
            <div style={{ fontWeight: 700, fontSize: 15 }}>{plan.name}</div>
            {plan.popular && <span style={{}}></span>}
            <div
              style={{
                fontWeight: 700,
                fontSize: 18,
                margin: "12px 0 4px 0",
              }}
            >
              ₹{plan.price}
              <span
                style={{
                  fontWeight: 400,
                  fontSize: 13,
                  color: "#6c757d",
                }}
              >
                / {plan.period}
              </span>
            </div>
            <ul style={{ paddingLeft: 18, marginBottom: 12 }}>
              {plan.features.map((f, i) => (
                <li
                  key={f}
                  style={{
                    color: "#22c55e",
                    fontSize: 13,
                    marginBottom: 4,
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ marginRight: 6 }}>✔</span>{" "}
                  <span
                    style={{
                      color: f.startsWith("+") ? "#2563eb" : "#222",
                      fontWeight: f.startsWith("+") ? 500 : 400,
                    }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 13,
                color: "#6c757d",
                marginTop: 12,
              }}
            >
              Subscribers: {plan.subscribers}
              <span style={{ fontSize: 13, color: "#6366f1" }}>
                Revenue: ₹{plan.revenue}
              </span>
            </div>
            <span
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background:
                  plan.status === "Active" ? "#e6f9f0" : "#fdeaea",
                color:
                  plan.status === "Active" ? "#22c55e" : "#ef4444",
                fontWeight: 600,
                fontSize: 13,
                borderRadius: 8,
                padding: "2px 10px",
              }}
            >
              {plan.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlans;