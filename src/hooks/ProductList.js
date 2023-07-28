import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://64b7944221b9aa6eb0787b0e.mockapi.io/api/v1/Product');
      setProductData(response.data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;