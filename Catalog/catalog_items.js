import React from 'react';
import dior from './Fotoes/dior.png';
import boss from './Fotoes/Boss.png';
import helene from './Fotoes/helene1.png';
import man from './Fotoes/man.png';
import './catalog_items.css';
import { Link } from 'react-router-dom';

function CatalogItems({ filters, searchTerm }) {
    const items = [
        {
            id: 1,
            title: 'Новинка',
            image: dior,
            caption1: 'Hypnotic beaty',
            caption2: 'Dior',
            caption4: '3740 ₴',
        },
        {
            id:2,
            title: 'Новинка',
            image: boss,
            caption1: 'Bottled night',
            caption2: 'Hugo Boss',
            caption4: '3369 ₴',
        },
        {
            id: 3,
            title: 'Хіт продаж',
            image: helene,
            caption1: 'Me, Myself & You',
            caption2: 'Helene Fischer',
            caption4: '999 ₴',
            caption1margin: '30px',
        },
        {
            id:4,
            title: 'Хіт продаж',
            image: man,
            caption1: 'Sauvage',
            caption2: 'Dior',
            caption4: '6156 ₴',
        },
    ];

    const filteredItems = items.filter((item) => {
        const filter1Condition =
            filters.filter1 === '' || (filters.filter1 === 'Item1' && Number(item.caption4.replace(/\D/g, '')) < 1000) ||
            (filters.filter1 === 'Item2' && Number(item.caption4.replace(/\D/g, '')) <= 3000) ||
            (filters.filter1 === 'Item3' && Number(item.caption4.replace(/\D/g, '')) > 3000);

        const filter2Condition =
            filters.filter2 === '' ||
            (filters.filter2 === 'Item1' && item.title === 'Новинка') ||
            (filters.filter2 === 'Item2' && item.title === 'Хіт продаж');

        const filter3Condition =
            filters.filter3 === '' ||
            (filters.filter3 === 'Item1' && item.caption2 === 'Dior') ||
            (filters.filter3 === 'Item2' && item.caption2 === 'Hugo Boss') ||
            (filters.filter3 === 'Item3' && item.caption2 === 'Helene Fischer');


        const searchCondition =
            searchTerm === '' || item.caption1.toLowerCase().includes(searchTerm.toLowerCase());

        return filter1Condition && filter2Condition && filter3Condition && searchCondition;
    });

    return (
        <div className="catalog-items">
            {filteredItems.map((item, index) => (
                <div key={item.id} className="catalog-item">
                    <div className='texts'>
                        <h2>{item.title}</h2>
                        <img src={item.image} alt={item.title} />
                        <p style={{ marginTop: item.caption1margin || '0' }} className='caption1'>{item.caption1}</p>
                        <p className='caption2'>{item.caption2}</p>
                        <p className='caption3'>Price:</p>
                        <p className='caption4'>{item.caption4}</p>
                        <Link to={`/item/${item.id}`} className='catalog-view'>
                            View More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CatalogItems;
