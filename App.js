import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Catalog from './Catalog/catalog';
import Footer from './home/footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/perfumes" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>
                <Footer /> 
            </div>
        </Router>
    );
}

export default App;



