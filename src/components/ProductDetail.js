import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetail = async () => {
      try {
        const response = await fetch(`https://64b7944221b9aa6eb0787b0e.mockapi.io/api/v1/Product_sale/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product detail:', error);
      }
    };

    getProductDetail();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="home-wrapper-1 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="main-banner position-relative p-3">
              <img src={product.image} className="img-fluid rounded-3" alt="Product" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-banner-content position-relative d-flex flex-column justify-content-end p-3">
              <h5 className="text-black">{product.name}</h5>
              <h4 className="text-black">Description: {product.description}</h4>
              <p className="text-black">Price: ${product.pricenew}</p>
              <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
