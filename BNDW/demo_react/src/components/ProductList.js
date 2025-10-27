import "./Product.css";
import "bootstrap";
import { Link } from "react-router-dom";
import React from "react";

import products from "../data/Productdata.json";

const ProductList = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold text-success mb-4">
        Danh sách sản phẩm
      </h1>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <div className="card shadow-sm border-0 p-3 text-center product-card">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded-4 mb-3"
              />
              <h5 className="fw-bold">{product.name}</h5>
              <p className="text-danger">{product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="btn btn-success btn-sm"
              >
                🔍 Xem chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
