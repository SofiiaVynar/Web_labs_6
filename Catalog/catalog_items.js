import React from 'react';
import dior from './Fotoes/dior.png';
import boss from './Fotoes/Boss.png';
import helene from './Fotoes/helene1.png';
import man from './Fotoes/man.png';
import './catalog_items.css'

function CatalogItems() {
    const items = [
        {
            title: 'Новинка',
            image: dior,
            caption1: 'Hypnotic beaty',
            caption2: 'Dior',
            caption4: '3740 ₴',
        },
        {
            title: 'Новинка',
            image: boss,
            caption1: 'Bottled night',
            caption2: 'Hugo Boss',
            caption4: '3369 ₴',
        },
        {
            title: 'Хіт продаж',
            image: helene,
            caption1: 'Me, Myself & You',
            caption2: 'Helene Fischer',
            caption4: '1000 ₴',
            caption1margin: '30px',
        },
        {
            title: 'Хіт продаж',
            image: man,
            caption1: 'Sauvage',
            caption2: 'Dior',
            caption4: '6156 ₴',
        },
    ];

    return (
        <div className="catalog-items">
            {items.map((item, index) => (
                <div key={index} className="catalog-item">
                    <div className='texts'>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} />
                    <p style={{ marginTop: item.caption1margin || '0' }} className='caption1'>{item.caption1}</p>
                    <p className='caption2'>{item.caption2}</p>
                    <p className='caption3'>Price:</p>
                    <p className='caption4'>{item.caption4}</p>
                    <button className='catalog-view'>View More</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CatalogItems;
