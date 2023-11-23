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
                <option value="">Об'єм</option>
                <option value="Item1">30мл</option>
                <option value="Item2">50мл</option>
                <option value="Item3">100мл</option>
            </select>

            <select value={filter3} onChange={(e) => setFilter3(e.target.value)}>
                <option value="">Для кого</option>
                <option value="Item1">Для неї</option>
                <option value="Item2">Для нього</option>
            </select>
            <div className="button">
                <button onClick={handleApply}>Apply</button>
            </div>
        </div>
    );
}

export default CatalogFilter;

