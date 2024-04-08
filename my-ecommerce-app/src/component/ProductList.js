import React, {useState, useEffect} from 'react';
import ProductItem from './ProductItem';

function ProductList({addToCart}) {

  const [productsData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try{
      const response = await fetch("http://127.0.0.1:5000/products");
      
      if(response.ok){
        const data = await response.json();
        const dataArray = [data];
        setProductData(dataArray);
        setLoading(false);

      }else{
        throw new Error("failed to fetch products");
      }

    }catch(error){
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if(loading){
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list">
      {productsData[0].products.map(product => (
        <ProductItem key={product.id} product={product} addToCart = {addToCart}/>
      ))}
    </div>
  );
};

export default ProductList;
