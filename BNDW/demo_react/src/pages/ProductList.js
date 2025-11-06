import "./Product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import products from "../data/Productdata.json";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Khởi tạo AOS (hiệu ứng cuộn)
  useEffect(() => {
    Aos.init({ duration: 700, easing: "ease-in-out" });
  }, []);

  // Lọc sản phẩm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Xử lý thêm vào giỏ
  const handAddToCart = (product) => {
    toast.success(`🛒 Đã thêm "${product.name}" vào giỏ hàng!`, {
      position: "bottom-right",
      autoClose: 1500,
    });
  };

  // Xử lý mua ngay
  const handleBuyNow = (product) => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className={`product-page ${darkMode ? "dark-mode" : ""}`}>
      <div className="container py-5">
        {/* Nút chuyển Dark/Light Mode */}
        <div className="text-end mb-3">
          <button
            className="btn btn-outline-secondary rounded-pill px-4"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌞 Chế độ Sáng" : "🌙 Chế độ Tối"}
          </button>
        </div>

        {/* Tiêu đề */}
        <motion.h1
          className="text-center fw-bold text-success mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          🛍️ Danh Sách Sản Phẩm
        </motion.h1>

        {/* Thanh tìm kiếm */}
        <motion.div
          className="search-bar mx-auto mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="text"
            className="form-control search-input shadow-sm"
            placeholder="🔍 Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>

        {/* Grid sản phẩm */}
        <div className="row g-4 justify-content-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                className="col-lg-3 col-md-4 col-sm-6"
                key={product.id}
                data-aos="zoom-in"
                whileHover={{ scale: 1.02 }}
              >
                <div className="card product-card border-0 shadow-sm h-100 text-center">
                  <div className="product-image-container position-relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid product-image rounded-top-4"
                    />
                    <div className="overlay">
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="btn btn-danger btn-sm"
                      >
                        💳 Mua ngay
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="fw-bold text-dark">{product.name}</h5>
                    <p className="text-danger fw-semibold mb-3">
                      {product.price}
                    </p>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-success w-100 mb-2"
                    >
                      🔍 Xem chi tiết
                    </Link>
                    <button
                      onClick={() => handAddToCart(product)}
                      className="btn btn-success w-100"
                    >
                      🛒 Thêm vào giỏ
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <h5 className="text-center text-danger mt-4">
              ❌ Không tìm thấy sản phẩm nào phù hợp!
            </h5>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductList;
