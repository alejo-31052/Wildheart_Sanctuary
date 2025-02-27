import React, { useState } from "react";
import UserRegistration from "../Registration-pages/UserRegistration";
import ShelterRegistration from "../Registration-pages/ShelterRegistration";
import UserLogin from "../Login-pages/UserLogin";
import ShelterLogin from "../Login-pages/ShelterLogin";
import "../Registration.css";

const RegistrationPage = ({ onLogin }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    return (
        <div className="registration-container">
            <header className="header">
                <h1>Welcome to Our Platform</h1>
            </header>
            <main className="main-content">
                {!selectedOption ? (
                    <div className="options">
                        <button onClick={() => { setSelectedOption("user"); setIsLoggingIn(false); }} className="btn">Register as User</button>
                        <button onClick={() => { setSelectedOption("shelter"); setIsLoggingIn(false); }} className="btn">Register as Shelter</button>
                        <p><a href="#" onClick={() => { setSelectedOption("user"); setIsLoggingIn(true); }}>Already registered? Login here!</a></p>
                    </div>
                ) : (
                    <div className="form-container">
                        {isLoggingIn ? (
                            selectedOption === "user" ? 
                                <UserLogin showShelterLink={true} onShelterLogin={() => setSelectedOption("shelter")} inputClass="styled-input" onLogin={onLogin} /> 
                                : <ShelterLogin inputClass="styled-input" onLogin={onLogin} />
                        ) : (
                            selectedOption === "user" ? <UserRegistration inputClass="styled-input" /> : <ShelterRegistration inputClass="styled-input" />
                        )}
                        <button className="back-button" onClick={() => setSelectedOption(null)}>Back</button>
                    </div>
                )}
            </main>
            <footer className="footer">
                <p>&copy; 2025 OurPlatform. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default RegistrationPage;
