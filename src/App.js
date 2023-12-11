import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Catalog from './Catalog/catalog';
import Footer from './home/footer';
import Item from './Catalog/item_page';
import Card from './Cart/cart';


function App() {
    return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="/perfumes" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/item/:itemId" element={<Item />} />
                        <Route path="/cart" element={<Card />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
    );
}

export default App;



