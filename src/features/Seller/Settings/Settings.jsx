import React, { useState, useRef } from 'react';

const initialState = {
  companyName: 'TechCorp Solutions',
  contactPerson: 'John Smith',
  email: 'john@techcorpsolutions.com',
  phone: '+1 (555) 123-4567',
  address: '123 Business Street, Suite 100',
  city: 'San Francisco',
  state: 'CA',
  website: 'https://techcorpsolutions.com',
  description: 'Leading provider of enterprise software solutions for modern businesses.',
  logo: null,
};

function Settings() {
  const [form, setForm] = useState(initialState);
  const [logoPreview, setLogoPreview] = useState(null);
  const [activeTab, setActiveTab] = useState('company');
  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, logo: file }));
      const reader = new FileReader();
      reader.onloadend = () => setLogoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleTab = (tab) => setActiveTab(tab);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send to API
    alert('Changes saved!');
  };

  return (
    <div className="container py-4" style={{ maxWidth: 900, fontFamily: 'Inter, sans-serif' }}>
      <h2 className="fw-bold mb-1" style={{ fontSize: '1.35rem' }}>Profile Settings</h2>
      <div className="text-muted mb-4" style={{ fontSize: '0.95rem' }}>Manage your account and company information</div>
      <ul className="nav nav-tabs mb-4" role="tablist" style={{ fontSize: '0.95rem' }}>
        <li className="nav-item" role="presentation">
          <button className={`nav-link${activeTab === 'company' ? ' active' : ''}`} onClick={() => handleTab('company')} type="button">Company Profile</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link${activeTab === 'account' ? ' active' : ''}`} onClick={() => handleTab('account')} type="button">Account Settings</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link${activeTab === 'notifications' ? ' active' : ''}`} onClick={() => handleTab('notifications')} type="button">Notifications</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className={`nav-link${activeTab === 'security' ? ' active' : ''}`} onClick={() => handleTab('security')} type="button">Security</button>
        </li>
      </ul>
      {activeTab === 'company' && (
        <form className="bg-white p-4 rounded shadow-sm" onSubmit={handleSubmit} style={{ fontSize: '0.95rem' }}>
          <h5 className="mb-4 fw-semibold" style={{ fontSize: '1.1rem' }}>Company Information</h5>
          <div className="row mb-3 align-items-center">
            <div className="col-md-2 text-center mb-3 mb-md-0">
              <div className="border rounded d-flex flex-column align-items-center justify-content-center" style={{ width: 72, height: 72, background: '#f8f9fa', cursor: 'pointer' }} onClick={() => fileInputRef.current.click()}>
                {logoPreview ? (
                  <img src={logoPreview} alt="Logo Preview" style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 8 }} />
                ) : (
                  <span className="text-muted" style={{ fontSize: 32 }}><i className="bi bi-image"></i></span>
                )}
                <input type="file" accept="image/png, image/jpeg" className="d-none" ref={fileInputRef} onChange={handleLogoChange} />
              </div>
              <div className="small text-muted mt-2" style={{ fontSize: '0.8rem' }}>PNG, JPG up to 2MB</div>
            </div>
            <div className="col-md-10">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '0.95rem' }}>Company Name</label>
                  <input type="text" className="form-control" name="companyName" value={form.companyName} onChange={handleChange} style={{ fontSize: '0.95rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '0.95rem' }}>Contact Person</label>
                  <input type="text" className="form-control" name="contactPerson" value={form.contactPerson} onChange={handleChange} style={{ fontSize: '0.95rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '0.95rem' }}>Email Address</label>
                  <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} style={{ fontSize: '0.95rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '0.95rem' }}>Phone Number</label>
                  <input type="text" className="form-control" name="phone" value={form.phone} onChange={handleChange} style={{ fontSize: '0.95rem' }} />
                </div>
                <div className="col-12">
                  <label className="form-label" style={{ fontSize: '0.95rem' }}>Address</label>
                  <input type="text" className="form-control" name="address" value={form.address} onChange={handleChange} style={{ fontSize: '0.95rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '0.95rem' }}>City</label>
                  <input type="text" className="form-control" name="city" value={form.city} onChange={handleChange} style={{ fontSize: '0.95rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '0.95rem' }}>State</label>
                  <input type="text" className="form-control" name="state" value={form.state} onChange={handleChange} style={{ fontSize: '0.95rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '0.95rem' }}>Website</label>
                  <input type="url" className="form-control" name="website" value={form.website} onChange={handleChange} style={{ fontSize: '0.95rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: '0.95rem' }}>Company Description</label>
                  <textarea className="form-control" name="description" rows={3} maxLength={500} value={form.description} onChange={handleChange} style={{ fontSize: '0.95rem' }} />
                  <div className="form-text text-end" style={{ fontSize: '0.8rem' }}>{form.description.length}/500 characters</div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button type="submit" className="btn btn-primary px-4" style={{ fontSize: '0.95rem' }}>Save Changes</button>
          </div>
        </form>
      )}
      {activeTab !== 'company' && (
        <div className="bg-white p-5 rounded shadow-sm text-center text-muted" style={{ minHeight: 200, fontSize: '0.95rem' }}>
          <div className="fw-semibold" style={{ fontSize: '1rem' }}>This section is under construction.</div>
          <div className="small" style={{ fontSize: '0.85rem' }}>Only the Company Profile tab is implemented for this demo.</div>
        </div>
      )}
    </div>
  );
}

export default Settings;