import "./Product.css";
import "bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import products from "../data/Productdata.json";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Lọc sản phẩm dựa trên từ khóa tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold text-success mb-4">
        🛍️ Danh sách sản phẩm
      </h1>
      {/* Thanh tìm kiếm */}
      <div id="main">
        <label for="search-input" className="visually-hidden">
          Search
        </label>
        <input
          id="search-input"
          type="text"
          name="text"
          className="input"
          aria-label="Search"
          autoComplete="off"
          placeholder="🔍 Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid sản phẩm */}
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
              <div className="card product-card shadow-sm border-0 p-3 h-100 text-center">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid product-image rounded-4"
                  />
                </div>
                <div className="card-body">
                  <h5 className="fw-bold text-dark">{product.name}</h5>
                  <p className="text-danger fw-semibold mb-3">
                    {product.price}
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-outline-success w-100"
                  >
                    🔍 Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-center text-danger mt-4">
            ❌ Không tìm thấy sản phẩm nào phù hợp!
          </h5>
        )}
      </div>
    </div>
  );
};

export default ProductList;
