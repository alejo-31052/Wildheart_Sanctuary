import React, { useState } from "react";
import shelters from "../src/shelterData";
import "../src/HomeScreen.css";

const HomeScreen = ({ onLogout }) => {
    const [search, setSearch] = useState("");
    const [filterBy, setFilterBy] = useState("name");

    const filteredShelters = shelters.filter(shelter =>
        shelter[filterBy].toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="home-screen">
            <header className="header">
                <h1>Find a Shelter</h1>
                <div className="filters-container">
                    <input
                        type="text"
                        placeholder={`Search by ${filterBy}...`}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="styled-input"
                    />
                    <select onChange={(e) => setFilterBy(e.target.value)} className="styled-input">
                        <option value="name">Name</option>
                        <option value="needs">Needs</option>
                        <option value="city">City</option>
                    </select>
                </div>
            </header>

            <div className="shelter-list">
    {filteredShelters.length > 0 ? (
        filteredShelters.map(shelter => (
            <div key={shelter.id} className="shelter-card">
                <h3>{shelter.name}</h3>
                <p><strong>Needs:</strong> {shelter.needs}</p>
                <p><strong>City:</strong> {shelter.city}</p>
            </div>
        ))
    ) : (
        <p>No shelters found.</p>
    )}
</div>


            <button className="logout-button" onClick={onLogout}>Logout</button>
        </div>
    );
};

export default HomeScreen;
