import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatalogFilter from './catalog_filter';
import Header from './catalog_header';
import './catalog_items.css';
import { Link } from 'react-router-dom';
import Loader from './Loader';

function Catalog() {
    const [perfumes, setPerfumes] = useState([]);
    const [filters, setFilters] = useState({
        filter1: '',
        filter2: '',
        filter3: '',
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true); 

    const handleApplyFilters = async (newFilters) => {
        try {
            setLoading(true);
            setTimeout(async () => {
                const response = await axios.get('http://localhost:3001/perfumesbd', {
                    params: { ...newFilters },
                });
                setPerfumes(response.data);
                setFilters(newFilters);
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    };
    

    const handleSearch = (term) => {
        setLoading(true);
        setSearchTerm(term);
    };
    

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setLoading(true); 
                const response = await axios.get('http://localhost:3001/perfumesbd', {
                    params: { ...filters, searchTerm },
                });
                setPerfumes(response.data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false); 
            }
        };
    
        const delayLoader = setTimeout(() => {
            fetchItems();
            clearTimeout(delayLoader); 
        }, 1000); 
    
        return () => clearTimeout(delayLoader); 
    }, [searchTerm, filters]);

    return (
        <div>
            <Header onSearch={handleSearch} />
            <h1>Catalog Page</h1>
            <CatalogFilter onApply={handleApplyFilters} />
            {loading ? (
                <Loader />
            ) : (
                <div className="catalog-items">
                    {perfumes.map((item) => (
                        <div key={item.id} className="catalog-item">
                            <div className='texts'>
                                <h2>{item.title}</h2>
                                <img src={`/Fotoes/${item.image}`} alt={item.title} />
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
            )}
        </div>
    );
}

export default Catalog;
