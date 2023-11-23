import React from 'react';
import logo from './Fotoes/logo.png';
import './home_header.css';

function Header() {
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
        </header>
    );
}

export default Header;


