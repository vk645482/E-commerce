import React from 'react';
import { useParams } from 'react-router-dom';
import KidsProductPage from './Kidspage.jsx';
import KidsproductsData from "./KidsData.jsx";

const KidsProductPageWrapper = () => {
  const { id } = useParams();
  const product = KidsproductsData.find((p) => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }
  
  return <KidsProductPage product={product} />;
};

export default KidsProductPageWrapper;