import "./Product.css";
import "bootstrap";
import { Link } from "react-router-dom";
import React from "react";

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    image: "./image/iphone-17-pro-256-gb.png",
    price: "34.990.000₫",
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    image: "./image/samsung-galaxy-s25-ultra-blue-thumbai-600x600.jpg",
    price: "27.280.000₫",
  },
  {
    id: 3,
    name: "Xiaomi 17 Pro Max",
    image: "./image/xiaomi-17-pro-max-trắng_1758819592.jpg.jpg",
    price: "26.990.000₫",
  },
];

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
