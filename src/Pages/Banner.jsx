import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="Banner">
      <div className="offer">
        <h1>50%</h1>
        <h3>off</h3>
        <span>to this brand</span>
      </div>

      <Link to="" className="img-link">
        <img
          src="https://images.unsplash.com/photo-1633793566189-8e9fe6f817fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3QlMjBicmFuZHxlbnwwfDB8MHx8fDA%3D"
          alt=""
          className="image"
        />
      </Link>
       <div className="offer">
        <h1>50%</h1>
        <h3>off</h3>
        <span>to this brand</span>
      </div>
    </div>
  );
}

export default Banner;
