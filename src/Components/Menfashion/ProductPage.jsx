import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Listing.css';

const ProductPage = ({ product }) => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.value || '');
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleSizeSelect = (size) => setSelectedSize(size);
  const handleImageSelect = (image) => setSelectedImage(image);
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setQuantity(Math.max(1, Math.min(10, value)));
    }
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
    alert(`Added ${quantity} ${product.name} (Size: ${selectedSize}) to cart.`);
  };

  const handleBuyNow = () => {
    navigate('/checkout', { 
      state: { 
        product: {
          ...product,
          selectedSize: product.sizes.find(s => s.value === selectedSize)?.label || selectedSize
        }, 
        quantity, 
        selectedSize 
      } 
    });
  };

  return (
    <div className="product-page-container">
      <div className="product-page-content">
        {/* Left Section: Images */}
        <div className="product-image-section">
          <div className="product-main-image-wrapper">
            <img
              src={selectedImage}
              alt={product.name}
              className="product-main-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/500x600/cccccc/333333?text=Image+Not+Found";
              }}
            />
          </div>
          <div className="product-thumbnail-wrapper">
            {product.thumbnailImages?.map((img, index) => (
              <div
                key={index}
                className={`product-thumbnail ${
                  selectedImage === img ? 'product-thumbnail-selected' : ''
                }`}
                onClick={() => handleImageSelect(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="product-thumbnail-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/60x70/cccccc/333333?text=Error";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="product-details-section">
          <button 
            className={`wishlist-button ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlistToggle}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {isWishlisted ? '❤️' : '♡'}
          </button>
          
          <div className="product-brand-link">Visit the {product.brand} Store</div>
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-rating-section">
            <div className="product-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            <span className="product-rating">{product.rating}</span>
            <span className="product-rating-count">({product.reviewsCount} ratings)</span>
          </div>
          
          <p className="product-bought-info">{product.boughtInPastMonth}+ bought in past month</p>
          
          <div className="product-pricing-section">
            <div className="product-discount">-{product.discountPercentage}%</div>
            <div className="product-discounted-price">
              ₹{product.discountedPrice.toLocaleString('en-IN')}
            </div>
            <p className="product-original-price">
              M.R.P.: <span className="product-original-price-strike">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            </p>
          </div>

          {/* Size selection */}
          <div className="product-size-selection">
            <label htmlFor="size-select">Size:</label>
            <div className="size-options">
              {product.sizes.map((sizeOption) => (
                <button
                  key={sizeOption.value}
                  className={`size-button ${selectedSize === sizeOption.value ? 'selected' : ''}`}
                  onClick={() => handleSizeSelect(sizeOption.value)}
                >
                  {sizeOption.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="product-quantity-section">
            <label htmlFor="quantity" className="product-quantity-label">Quantity:</label>
            <select
              id="quantity"
              className="product-quantity-dropdown"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {[...Array(10).keys()].map(i => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="product-buttons-section">
            <button 
              className={`product-add-to-cart-button ${isAddedToCart ? 'added' : ''}`} 
              onClick={handleAddToCart}
            >
              {isAddedToCart ? 'Added!' : 'Add to Cart'}
            </button>
            <button className="product-buy-now-button" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          {/* Delivery & Seller */}
          <div className="product-delivery-seller-info">
            <p>
              <span className="info-label">Delivery:</span> {product.deliveryDate}{' '}
              <span className="info-detail">({product.deliveryCharge})</span>
            </p>
            <p>
              <span className="info-label">Sold by:</span> {product.seller}
            </p>
            {product.openBoxEligible && (
              <p className="open-box-eligible">Open-box Delivery Eligible</p>
            )}
          </div>

          {product.offers?.length > 0 && (
            <div className="product-offers-section">
              <h3>Offers</h3>
              {product.offers.map((offer, index) => (
                <div key={index} className="offer-item">
                  <span className="offer-type">{offer.type}: </span>
                  <span className="offer-description">{offer.description}</span>
                </div>
              ))}
            </div>
          )}

          {/* Additional Product Details */}
          <div className="product-additional-details">
            <h3>Product Details</h3>
            <p>
              <span className="detail-label">Material Composition:</span>{' '}
              {product.materialComposition}
            </p>
            <p>
              <span className="detail-label">Variant:</span> {product.variant}
            </p>
            <p>
              <span className="detail-label">EMI starts at:</span> ₹{product.emiStartsAt}
            </p>
            <p>
              <span className="detail-label">Protect Promise Fee:</span> ₹{product.protectPromiseFee}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;