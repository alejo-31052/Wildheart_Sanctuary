import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./MainScreen";
import RegistrationPage from "./Registration-pages/RegistrationPage";
import HomeScreen from "./HomeScreen";
import UserRegistration from "./Registration-pages/UserRegistration";
import ShelterRegistration from "./Registration-pages/ShelterRegistration";
import UserLogin from "./Login-pages/UserLogin";
import ShelterLogin from "./Login-pages/ShelterLogin";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AboutPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/user-registration" element={<UserRegistration />} />
                <Route path="/shelter-registration" element={<ShelterRegistration />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/shelter-login" element={<ShelterLogin />} />
            </Routes>
        </Router>
    );
};

export default App;
