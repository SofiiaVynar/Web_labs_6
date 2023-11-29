import React, { useState } from 'react';
import './catalog_filter.css';

function CatalogFilter({ onApply }) {
    const [filter1, setFilter1] = useState('');
    const [filter2, setFilter2] = useState('');
    const [filter3, setFilter3] = useState('');

    const handleApply = () => {
        onApply({
            filter1,
            filter2,
            filter3,
        });
    };


    return (
        <div className="catalog-filter">
            <select value={filter1} onChange={(e) => setFilter1(e.target.value)}>
                <option value="">Ціна</option>
                <option value="Item1">До 1000грн</option>
                <option value="Item2">До 3000грн</option>
                <option value="Item3">Більше 3000 грн</option>
            </select>


            <select value={filter2} onChange={(e) => setFilter2(e.target.value)}>
                <option value="">Тип</option>
                <option value="Новинка">Новинка</option>
                <option value="Хіт продаж">Хіт продаж</option>
            </select>

            <select value={filter3} onChange={(e) => setFilter3(e.target.value)}>
                <option value="">Виробник</option>
                <option value="Dior">Dior</option>
                <option value="Hugo Boss">Hugo Boss</option>
                <option value="Helene Fischer">Helene Fischer</option>
            </select>

            <div className="button">
                <button onClick={handleApply}>Apply</button>
            </div>
        </div>
    );
}

export default CatalogFilter;

