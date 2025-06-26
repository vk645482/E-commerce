import React from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from './ProductPage';
import MenproductsData from "./MenproductsData";

const ProductPageWrapper = () => {
  const { id } = useParams();
  const product = MenproductsData.find((p) => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }
  
  return <ProductPage product={product} />;
};

export default ProductPageWrapper;