import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home';
import Catalog from './Catalog/catalog';
import Footer from './home/footer';
import Item from './Catalog/item_page';
import Card from './Cart/cart';
import LoginForm from './Cart/login';
import RegistrationForm from './Cart/registration';
import Successful from './Cart/successPage';
import { isAuthenticated } from './auth';

function App() {
    const isUserAuthenticated = isAuthenticated();

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={isUserAuthenticated ? <Home /> : <LoginForm />} />
                    <Route path="/perfumes" element={isUserAuthenticated ? <Home /> : <LoginForm />} />
                    <Route path="/home" element={isUserAuthenticated ? <Home /> : <LoginForm />} />
                    <Route path="/catalog" element={isUserAuthenticated ? <Catalog /> : <LoginForm />} />
                    <Route path="/item/:itemId" element={isUserAuthenticated ? <Item /> : <LoginForm />} />
                    <Route path="/cart" element={isUserAuthenticated ? <Card /> : <LoginForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/registration" element={<RegistrationForm />} />
                    <Route path="/successful" element={<Successful/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;



