import React, { useState } from 'react';

const sampleProducts = [
  {
    id: 1,
    name: 'Premium Cotton T-Shirts',
    company: 'Fashion Hub Ltd',
    location: 'Mumbai, India',
    rating: 4.8,
    price: '₹299 - ₹599',
    minOrder: '100 pieces',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Wireless Bluetooth Headphones',
    company: 'TechGear Solutions',
    location: 'Bangalore, India',
    rating: 4.9,
    price: '₹1,299 - ₹2,999',
    minOrder: '50 pieces',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Organic Skincare Products',
    company: 'Natural Beauty Co',
    location: 'Delhi, India',
    rating: 4.7,
    price: '₹199 - ₹899',
    minOrder: '25 pieces',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Smart Home LED Bulbs',
    company: 'ElectroTech India',
    location: 'Chennai, India',
    rating: 4.6,
    price: '₹99 - ₹299',
    minOrder: '200 pieces',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Handcrafted Wooden Furniture',
    company: 'Craft Masters',
    location: 'Jaipur, India',
    rating: 4.8,
    price: '₹2,999 - ₹15,999',
    minOrder: '5 pieces',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Stainless Steel Kitchen Utensils',
    company: 'Kitchen Pro Exports',
    location: 'Pune, India',
    rating: 4.5,
    price: '₹499 - ₹1,999',
    minOrder: '50 pieces',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  },
];

function BrowseProducts() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [price, setPrice] = useState('Price Range');

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <h3 className="fw-bold" style={{ fontSize: '1.05rem' }}>Browse Products</h3>
      <div className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>Discover quality products from verified sellers</div>
      <div className="row mb-4 align-items-center" style={{ fontSize: '0.85rem' }}>
        <div className="col-md-6 mb-2 mb-md-0">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ fontSize: '0.85rem' }}
          />
        </div>
        <div className="col-md-3 mb-2 mb-md-0">
          <select className="form-select" value={category} onChange={e => setCategory(e.target.value)} style={{ fontSize: '0.85rem' }}>
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home & Furniture</option>
            <option>Beauty</option>
            <option>Kitchen</option>
          </select>
        </div>
        <div className="col-md-3">
          <select className="form-select" value={price} onChange={e => setPrice(e.target.value)} style={{ fontSize: '0.85rem' }}>
            <option>Price Range</option>
            <option>Under ₹500</option>
            <option>₹500 - ₹2,000</option>
            <option>₹2,000 - ₹10,000</option>
            <option>Above ₹10,000</option>
          </select>
        </div>
      </div>
      <div className="row g-4">
        {filteredProducts.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '180px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column" style={{ fontSize: '0.85rem' }}>
                <h6 className="card-title fw-semibold mb-1" style={{ fontSize: '0.95rem' }}>{product.name}</h6>
                <div className="small text-muted mb-1" style={{ fontSize: '0.8rem' }}>
                  <i className="bi bi-building"></i> {product.company}
                </div>
                <div className="small text-muted mb-1" style={{ fontSize: '0.8rem' }}>
                  <i className="bi bi-geo-alt"></i> {product.location}
                </div>
                <div className="mb-1" style={{ fontSize: '0.85rem' }}>
                  <span className="text-warning me-1">★</span>
                  <span className="fw-bold">{product.rating}</span>
                </div>
                <div className="mb-1" style={{ fontSize: '0.85rem' }}>
                  <span className="fw-bold text-primary">{product.price}</span>
                </div>
                <div className="mb-2 small text-muted" style={{ fontSize: '0.8rem' }}>Min order: {product.minOrder}</div>
                <button className="btn btn-primary mt-auto" style={{ fontSize: '0.85rem' }}>Contact Seller</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseProducts;