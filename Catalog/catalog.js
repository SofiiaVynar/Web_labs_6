import React, { useState } from 'react';
import CatalogItems from './catalog_items';
import CatalogFilter from './catalog_filter';
import Header from './catalog_header'

function Catalog() {
    const [filters, setFilters] = useState({
        filter1: '',
        filter2: '',
        filter3: '',
    });

    const handleApplyFilters = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div>
            <Header />
            <h1>Catalog Page</h1>
            <CatalogFilter onApply={handleApplyFilters} />
            <CatalogItems filters={filters} /> 
        </div>
    );
}

export default Catalog;





