import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/MainScreen.css";

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <div className="about-container">
            <header className="header">
                <h1>Welcome to Wildheart Sanctuary</h1>
                <p>Connecting donors with shelters in need</p>
            </header>

            <main className="main-content">
                <section className="about-section">
                    <h2>About Us</h2>
                    <p>
                        ShelterConnect is a platform dedicated to helping shelters connect with donors.
                        Our mission is to provide an easy and effective way for shelters to receive the
                        support they need, whether through donations, supplies, or volunteering.
                    </p>
                </section>
                
                <section className="features-section">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>📦 Easily donate supplies to shelters in need</li>
                        <li>💰 Contribute financial support with transparency</li>
                        <li>🤝 Connect directly with shelters to learn their needs</li>
                        <li>📍 Find shelters near your location</li>
                    </ul>
                </section>

                <nav className="navigation-menu">
                    <button className="nav-button" onClick={() => navigate("/user-registration")}>
                        Register as User
                    </button>
                    <button className="nav-button" onClick={() => navigate("/shelter-registration")}>
                        Register as Shelter
                    </button>
                    <button className="nav-button" onClick={() => navigate("/login")}>
                        Login
                    </button>
                </nav>
            </main>

            <footer className="footer">
                <p>&copy; 2025 ShelterConnect. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;
