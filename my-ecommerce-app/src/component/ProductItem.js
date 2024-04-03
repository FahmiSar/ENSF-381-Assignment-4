import React, { useState } from 'react';

const ProductItem = ({ product, addToCart}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleClick = () =>{
    addToCart(product);
  }

  return (
    <div className="product-item" onMouseEnter={toggleDetails} onMouseLeave={toggleDetails}>
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
        <button onClick = {handleClick}>Add to Cart</button>
        {showDetails && (
          <div className="product-description">
            <p>{product.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
