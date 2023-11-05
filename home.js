import React from 'react';
import Header from './home_header';
import Heading from './home_heading';
import ProductItem from './home_productItem';
import Footer from './home_footer';
import './home.css';
import women from './Fotoes/women.png';
import man from './Fotoes/man.png';
import OIP from './Fotoes/OIP.jpg';

function Home() {
    return (
        <div>
            <Header />
            <Heading />
            <div className="product-list">
                <ProductItem image={women} text1="Для неї" text2="Жіночі парфуми" />
                <ProductItem image={man} text1="Для нього" text2="Чоловічі парфуми" />
                <ProductItem image={OIP} text1="Анонси" text2="Новинки осені" />
            </div>
            <div className="button-container">
                <button>View More</button>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
