import React from 'react';
import { useParams } from 'react-router-dom';
import WomenProductPage from './Womenpage.jsx';
import WomenproductsData from "./WomenData.jsx";

const WomenProductPageWrapper = () => {
  const { id } = useParams();
  const product = WomenproductsData.find((p) => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }
  
  return <WomenProductPage product={product} />;
};

export default WomenProductPageWrapper;