import "./Product.css";
import "bootstrap";
import { useParams, Link } from "react-router-dom";
import React from "react";
import productData from "../data/Productdata.json";

const Product = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <h2 className="text-center text-danger mt-5">
        ❌ Không tìm thấy sản phẩm!
      </h2>
    );
  }

  const handleAddToCart = () => {
    alert(`🛒 Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  return (
    <div className="container my-5 product-page">
      <h1 className="product-title text-center fw-bold mb-4" data-aos="fade-up">
        Chi tiết sản phẩm
      </h1>

      <div
        className="product-card detail border-0 shadow-lg p-4 mx-auto"
        data-aos="zoom-in"
      >
        <div className="row g-4 align-items-center">
          {/* Ảnh sản phẩm */}
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-4"
              style={{
                width: "100%",
                maxHeight: "420px",
                objectFit: "contain",
                backgroundColor: "#f9f9f9",
                padding: "10px",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Thông tin sản phẩm */}
          <div className="col-md-6">
            <h3 className="text-success fw-bold mb-2">{product.name}</h3>
            <h4 className="text-danger mb-3">{product.price}</h4>
            <p className="text-muted">{product.description}</p>

            <button
              className="btn btn-success btn-lg mt-3 me-2"
              onClick={handleAddToCart}
            >
              🛒 Thêm vào giỏ hàng
            </button>

            <Link
              to="/products"
              className="btn btn-outline-secondary btn-lg mt-3"
            >
              ⬅ Quay lại danh sách
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
