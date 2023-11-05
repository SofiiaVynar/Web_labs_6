import React from 'react';

function ProductItem(props) {
    const { image, text1, text2 } = props;

    return (
        <div className="product-item">
            <img src={image} alt="Product" />
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    );
}

export default ProductItem;


