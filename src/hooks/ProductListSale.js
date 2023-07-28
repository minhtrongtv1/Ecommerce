import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductSaleCard from '../components/ProductSaleCard';


const ProductListSale = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://64b7944221b9aa6eb0787b0e.mockapi.io/api/v1/Product_sale');
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
        <ProductSaleCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListSale;