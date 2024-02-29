// components/ProductTile.tsx
import React from 'react';

interface ProductTileProps {
    imageUrl: string;
    title: string;
    discount: number;
    price: string;
    rating: number;
    details: string;
  }
  
  const ProductTile: React.FC<ProductTileProps> = ({ imageUrl, title, discount, price, rating, details }) => {
    return (
      <div className="product-tile">
        <img src={imageUrl} alt={title} />
        <div className="product-details">
          <h3>{title}</h3>
          <p>{discount}% {price}</p>
          <p>Rating: {rating}</p>
          <p>{details}</p>
        </div>
      </div>
    );
  }
  
  export default ProductTile;
  