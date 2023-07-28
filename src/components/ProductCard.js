import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(0);

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

  return (
    <div className="col-3 product-card">
      <div className="product-image">
        <div className="image-wrapper">
          <div className="image-container">
            <img src={product.image} alt="productimage" className="img-fluid" />
          </div>
          <div className={`favorite-icon ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
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
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;