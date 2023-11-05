import React, { useState } from 'react';
import logo from '../home/Fotoes/logo.png';
import './catalog_header.css';
import searchIcon from './Fotoes/loupe.png';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Search for:', searchTerm);
    };

    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul className="menu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/catalog">Catalog</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt="Search"
                    className="search-icon"
                    onClick={handleSearch}
                />
            </div>
        </header>
    );
}

export default Header;

