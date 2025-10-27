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
      <h2 className="text-center text-danger mt-5">Không tìm thấy sản phẩm!</h2>
    );
  }

  const handleAddToCart = () => {
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  return (
    <div className="container my-5">
      <h1 className="product-title text-center fw-bold mb-4">
        Chi tiết sản phẩm
      </h1>

      <div className="card shadow-lg border-0 p-4 rounded-4 product-card">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-4"
            />
          </div>

          <div className="col-md-6">
            <h3 className="text-success fw-bold">{product.name}</h3>
            <h4 className="text-danger mb-3">{product.price}</h4>
            <p className="text-muted">{product.description}</p>
            <button
              className="btn btn-success btn-lg mt-3"
              onClick={handleAddToCart}
            >
              🛒 Thêm vào giỏ hàng
            </button>
            <br />
            <Link to="/" className="btn btn-outline-secondary mt-3">
              ⬅ Quay lại danh sách
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
