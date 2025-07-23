import React, { useState } from 'react';

const sellersData = [
  {
    id: 1,
    name: 'Fashion Hub Ltd',
    company: 'Fashion Hub Private Limited',
    rating: 4.8,
    location: 'Mumbai, Maharashtra',
    products: 245,
    years: 8,
    tags: ['Textiles', 'Fashion', 'Apparel'],
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    verified: true,
  },
  {
    id: 2,
    name: 'TechGear Solutions',
    company: 'TechGear Solutions Pvt Ltd',
    rating: 4.9,
    location: 'Bangalore, Karnataka',
    products: 189,
    years: 5,
    tags: ['Electronics', 'Technology', 'Gadgets'],
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    verified: true,
  },
  {
    id: 3,
    name: 'Natural Beauty Co',
    company: 'Natural Beauty Company',
    rating: 4.7,
    location: 'Delhi, NCR',
    products: 156,
    years: 6,
    tags: ['Beauty', 'Skincare', 'Cosmetics'],
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    verified: true,
  },
  {
    id: 4,
    name: 'ElectroTech India',
    company: 'ElectroTech India Ltd',
    rating: 4.6,
    location: 'Chennai, Tamil Nadu',
    products: 298,
    years: 12,
    tags: ['Electrical', 'Electronics', 'Industrial'],
    avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
    verified: true,
  },
  {
    id: 5,
    name: 'Craft Masters',
    company: 'Craft Masters Artisans',
    rating: 4.9,
    location: 'Jaipur, Rajasthan',
    products: 87,
    years: 15,
    tags: ['Handicrafts', 'Furniture', 'Woodwork'],
    avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
    verified: true,
  },
  {
    id: 6,
    name: 'Kitchen Pro Exports',
    company: 'Kitchen Pro Exports',
    rating: 4.5,
    location: 'Pune, Maharashtra',
    products: 234,
    years: 9,
    tags: ['Kitchenware', 'Utensils', 'Cookware'],
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    verified: true,
  },
];

const locations = [
  'All Locations',
  'Mumbai, Maharashtra',
  'Bangalore, Karnataka',
  'Delhi, NCR',
  'Chennai, Tamil Nadu',
  'Jaipur, Rajasthan',
  'Pune, Maharashtra',
];

const categories = [
  'All Categories',
  'Textiles',
  'Fashion',
  'Apparel',
  'Electronics',
  'Technology',
  'Gadgets',
  'Beauty',
  'Skincare',
  'Cosmetics',
  'Electrical',
  'Industrial',
  'Handicrafts',
  'Furniture',
  'Woodwork',
  'Kitchenware',
  'Utensils',
  'Cookware',
];

function SellerDirectory() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('All Locations');
  const [category, setCategory] = useState('All Categories');

  const filteredSellers = sellersData.filter((seller) => {
    const matchesSearch =
      seller.name.toLowerCase().includes(search.toLowerCase()) ||
      seller.company.toLowerCase().includes(search.toLowerCase());
    const matchesLocation =
      location === 'All Locations' || seller.location === location;
    const matchesCategory =
      category === 'All Categories' || seller.tags.includes(category);
    return matchesSearch && matchesLocation && matchesCategory;
  });

  return (
    <div
      className="container py-4"
      style={{
        background: '#f7f8fa',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <h2 className="fw-bold mb-1" style={{ fontSize: '1.05rem' }}>
        Seller Directory
      </h2>
      <div className="text-muted mb-4" style={{ fontSize: '0.85rem' }}>
        Connect with verified sellers and manufacturers
      </div>
      <div
        className="row g-2 align-items-center mb-4"
        style={{ fontSize: '0.85rem' }}
      >
        <div className="col-md-6">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search sellers by name or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ fontSize: '0.85rem' }}
            />
          </div>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ fontSize: '0.85rem' }}
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ fontSize: '0.85rem' }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row g-4">
        {filteredSellers.length === 0 && (
          <div
            className="col-12 text-center text-muted py-5"
            style={{ fontSize: '0.85rem' }}
          >
            No sellers found.
          </div>
        )}
        {filteredSellers.map((seller) => (
          <div className="col-md-4" key={seller.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body" style={{ fontSize: '0.85rem' }}>
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={seller.avatar}
                    alt={seller.name}
                    className="rounded-circle border"
                    style={{ width: 38, height: 38, objectFit: 'cover' }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <div className="fw-bold" style={{ fontSize: '0.95rem' }}>
                      {seller.name}{' '}
                      {seller.verified && (
                        <span className="text-primary" title="Verified">
                          <i className="bi bi-patch-check-fill"></i>
                        </span>
                      )}
                    </div>
                    <div
                      className="text-muted small"
                      style={{ fontSize: '0.8rem' }}
                    >
                      {seller.company}
                    </div>
                  </div>
                </div>
                <div className="mb-2" style={{ fontSize: '0.85rem' }}>
                  <span className="text-warning fw-bold me-1">
                    <i className="bi bi-star-fill"></i> {seller.rating}
                  </span>
                </div>
                <ul
                  className="list-unstyled mb-3 small"
                  style={{ fontSize: '0.8rem' }}
                >
                  <li className="mb-1">
                    <i className="bi bi-geo-alt me-2 text-secondary"></i>
                    {seller.location}
                  </li>
                  <li className="mb-1">
                    <i className="bi bi-box-seam me-2 text-secondary"></i>
                    {seller.products} Products
                  </li>
                  <li>
                    <i className="bi bi-briefcase me-2 text-secondary"></i>
                    {seller.years} Years in Business
                  </li>
                </ul>
                <div className="mb-3">
                  {seller.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge bg-light text-secondary border me-1 mb-1"
                      style={{ fontWeight: 500, fontSize: '0.75em' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-primary flex-grow-1"
                    style={{ fontSize: '0.85rem' }}
                  >
                    Contact Seller
                  </button>
                  <button
                    className="btn btn-outline-secondary ms-2"
                    title="Save to wishlist"
                    style={{
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                    }}
                  >
                    <i className="bi bi-bookmark"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellerDirectory;