import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './item_page.css';

function ItemPage() {
    const { itemId } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/perfumesbd/${itemId}`);
                setSelectedItem(response.data);
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };

        fetchItem();
    }, [itemId]);

    const handleAddToCart = () => {
        if (selectedItem) {
            console.log(`Added ${quantity} ${selectedItem.title} ${selectedMl}ml to the cart.`);
        }
    };

    const [selectedItem, setSelectedItem] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedMl, setSelectedMl] = useState(50); 

    if (!selectedItem) {
        return <div>Item not found</div>;
    }

    return (
        <div className='selected_container'>
            <img className='selected_image' src={`http://localhost:3001${selectedItem.image}`} alt={selectedItem.title} />
            <p className='selected_caption1'>{selectedItem.caption1}</p>
            <p className='selected_caption2'>{selectedItem.caption2}</p>
            <p className='selected_caption4'>Price: {selectedItem.caption4}</p>
            
            <label htmlFor="quantity">Quantity:</label>
            <input
                className='quantity'
                type="number"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            />

            <label htmlFor="ml">Select ml:</label>
            <select className='ml'
                name="ml"
                value={selectedMl}
                onChange={(e) => setSelectedMl(parseInt(e.target.value, 10))}
            >
                <option value={50}>50ml</option>
                <option value={100}>100ml</option>
                <option value={200}>200ml</option>
            </select>

            <Link to="/catalog">
                <button className='back'>Go Back</button>
            </Link>

            <button className='add' onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ItemPage;





