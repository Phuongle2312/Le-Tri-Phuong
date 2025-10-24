import "./Product.css";
import "bootstrap";
import { useParams, Link } from "react-router-dom";
import React from "react";
const productData = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    image: "/image/iphone-17-pro-256-gb.png",
    price: "34.990.000₫",
    description:
      "iPhone 17 Pro Max với chip A19 Pro mạnh mẽ, camera 48MP Pro, thời lượng pin đột phá.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    image: "/image/samsung-galaxy-s25-ultra-blue-thumbai-600x600.jpg",
    price: "27.280.000₫",
    description:
      "Samsung Galaxy S25 Ultra với màn hình Dynamic AMOLED 2X, hiệu năng mạnh mẽ và camera đột phá.",
  },
  {
    id: 3,
    name: "Xiaomi 17 Pro Max",
    image: "/image/xiaomi-17-pro-max-trắng_1758819592.jpg.jpg",
    price: "26.990.000₫",
    description:
      "Xiaomi 17 Pro Max trang bị Leica Summilux 50 MP, chip Snapdragon 8 Elite Gen 5 và màn hình LTPO AMOLED 6.9 inch.",
  },
];

const Product = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === parseInt(id));

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
