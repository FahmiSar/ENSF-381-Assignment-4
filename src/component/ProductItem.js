import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}</p>
        {showDetails && (
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        )}
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
