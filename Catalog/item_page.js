import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import dior from './Fotoes/dior1.png';
import boss from './Fotoes/Boss.png';
import helene from './Fotoes/helene1.png';
import man from './Fotoes/man.png';
import './item_page.css';

function ItemPage() {
    const { itemId } = useParams();

    const items = [
        {
            image: dior,
            caption1: 'Hypnotic beauty',
            caption2: 'Dior',
            caption4: '3740 ₴',
        },
        {
            image: boss,
            caption1: 'Bottled night',
            caption2: 'Hugo Boss',
            caption4: '3369 ₴',
        },
        {
            image: helene,
            caption1: 'Me, Myself & You',
            caption2: 'Helene Fischer',
            caption4: '999 ₴',
            caption1margin: '30px',
        },
        {
            image: man,
            caption1: 'Sauvage',
            caption2: 'Dior',
            caption4: '6156 ₴',
        },
    ];

    const selectedItem = items[parseInt(itemId, 10) - 1];
    const [quantity, setQuantity] = useState(1);
    const [selectedMl, setSelectedMl] = useState(50); 

    const handleAddToCart = () => {
        console.log(`Added ${quantity} ${selectedItem.title} ${selectedMl}ml to the cart.`);
    };

    if (!selectedItem) {
        return <div>Item not found</div>;
    }

    return (
        <div className='selected_container'>
            <img className='selected_image' src={selectedItem.image} alt={selectedItem.title} />
            <p className='selected_caption1'>{selectedItem.caption1}</p>
            <p className='selected_caption2'>{selectedItem.caption2}</p>
            <p className='selected_caption4'>Price: {selectedItem.caption4}</p>
            
            <label htmlFor="quantity">Quantity:</label>
            <input
                className='quantity'
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
            />

            <label htmlFor="ml">Select ml:</label>
            <select className='ml'
                id="ml"
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





