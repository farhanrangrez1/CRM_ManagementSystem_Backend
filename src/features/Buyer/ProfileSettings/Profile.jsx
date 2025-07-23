import React, { useRef, useState } from 'react';

function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState('https://randomuser.me/api/portraits/men/32.jpg');
  const fileInputRef = useRef();

  const [form, setForm] = useState({
    firstName: 'Rahul',
    lastName: 'Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 9876543210',
    company: 'Sharma Enterprises',
    location: 'Mumbai, Maharashtra',
    bio: 'Experienced buyer in textile and fashion industry with 5+ years of experience.'
  });

  const [activeTab, setActiveTab] = useState('profile');

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setProfilePicUrl(URL.createObjectURL(file));
    }
  };

  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add save logic here
    alert('Profile changes saved!');
  };

  return (
    <div className="container py-4" style={{ maxWidth: 900, fontFamily: 'Inter, sans-serif' }}>
      <h2 className="fw-bold mb-1" style={{ fontSize: '1.05rem' }}>Profile Settings</h2>
      <div className="text-muted mb-4" style={{ fontSize: '0.85rem' }}>Manage your account settings and preferences</div>
      <div className="card shadow-sm">
        <div className="card-body p-4" style={{ fontSize: '0.85rem' }}>
          {/* Tabs */}
          <ul className="nav nav-tabs mb-4" role="tablist" style={{ fontSize: '0.85rem' }}>
            <li className="nav-item" role="presentation">
              <button className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => handleTabClick('profile')} type="button" style={{ fontSize: '0.85rem' }}>Profile Information</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={`nav-link ${activeTab === 'security' ? 'active' : ''}`} onClick={() => handleTabClick('security')} type="button" style={{ fontSize: '0.85rem' }}>Security</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className={`nav-link ${activeTab === 'preferences' ? 'active' : ''}`} onClick={() => handleTabClick('preferences')} type="button" style={{ fontSize: '0.85rem' }}>Preferences</button>
            </li>
          </ul>

          {/* Profile Information Tab */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSubmit} style={{ fontSize: '0.85rem' }}>
              <div className="mb-4">
                <h5 className="fw-bold" style={{ fontSize: '0.95rem' }}>Profile Information</h5>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="position-relative me-3">
                  <img
                    src={profilePicUrl}
                    alt="Profile"
                    className="rounded-circle border"
                    style={{ width: 60, height: 60, objectFit: 'cover' }}
                  />
                  <button
                    type="button"
                    className="btn btn-light border position-absolute bottom-0 end-0 p-1 rounded-circle"
                    style={{ transform: 'translate(25%, 25%)', boxShadow: '0 0 4px #ccc', fontSize: '0.85rem' }}
                    onClick={handleProfilePicClick}
                    title="Change profile picture"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M4.11 2.5a1 1 0 0 1 .95-.68h5.88a1 1 0 0 1 .95.68l.45 1.32c.08.23.3.38.54.38H14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1.07c.24 0 .46-.15.54-.38l.45-1.32zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-1.07a2 2 0 0 1-1.9-1.32l-.45-1.32a2 2 0 0 0-1.9-1.32H5.06a2 2 0 0 0-1.9 1.32l-.45 1.32A2 2 0 0 1 1.07 4H2z" />
                    </svg>
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleProfilePicChange}
                  />
                </div>
                <div>
                  <div className="fw-semibold" style={{ fontSize: '0.85rem' }}>Profile Picture</div>
                  <div className="text-muted" style={{ fontSize: '0.8rem' }}>JPG, PNG or GIF. Max size 2MB.</div>
                </div>
              </div>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>First Name</label>
                  <input type="text" className="form-control" name="firstName" value={form.firstName} onChange={handleInputChange} style={{ fontSize: '0.85rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Last Name</label>
                  <input type="text" className="form-control" name="lastName" value={form.lastName} onChange={handleInputChange} style={{ fontSize: '0.85rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Email Address</label>
                  <input type="email" className="form-control" name="email" value={form.email} onChange={handleInputChange} style={{ fontSize: '0.85rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Phone Number</label>
                  <input type="text" className="form-control" name="phone" value={form.phone} onChange={handleInputChange} style={{ fontSize: '0.85rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Company Name</label>
                  <input type="text" className="form-control" name="company" value={form.company} onChange={handleInputChange} style={{ fontSize: '0.85rem' }} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Location</label>
                  <input type="text" className="form-control" name="location" value={form.location} onChange={handleInputChange} style={{ fontSize: '0.85rem' }} />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold" style={{ fontSize: '0.85rem' }}>Bio</label>
                <textarea
                  className="form-control"
                  name="bio"
                  rows={3}
                  maxLength={500}
                  value={form.bio}
                  onChange={handleInputChange}
                  style={{ fontSize: '0.85rem' }}
                />
                <div className="text-end text-muted" style={{ fontSize: '0.8rem' }}>{form.bio.length}/500 characters</div>
              </div>
              <div className="mt-4">
                <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold" style={{ fontSize: '0.85rem' }}>Save Changes</button>
              </div>
            </form>
          )}

          {/* Security Tab Placeholder */}
          {activeTab === 'security' && (
            <div className="py-5 text-center text-muted" style={{ fontSize: '0.85rem' }}>Security settings coming soon...</div>
          )}
          {/* Preferences Tab Placeholder */}
          {activeTab === 'preferences' && (
            <div className="py-5 text-center text-muted" style={{ fontSize: '0.85rem' }}>Preferences settings coming soon...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;