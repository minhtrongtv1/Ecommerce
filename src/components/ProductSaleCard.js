// ProductSaleCard.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faTags } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const ProductSaleCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`star-icon ${i <= rating ? 'active' : ''}`}
          onClick={() => handleRating(i)}
        />
      );
    }
    return stars;
  };

  const navigateToProductDetail = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className="col-3 product-card">
      <div className="product-image">
        <div className="image-wrapper">
          <Link to={`/products/${product.id}`} className="image-container">
            <img
              src={product.image}
              alt="productimage"
              className="img-fluid"
              onClick={navigateToProductDetail}
              style={{ cursor: 'pointer' }}
            />
            <div className="sale-tag">
              <FontAwesomeIcon icon={faTags} className="sale-icon" />
              <span className="sale-text">Sale</span>
            </div>
          </Link>
          <div
            className={`favorite-icon ${isFavorite ? 'active' : ''}`}
            onClick={toggleFavorite}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          </div>
        </div>
      </div>
      <div className="product-details">
        <h4 className="product-title">{product.name}</h4>
        <div className="rating-container">
          {renderStars()}
          <p className="selected-rating">{rating} stars</p>
        </div>
        <div className="product-price">
          <span className="price-old">${product.priceold}</span>
          <br />
          <span className="price-new">${product.pricenew}</span>
          <br />
          <span className='description'>{product.description}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductSaleCard;