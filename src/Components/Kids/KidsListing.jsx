import React, { useState, useEffect } from 'react';
import KidsproductsData from "./KidsData";
import './Listing.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="product-card">
      <button
        className={`wishlist-button ${isWishlisted ? 'active' : ''}`}
        onClick={handleWishlistToggle}
        aria-label="Toggle wishlist"
      >
        {isWishlisted ? '❤️' : '♡'}
      </button>
      <Link to={`/kids/product/${product.id}`} className="subcategory-link">
        <div className="product-image">
          <img
            src={product.mainImage || 'https://placehold.co/150'}
            alt={product.name}
            className="product-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/150";
            }}
          />
        </div>
      </Link>
      <div className="product-info">
        <h3>{product.name || 'Product Name'}</h3>
        <p className="brand">{product.brand || 'Brand'}</p>
        <div className="price">
          <span className="original-price">₹{product.originalPrice?.toFixed(2) || '0.00'}</span>
          <span className="discounted-price">₹{product.discountedPrice?.toFixed(2) || '0.00'}</span>
          <span className="discount-percentage">{product.discountPercentage}% off</span>
        </div>
        <div className="sizes">Sizes: {product.size?.join(', ') || 'N/A'}</div>
        <div className="color">Color: {product.color || 'N/A'}</div>
        <div className="rating">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < Math.floor(product.rating) ? 'filled' : ''}>
              {i < Math.floor(product.rating) ? '★' : '☆'}
            </span>
          ))}
          <span>({product.reviewsCount || '0'})</span>
        </div>
      </div>
      {product.newArrival && <span className="badge">New</span>}
    </div>
  );
};

const KidsProductListing = () => {
  const [products] = useState(KidsproductsData);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOption, setSortOption] = useState('featured');
  const [showNewArrivals, setShowNewArrivals] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(0);

  const brands = [...new Set(products.map(product => product.brand))];
  const sizes = [...new Set(products.flatMap(product => product.size))];
  const categories = [...new Set(products.map(product => product.category))];

  useEffect(() => {
    let result = [...products];

    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand));
    }

    if (selectedSizes.length > 0) {
      result = result.filter(product =>
        product.size.some(size => selectedSizes.includes(size))
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }

    result = result.filter(product =>
      product.discountedPrice >= priceRange[0] && product.discountedPrice <= priceRange[1]
    );

    if (showNewArrivals) {
      result = result.filter(product => product.newArrival);
    }

    if (ratingFilter > 0) {
      result = result.filter(product => product.rating >= ratingFilter);
    }

    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case 'price-high':
        result.sort((a, b) => b.discountedPrice - a.discountedPrice);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [
    products,
    searchTerm,
    selectedBrands,
    selectedSizes,
    selectedCategories,
    priceRange,
    sortOption,
    showNewArrivals,
    ratingFilter,
  ]);

  const toggleFilter = (state, setState, value) => {
    setState(prev => (prev.includes(value) ? prev.filter(f => f !== value) : [...prev, value]));
  };

  const handlePriceChange = (e, index) => {
    const updatedRange = [...priceRange];
    updatedRange[index] = Number(e.target.value);
    setPriceRange(updatedRange);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBrands([]);
    setSelectedSizes([]);
    setSelectedCategories([]);
    setPriceRange([0, 2000]);
    setSortOption('featured');
    setShowNewArrivals(false);
    setRatingFilter(0);
  };

  return (
    <div className="fashion-listing-container">
      <div className="filters-sidebar">
        <h3>Filters</h3>
        <button onClick={resetFilters} className="reset-filters">Reset All</button>
        
        <div className="filter-section">
          <h4>Search</h4>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
            aria-label="Search products"
          />
        </div>

        {[{
          title: 'Brands',
          items: brands,
          state: selectedBrands,
          setState: setSelectedBrands,
        }, {
          title: 'Sizes',
          items: sizes,
          state: selectedSizes,
          setState: setSelectedSizes,
        }, {
          title: 'Categories',
          items: categories,
          state: selectedCategories,
          setState: setSelectedCategories,
        }].map(({ title, items, state, setState }) => (
          <div className="filter-section" key={title}>
            <h4>{title}</h4>
            <div>
              {items.map(option => (
                <div key={option} className="filter-option">
                  <label>
                    <input
                      type="checkbox"
                      checked={state.includes(option)}
                      onChange={() => toggleFilter(state, setState, option)}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="filter-section">
          <h4>Price Range</h4>
          <div className="price-range">
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
            />
            <input
              type="range"
              min="0"
              max="2000"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
            />
            <div className="price-range-values">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </div>
          </div>
        </div>

        <div className="filter-section">
          <h4>Rating</h4>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
            className="rating-filter"
          >
            <option value="0">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
          </select>
        </div>

        <div className="filter-section">
          <label>
            <input
              type="checkbox"
              id="new-arrivals"
              checked={showNewArrivals}
              onChange={() => setShowNewArrivals(!showNewArrivals)}
            />
            New Arrivals Only
          </label>
        </div>
      </div>

      <div className="products-container">
        <div className="sort-options">
          <label>Sort By:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-select"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Customer Rating</option>
            <option value="newest">Newest First</option>
          </select>
          <span className="results-count">{filteredProducts.length} products found</span>
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-products">No products match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KidsProductListing;