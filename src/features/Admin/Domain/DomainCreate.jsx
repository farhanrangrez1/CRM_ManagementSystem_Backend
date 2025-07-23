import React, { useState } from 'react'

function DomainCreate() {
  const [form, setForm] = useState({
    domain: '',
    domainIcon: '', // URL for icon
    ownerName: '',
    ownerEmail: '',
    status: 'active',
    type: 'premium',
    expiry: '',
    pricePerYear: '',
    revenue: '',
    visits: '',
    autoRenew: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.domain) newErrors.domain = 'Domain name required';
    if (!form.domainIcon) newErrors.domainIcon = 'Domain icon URL required';
    if (!form.ownerName) newErrors.ownerName = 'Owner company name required';
    if (!form.ownerEmail) newErrors.ownerEmail = 'Owner email required';
    if (!form.expiry) newErrors.expiry = 'Expiry date required';
    if (!form.pricePerYear) newErrors.pricePerYear = 'Price per year required';
    if (!form.revenue) newErrors.revenue = 'Revenue required';
    if (!form.visits) newErrors.visits = 'Visits/month required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log('Domain Form Data:', form);
    alert('Domain created! (Console me data check karein)');
    setForm({
      domain: '', domainIcon: '', ownerName: '', ownerEmail: '', status: 'active', type: 'premium', expiry: '', pricePerYear: '', revenue: '', visits: '', autoRenew: false
    });
  };

  const RequiredStar = () => <span style={{ color: 'red', marginLeft: 2 }}>*</span>;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 28, background: '#f7f9fb', borderRadius: 16, boxShadow: '0 4px 24px #0001' }}>
      <h2 className="fw-bold text-center mb-4" style={{ letterSpacing: 1 }}>Create Domain</h2>
      <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 14, padding: 28, boxShadow: '0 2px 8px #0001', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={{ gridColumn: '1 / 3' }}>
          <label className="fw-semibold">Domain Icon URL <RequiredStar /></label><br />
          <input
            type="url"
            name="domainIcon"
            value={form.domainIcon}
            onChange={handleChange}
            placeholder="https://..."
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
          />
          {errors.domainIcon && <div style={{ color: 'red', fontSize: 12 }}>{errors.domainIcon}</div>}
        </div>
        <div>
          <label className="fw-semibold">Domain Name <RequiredStar /></label><br />
          <input
            type="text"
            name="domain"
            value={form.domain}
            onChange={handleChange}
            placeholder="e.g. enterprise.com"
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontWeight: 600, fontSize: 15 }}
          />
          {errors.domain && <div style={{ color: 'red', fontSize: 12 }}>{errors.domain}</div>}
        </div>
        <div>
          <label className="fw-semibold">Visits per month <RequiredStar /></label><br />
          <input
            type="number"
            name="visits"
            value={form.visits}
            onChange={handleChange}
            placeholder="e.g. 89200"
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
          />
          {errors.visits && <div style={{ color: 'red', fontSize: 12 }}>{errors.visits}</div>}
        </div>
        <div>
          <label className="fw-semibold">Owner Company Name <RequiredStar /></label><br />
          <input
            type="text"
            name="ownerName"
            value={form.ownerName}
            onChange={handleChange}
            placeholder="e.g. Enterprise Corp"
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontWeight: 600, fontSize: 15 }}
          />
          {errors.ownerName && <div style={{ color: 'red', fontSize: 12 }}>{errors.ownerName}</div>}
        </div>
        <div>
          <label className="fw-semibold">Owner Email <RequiredStar /></label><br />
          <input
            type="email"
            name="ownerEmail"
            value={form.ownerEmail}
            onChange={handleChange}
            placeholder="e.g. admin@enterprise.com"
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
          />
          {errors.ownerEmail && <div style={{ color: 'red', fontSize: 12 }}>{errors.ownerEmail}</div>}
        </div>
        <div>
          <label className="fw-semibold">Status</label><br />
          <select name="status" value={form.status} onChange={handleChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="expired">Expired</option>
          </select>
        </div>
        <div>
          <label className="fw-semibold">Type</label><br />
          <select name="type" value={form.type} onChange={handleChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}>
            <option value="premium">Premium</option>
            <option value="standard">Standard</option>
          </select>
        </div>
        <div>
          <label className="fw-semibold">Expiry Date <RequiredStar /></label><br />
          <input
            type="date"
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
          />
          {errors.expiry && <div style={{ color: 'red', fontSize: 12 }}>{errors.expiry}</div>}
        </div>
        <div>
          <label className="fw-semibold">Price per year ($) <RequiredStar /></label><br />
          <input
            type="number"
            name="pricePerYear"
            value={form.pricePerYear}
            onChange={handleChange}
            placeholder="e.g. 399"
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
          />
          {errors.pricePerYear && <div style={{ color: 'red', fontSize: 12 }}>{errors.pricePerYear}</div>}
        </div>
        <div>
          <label className="fw-semibold">Revenue ($) <RequiredStar /></label><br />
          <input
            type="number"
            name="revenue"
            value={form.revenue}
            onChange={handleChange}
            placeholder="e.g. 22340"
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', color: '#1a7f37', fontWeight: 600, fontSize: 15 }}
          />
          {errors.revenue && <div style={{ color: 'red', fontSize: 12 }}>{errors.revenue}</div>}
        </div>
        <div style={{ gridColumn: '1 / 3', marginBottom: 8 }}>
          <label className="fw-semibold">
            <input
              type="checkbox"
              name="autoRenew"
              checked={form.autoRenew}
              onChange={handleChange}
              style={{ marginRight: 8 }}
            />
            Auto-renew
          </label>
        </div>
        <div style={{ gridColumn: '1 / 3', textAlign: 'center' }}>
          <button type="submit" style={{ padding: '14px 0', width: '60%', background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 17, boxShadow: '0 2px 8px rgba(99,102,241,0.08)' }}>
            Create Domain
          </button>
        </div>
      </form>
    </div>
  );
}

export default DomainCreate