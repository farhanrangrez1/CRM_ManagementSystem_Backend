import React, { useState } from 'react';
import styles from './Signup.module.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        role: 'user',
        country: '',
        state: '',
        profileImage: null,
        accessLevel: 'fullAccess',
        permissions: {
            clientManagement: false,
            projectManagement: false,
            designTools: false,
            financialManagement: false,
            userManagement: false,
            reportGeneration: false,
            systemSettings: false,
            dashboardAccess: true
        }
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (name.startsWith('permissions.')) {
            const permissionKey = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                permissions: {
                    ...prev.permissions,
                    [permissionKey]: checked
                }
            }));
        } else if (type === 'file') {
            setFormData({ ...formData, profileImage: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate and send to backend
        console.log(formData);
    };

    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="row w-100 justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="card shadow-lg border-0 rounded-4 p-4">
                        <div className={styles['signup-title'] + " text-center mb-4 fw-bold"}>Sign Up</div>
                        <form className={styles['signup-form']} onSubmit={handleSubmit} encType="multipart/form-data">
                            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
                            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
                            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                            <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                            <div style={{ position: 'relative', marginBottom: '16px' }}>
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                    className="form-control"
                                    style={{ paddingRight: '40px' }}
                                />
                                <span
                                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 2 }}
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                </span>
                            </div>
                            <div style={{ position: 'relative', marginBottom: '16px' }}>
                                <input
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                    required
                                    className="form-control"
                                    style={{ paddingRight: '40px' }}
                                />
                                <span
                                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', zIndex: 2 }}
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                </span>
                            </div>
                            <select name="role" value={formData.role} onChange={handleChange}>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="manager">Manager</option>
                            </select>
                            <input name="country" value={formData.country} onChange={handleChange} placeholder="Country" required />
                            <input name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
                            <input name="profileImage" type="file" accept="image/*" onChange={handleChange} />


                            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold mt-4" style={{ borderRadius: '6px' }}>
                                Sign Up
                            </button>




                        </form>
                        <div className='text-center mt-3'>
                            <span className="text-secondary">Already have an account?</span>
                            <a href="/" className="ms-1 text-primary text-decoration-none fw-semibold">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
