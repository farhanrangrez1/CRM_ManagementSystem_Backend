import React, { useState } from 'react';

function ProductCreate() {
  const [form, setForm] = useState({
    no: '',
    modelNo: '',
    pic: '',
    code: '',
    qty: '',
    priceRMB: '',
    material: '',
    dimensionPic: '',
  });

  const total = Number(form.qty) * Number(form.priceRMB) || 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { ...form, total };
    console.log('Product Created:', productData);
    alert('Product Created! Check console for details.');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-10">
          <div className="card shadow border-0 rounded-4 p-4" style={{ background: '#f8fafc' }}>
            <h2 className="fw-bold mb-4 text-center" style={{ letterSpacing: 1 }}>Create New Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                {/* Left column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">No</label>
                    <input type="number" className="form-control rounded-pill" name="no" value={form.no} onChange={handleChange} placeholder="1" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Model No</label>
                    <input type="text" className="form-control rounded-pill" name="modelNo" value={form.modelNo} onChange={handleChange} placeholder="1116" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Code</label>
                    <input type="text" className="form-control rounded-pill" name="code" value={form.code} onChange={handleChange} placeholder="25005" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Material</label>
                    <input type="text" className="form-control rounded-pill" name="material" value={form.material} onChange={handleChange} placeholder="STEEL ZINC PLATED" required />
                  </div>
                </div>
                {/* Right column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Quantity</label>
                    <input type="number" className="form-control rounded-pill" name="qty" value={form.qty} onChange={handleChange} placeholder="100" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Price (RMB)</label>
                    <input type="number" step="0.01" className="form-control rounded-pill" name="priceRMB" value={form.priceRMB} onChange={handleChange} placeholder="16.00" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Total</label>
                    <input type="text" className="form-control rounded-pill bg-light" value={total.toLocaleString(undefined, { minimumFractionDigits: 2 })} readOnly />
                  </div>
                </div>
                {/* Image fields full width */}
                <div className="col-12">
                  <div className="row g-3 align-items-end">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Product Image URL</label>
                      <div className="input-group">
                        <input type="url" className="form-control rounded-start-pill" name="pic" value={form.pic} onChange={handleChange} placeholder="https://..." required />
                        <span className="input-group-text bg-white rounded-end-pill px-2" style={{ borderLeft: 'none' }}>
                          {form.pic ? (
                            <img src={form.pic} alt="Product Preview" style={{ height: 36, width: 36, objectFit: 'contain', background: '#fff', borderRadius: 4, border: '1px solid #eee' }} />
                          ) : (
                            <span style={{ color: '#bbb', fontSize: 12 }}>Preview</span>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Dimension Image URL</label>
                      <div className="input-group">
                        <input type="url" className="form-control rounded-start-pill" name="dimensionPic" value={form.dimensionPic} onChange={handleChange} placeholder="https://..." required />
                        <span className="input-group-text bg-white rounded-end-pill px-2" style={{ borderLeft: 'none' }}>
                          {form.dimensionPic ? (
                            <img src={form.dimensionPic} alt="Dimension Preview" style={{ height: 32, width: 36, objectFit: 'contain', background: '#fff', borderRadius: 4, border: '1px solid #eee' }} />
                          ) : (
                            <span style={{ color: '#bbb', fontSize: 12 }}>Preview</span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Submit button */}
                <div className="col-12 mt-4 text-center">
                  <button type="submit" className="btn btn-primary px-5 py-2 fw-semibold rounded-pill shadow-sm" style={{ fontSize: 18, letterSpacing: 1 }}>Create Product</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;