import React, { useState } from 'react'

function CouponCreate() {
  const [form, setForm] = useState({
    code: '',
    type: 'percentage',
    value: '',
    usageLimit: '',
    usageCount: 0,
    validFrom: '',
    validTo: '',
    description: '',
    status: 'active',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.code) newErrors.code = 'Coupon code required';
    if (!form.value) newErrors.value = 'Value required';
    if (!form.usageLimit) newErrors.usageLimit = 'Usage limit required';
    if (!form.validFrom) newErrors.validFrom = 'Valid from date required';
    if (!form.validTo) newErrors.validTo = 'Valid to date required';
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
    // Yahan API call kar sakte hain
    console.log('Form Data:', form);
    alert('Coupon created! (Console me data check karein)');
    setForm({
      code: '',
      type: 'percentage',
      value: '',
      usageLimit: '',
      usageCount: 0,
      validFrom: '',
      validTo: '',
      description: '',
      status: 'active',
    });
  };

  // Calculate usage percentage
  const usagePercent = form.usageLimit ? Math.round((form.usageCount / form.usageLimit) * 100) : 0;

  const RequiredStar = () => <span style={{ color: 'red', marginLeft: 2 }}>*</span>;

  return (
    <div style={{ maxWidth: 650, margin: '0 auto', padding: 24, background: '#f7f9fb', borderRadius: 14, boxShadow: '0 4px 24px #0001' }}>
      <h2 className="fw-bold text-center mb-4" style={{ letterSpacing: 1 }}>Create Coupon</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px #0001' }}>
        <div style={{ gridColumn: '1 / 2' }}>
          <label className="fw-semibold">Coupon Code <RequiredStar /></label><br />
          <input
            type="text"
            name="code"
            value={form.code}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
            placeholder="e.g. WELCOME20"
          />
          {errors.code && <div style={{ color: 'red', fontSize: 12 }}>{errors.code}</div>}
        </div>
        <div>
          <label className="fw-semibold">Type <RequiredStar /></label><br />
          <select name="type" value={form.type} onChange={handleChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}>
            <option value="percentage">Percentage</option>
            <option value="flat">Flat</option>
          </select>
        </div>
        <div>
          <label className="fw-semibold">Value <RequiredStar /></label><br />
          <input
            type="number"
            name="value"
            value={form.value}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
            placeholder={form.type === 'percentage' ? 'e.g. 20' : 'e.g. 500'}
          />
          {errors.value && <div style={{ color: 'red', fontSize: 12 }}>{errors.value}</div>}
        </div>
        <div>
          <label className="fw-semibold">Usage Limit <RequiredStar /></label><br />
          <input
            type="number"
            name="usageLimit"
            value={form.usageLimit}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
            placeholder="e.g. 1000"
          />
          {errors.usageLimit && <div style={{ color: 'red', fontSize: 12 }}>{errors.usageLimit}</div>}
        </div>
        <div>
          <label className="fw-semibold">Usage Count</label><br />
          <input
            type="number"
            name="usageCount"
            value={form.usageCount}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
            min={0}
            max={form.usageLimit || undefined}
            placeholder="e.g. 0"
          />
        </div>
        <div>
          <label className="fw-semibold">Valid From <RequiredStar /></label><br />
          <input
            type="date"
            name="validFrom"
            value={form.validFrom}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
          />
          {errors.validFrom && <div style={{ color: 'red', fontSize: 12 }}>{errors.validFrom}</div>}
        </div>
        <div>
          <label className="fw-semibold">Valid To <RequiredStar /></label><br />
          <input
            type="date"
            name="validTo"
            value={form.validTo}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
          />
          {errors.validTo && <div style={{ color: 'red', fontSize: 12 }}>{errors.validTo}</div>}
        </div>
        <div style={{ gridColumn: '1 / 3' }}>
          <label className="fw-semibold">Description</label><br />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}
            rows={2}
            placeholder="e.g. Welcome discount for new users"
          />
        </div>
        <div>
          <label className="fw-semibold">Status</label><br />
          <select name="status" value={form.status} onChange={handleChange} style={{ width: '100%', padding: 10, borderRadius: 8, border: '1.5px solid #e5e7eb', fontSize: 15 }}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div style={{ alignSelf: 'end' }}>
          <button type="submit" style={{ padding: '12px 24px', background: 'linear-gradient(90deg,#6366f1 60%,#60a5fa 100%)', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 16, boxShadow: '0 2px 8px rgba(99,102,241,0.08)' }}>
            Create Coupon
          </button>
        </div>
      </form>

      {/* Live Preview */}
      <div style={{ marginTop: 32, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001', padding: 20 }}>
        <div style={{ display: 'flex', fontWeight: 'bold', borderBottom: '1px solid #eee', paddingBottom: 8, marginBottom: 8 }}>
          <div style={{ flex: 2 }}>Coupon Code</div>
          <div style={{ flex: 2 }}>Type & Value</div>
          <div style={{ flex: 2 }}>Usage</div>
          <div style={{ flex: 2 }}>Valid Period</div>
          <div style={{ flex: 1 }}>Status</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', minHeight: 48 }}>
          <div style={{ flex: 2 }}>
            <div style={{ fontWeight: 'bold' }}>{form.code || 'COUPONCODE'}</div>
            <div style={{ fontSize: 13, color: '#555' }}>{form.description || 'Description here'}</div>
          </div>
          <div style={{ flex: 2 }}>
            <div style={{ fontWeight: 'bold' }}>{form.value ? `${form.value}${form.type === 'percentage' ? '%' : ''}` : '--'}</div>
            <div style={{ fontSize: 13, color: '#555' }}>{form.type === 'percentage' ? 'Percentage' : 'Flat'}</div>
          </div>
          <div style={{ flex: 2 }}>
            <span style={{ fontWeight: 'bold' }}>{form.usageCount} / {form.usageLimit || '--'}</span>
            <span style={{ fontSize: 13, color: '#555', marginLeft: 4 }}>({usagePercent}%)</span>
            <div style={{ height: 6, background: '#eee', borderRadius: 3, marginTop: 4, width: '80%' }}>
              <div style={{ width: `${usagePercent}%`, height: '100%', background: '#1976d2', borderRadius: 3 }}></div>
            </div>
          </div>
          <div style={{ flex: 2 }}>
            <div style={{ fontSize: 14 }}>{form.validFrom || 'YYYY-MM-DD'}</div>
            <div style={{ fontSize: 14 }}>to {form.validTo || 'YYYY-MM-DD'}</div>
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ background: form.status === 'active' ? '#28a745' : '#aaa', color: '#fff', padding: '4px 12px', borderRadius: 12, fontSize: 13 }}>
              {form.status.charAt(0).toUpperCase() + form.status.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouponCreate