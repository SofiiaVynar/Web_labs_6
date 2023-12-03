import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Catalog from './Catalog/catalog';
import Footer from './home/footer';
import Item from './Catalog/item_page';
import Card from './Cart/cart';
import store from './Cart/store';
import { Provider } from 'react-redux';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/perfumes" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="item/:itemId" element={<Provider store={store}><Item /></Provider>} />
                    <Route path="/cart" element={<Provider store={store}><Card /></Provider>} />
                </Routes>
                <Footer /> 
            </div>
        </Router>
    );
}

export default App;



