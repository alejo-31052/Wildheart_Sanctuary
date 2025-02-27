import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Registration.css";

const ShelterLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Shelter Logged In:", formData);
    };

    return (
        <div className="registration-container">
            <header className="header">
                <h1>Shelter Login</h1>
            </header>
            <main className="main-content">
                <form className="registration-form" onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" className="styled-input" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" className="styled-input" value={formData.password} onChange={handleChange} required />
                    <button type="submit" className="btn full-width">Login</button>
                </form>
                <p>
                    <button className="link-button" onClick={() => navigate("/shelter-registration")}>Don't have an account? Register here!</button>
                </p>
                <p>
                    <button className="link-button" onClick={() => navigate("/login")}>Are you a user? Login here!</button>
                </p>
            </main>
            <footer className="footer">
                <p>&copy; 2025 OurPlatform. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ShelterLogin;