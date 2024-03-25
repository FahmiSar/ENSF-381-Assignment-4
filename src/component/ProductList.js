import React from 'react';
import productData from "../data/products";
import ProductItem from './ProductItem';

function ProductList({addToCart}) {

  return (
    <div className="product-list">
      {productData.map(product => (
        <ProductItem key={product.id} product={product} addToCart = {addToCart}/>
      ))}
    </div>
  );
};

export default ProductList;
