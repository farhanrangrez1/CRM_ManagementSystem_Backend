import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import productImg from '../../../assets/react.svg';

// Placeholder dimension image (use your own if available)
const dimensionImg = "https://your-dimension-image-url.com"; // make sure this is a valid string URL

const img = {
  imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRner5aEpJM9MCVHwBeE7Nxzf_9UY8Z3yuO1E9j7LrLe0Fy47OE"
};



const products = [
  {
    no: 1,
    modelNo: '1116',
    pic: img.imageUrl, // ✅ Only the URL string
    code: '25005',
    qty: 100,
    priceRMB: 16.0,
    material: 'STEEL ZINC PLATED',
    total: 1600.0,
    dimensionPic: dimensionImg,
  },
  {
    no: 2,
    modelNo: '1117',
    pic: img.imageUrl, // ✅ Only the URL string
    code: '25006',
    qty: 50,
    priceRMB: 12.5,
    material: 'STEEL ZINC PLATED',
    total: 625.0,
    dimensionPic: dimensionImg,
  },
  {
    no: 3,
    modelNo: '1141',
    pic: img.imageUrl, // ✅ Only the URL string
    code: '25008',
    qty: 200,
    priceRMB: 7.5,
    material: 'STEEL ZINC PLATED',
    total: 1500.0,
    dimensionPic: dimensionImg,
  },
  {
    no: 4,
    modelNo: '1141S',
    pic: img.imageUrl, // ✅ Only the URL string
    code: '25009',
    qty: 100,
    priceRMB: 24.0,
    material: 'S.S POLISHED',
    total: 2400.0,
    dimensionPic: dimensionImg,
  },
  {
    no: 5,
    modelNo: '1144',
    pic: img.imageUrl, // ✅ Only the URL string
    code: '25010',
    qty: 500,
    priceRMB: 5.0,
    material: 'STEEL ZINC PLATED',
    total: 2500.0,
    dimensionPic: dimensionImg,
  },
  {
    no: 6,
    modelNo: '1148',
    pic: img.imageUrl, // ✅ Only the URL string
    code: '25011',
    qty: 100,
    priceRMB: 11.0,
    material: 'STEEL ZINC PLATED',
    total: 1100.0,
    dimensionPic: dimensionImg,
  },
  {
    no: 7,
    modelNo: '1148S',
    pic: img.imageUrl, // ✅ Only the URL string
    code: '25012',
    qty: 50,
    priceRMB: 45.0,
    material: 'S.S POLISHED',
    total: 2250.0,
    dimensionPic: dimensionImg,
  },
];

function ProductCatalog() {
  const [viewMode, setViewMode] = useState('cards');
  const navigate = useNavigate();
  const buttonBase = 'btn px-3 py-2 fw-semibold';
  const toggleBtn = (mode) =>
    `${buttonBase} btn-outline-secondary rounded-pill${viewMode === mode ? ' active border-primary bg-primary text-white' : ''}`;

  // Card View
  const renderCards = () => (
    <div className="row g-3">
      {products.map((product, idx) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.code}>
          <div className="card h-100 shadow-sm border-0" style={{ borderRadius: 12, padding: 12 }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-secondary" style={{ fontSize: 11, borderRadius: 6 }}>NO: {idx + 1}</span>
              <span className="badge bg-light text-dark" style={{ fontSize: 11, borderRadius: 6 }}>Model: {product.modelNo}</span>
            </div>
            <div className="d-flex justify-content-center align-items-center mb-2" style={{ minHeight: 40 }}>
              <img src={product.pic} alt="product" style={{ width: 32, height: 32, objectFit: 'contain', marginRight: 8 }} />
              {product.dimensionPic && <img src={product.dimensionPic} alt="doc" style={{ width: 24, height: 24, objectFit: 'contain' }} />}
            </div>
            <div style={{ fontSize: 12, marginBottom: 2 }}><b>Code:</b> {product.code} <span className="float-end"><b>Qty:</b> {product.qty}</span></div>
            <div style={{ fontSize: 12, marginBottom: 2 }}><b>Price:</b> ¥{product.priceRMB.toFixed(2)}</div>
            <div style={{ fontSize: 12, marginBottom: 2 }}><b>Total:</b> <span style={{ color: '#2563eb', fontWeight: 600 }}>¥{product.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span></div>
            <div style={{ fontSize: 12, marginBottom: 2 }}><b>Material:</b> {product.material}</div>
            <div className="d-flex justify-content-end gap-2 mt-2">
              <button className="btn btn-outline-primary btn-sm" style={{ fontSize: 11, borderRadius: 50, padding: '6px 10px' }}><i className="bi bi-pencil"></i></button>
              <button className="btn btn-outline-danger btn-sm" style={{ fontSize: 11, borderRadius: 50, padding: '6px 10px' }}><i className="bi bi-trash"></i></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Table View
  const renderTable = () => (
    <div className="table-responsive">
      <table className="table table-hover table-striped align-middle shadow-sm rounded-4 overflow-hidden" style={{ background: '#fff' }}>
        <thead className="table-light">
          <tr style={{ fontSize: 15 }}>
            <th>NO</th>
            <th>MODEL NO.</th>
            <th>PIC</th>
            <th>CODE</th>
            <th>QTY</th>
            <th>PRICE IN RMB</th>
            <th>MATERIAL</th>
            <th>TOTAL</th>
            <th>DIMENTION PIC</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.no} style={{ verticalAlign: 'middle' }}>
              <td>{product.no}</td>
              <td>{product.modelNo}</td>
              <td><img src={product.pic} alt="Product" style={{ height: 32 }} /></td>
              <td>{product.code}</td>
              <td>{product.qty}</td>
              <td>¥{product.priceRMB.toFixed(2)}</td>
              <td>{product.material}</td>
              <td className="text-primary">¥{product.total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
              <td><img src={product.dimensionPic} alt="Dimension" style={{ height: 28 }} /></td>
              <td>
                <button className="btn btn-sm btn-primary me-2 rounded-pill"><i className="bi bi-pencil-square"></i></button>
                <button className="btn btn-sm btn-outline-danger rounded-pill"><i className="bi bi-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container-fluid px-2 px-md-4 py-4" style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Header */}
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 gap-2">
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 22, marginBottom: 2 }}>Product Catalog</h2>
          <div style={{ fontSize: 13, color: '#6b7280' }}>Manage your products and inventory</div>
        </div>
        <div className="d-flex gap-2 flex-wrap">
          <button
            className={toggleBtn('cards')}
            onClick={() => setViewMode('cards')}
            type="button"
            style={{ minWidth: 90, fontSize: 12, borderRadius: 8, fontWeight: 600, padding: '8px 18px' }}
          >
            <i className="bi bi-grid-3x3-gap-fill me-1"></i> Cards
          </button>
          <button
            className={toggleBtn('table')}
            onClick={() => setViewMode('table')}
            type="button"
            style={{ minWidth: 90, fontSize: 12, borderRadius: 8, fontWeight: 600, padding: '8px 18px' }}
          >
            <i className="bi bi-table me-1"></i> Table
          </button>
          <Link to="/seller/product/create">
            <button className="btn" style={{ background: '#2563eb', color: '#fff', borderRadius: 8, padding: '8px 24px', fontWeight: 600, fontSize: 16, border: 'none', height: 42, boxShadow: '0 1px 4px #2563eb22' }}>
              + Add Product
            </button>
          </Link>
        </div>
      </div>
      {viewMode === 'cards' ? renderCards() : renderTable()}
    </div>
  );
}

export default ProductCatalog;