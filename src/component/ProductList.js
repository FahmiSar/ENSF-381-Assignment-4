import React, {useState} from 'react';
import ProductItem from './ProductItem';
import cartItem from './CartItem';
import productData from "../data/products";

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
