import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Shop.css";
import { categories } from "../Constdata/Shopdata";

function Shop() {
  const [activeCategory, setActiveCategory] = useState("Fashion");
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.1 },
  };

  return (
    <div className="shop-container">
      {/* Category Tabs */}
      <div className="category-tabs">
        {Object.keys(categories).map((category) => (
          <motion.button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setActiveSubcategory(null);
            }}
            className={`category-button ${activeCategory === category ? "active" : ""}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Subcategory Cards */}
      <div className="subcategory-cards">
        {categories[activeCategory].map(({ id, title, img, link }) => (
          <motion.div
            key={id}
            className="subcategory-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <Link to={link} className="subcategory-link">
              <img src={img} alt={title} className="subcategory-image" />
              <h4 className="subcategory-title">{title}</h4>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
