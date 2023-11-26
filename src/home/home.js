import React, { useState } from 'react';
import Header from './home_header';
import Heading from './home_heading';
import ProductItem from './home_productItem';
import './home.css';
import women from './Fotoes/women.png';
import man from './Fotoes/man.png';
import OIP from './Fotoes/OIP.jpg';
import kids from './Fotoes/kids.png';
import testers from './Fotoes/tester.png';
import sprays from './Fotoes/Body_spray.png';

function Home() {
    const [showAdditionalPerfumes, setShowAdditionalPerfumes] = useState(false);

    const additionalPerfumes = [
        { image: kids, text1: 'Для дітей', text2: 'Дитячі парфуми' },
        { image: sprays, text1: 'Спреї для тіла', text2: 'Спреї для тіла' },
        { image: testers, text1: 'Тестери', text2: 'Парфуми 33ml' },
    ];

    const handleViewMoreClick = () => {
        setShowAdditionalPerfumes(true);
    };

    return (
        <div>
            <Header />
            <Heading />
            <div className="product-list">
                <ProductItem image={women} text1="Для неї" text2="Жіночі парфуми" />
                <ProductItem image={man} text1="Для нього" text2="Чоловічі парфуми" />
                <ProductItem image={OIP} text1="Анонси" text2="Новинки осені" />

                {showAdditionalPerfumes &&
                    additionalPerfumes.map((perfume, index) => (
                        <ProductItem key={index} image={perfume.image} text1={perfume.text1} text2={perfume.text2} />
                    ))}
            </div>
            <div className="button-container">
                <button onClick={handleViewMoreClick}>View More</button>
            </div>
        </div>
    );
}

export default Home;

