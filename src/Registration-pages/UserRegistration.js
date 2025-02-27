import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Registration.css";

const UserRegistration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Registered:", formData);
    };

    return (
        <div className="registration-container">
            <header className="header">
                <h1>User Registration</h1>
            </header>
            <main className="main-content">
                <form className="registration-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" className="styled-input" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" className="styled-input" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" className="styled-input" value={formData.password} onChange={handleChange} required />
                    <button type="submit" className="btn full-width">Register</button>
                </form>
                <p>
                    <button className="link-button" onClick={() => navigate("/login")}>Already have an account? Login here!</button>
                </p>
            </main>
            <footer className="footer">
                <p>&copy; 2025 OurPlatform. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default UserRegistration;
