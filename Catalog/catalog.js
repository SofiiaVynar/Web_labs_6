// catalog.js
import React, { useState } from 'react';
import CatalogItems from './catalog_items';
import CatalogFilter from './catalog_filter';
import Header from './catalog_header';

function Catalog() {
    const [filters, setFilters] = useState({
        filter1: '',
        filter2: '',
        filter3: '',
    });

    const [searchTerm, setSearchTerm] = useState('');

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div>
            <Header onSearch={handleSearch} />
            <h1>Catalog Page</h1>
            <CatalogFilter onApply={handleApplyFilters} />
            <CatalogItems filters={filters} searchTerm={searchTerm} />
        </div>
    );
}

export default Catalog;





