import React, { useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import productData from "../data/Productdata.json";
import { CartContext } from "../context/CartContext";
import { Row, Col, Card, Button, Table, Badge } from "react-bootstrap";
import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = productData.find((item) => item.id === parseInt(id, 10));

  if (!product) {
    return (
      <h2 className="text-center text-danger mt-5">
        ❌ Không tìm thấy sản phẩm!
      </h2>
    );
  }

  // Lấy 3 sản phẩm khác để gợi ý
  const relatedProducts = productData
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  // Giả lập thông số kỹ thuật cơ bản
  const specs = [
    { label: "Màn hình", value: "OLED 6.7 inch, 120Hz" },
    { label: "Chip xử lý", value: "Snapdragon 8 Gen 3 / A19 Bionic" },
    { label: "RAM", value: "12GB" },
    { label: "Bộ nhớ", value: "256GB" },
    { label: "Camera", value: "Chính 50MP, Selfie 32MP" },
    { label: "Pin", value: "5000mAh, sạc nhanh 65W" },
  ];

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout", { state: { cart: [product] } });
  };

  return (
    <div className="container my-5 product-detail-page">
      {/* Tiêu đề */}
      <h1 className="text-center fw-bold text-success mb-4">
        📱 Chi tiết sản phẩm
      </h1>

      {/* Thông tin sản phẩm */}
      <Row className="g-4 align-items-center">
        <Col md={6} className="text-center">
          <Card className="border-0 shadow-sm rounded-4 p-3">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-4 mb-3"
              style={{
                maxHeight: "400px",
                objectFit: "contain",
                backgroundColor: "#f9f9f9",
                padding: "10px",
              }}
            />
            {/* Ảnh phụ (giả lập) */}
            <div className="d-flex justify-content-center gap-3 mt-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={product.image}
                  alt={`Ảnh phụ ${i}`}
                  className="rounded-3 border"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </Card>
        </Col>

        <Col md={6}>
          <h2 className="fw-bold text-success">{product.name}</h2>
          <h4 className="text-danger fw-bold mb-2">{product.price}</h4>
          <p className="text-muted">{product.description}</p>
          <div className="mb-3">
            <span className="text-warning fs-5">⭐ ⭐ ⭐ ⭐ ⭐</span>
            <span className="text-muted ms-2">(125 đánh giá)</span>
          </div>

          <Badge bg="success" className="mb-3">
            Còn hàng
          </Badge>

          <div className="d-flex gap-3 mt-4">
            <Button
              variant="success"
              size="lg"
              className="rounded-pill px-4"
              onClick={() => addToCart(product)}
            >
              🛒 Thêm vào giỏ
            </Button>
            <Button
              variant="danger"
              size="lg"
              className="rounded-pill px-4"
              onClick={handleBuyNow}
            >
              💳 Mua ngay
            </Button>
          </div>

          <div className="mt-4 p-3 bg-light rounded-4 shadow-sm">
            <h5 className="fw-bold text-success mb-2">🎁 Ưu đãi:</h5>
            <ul className="mb-0 text-muted">
              <li>Tặng ốp lưng + cường lực cao cấp</li>
              <li>Giảm thêm 1.000.000₫ khi thanh toán qua ví MoMo</li>
              <li>Bảo hành chính hãng 12 tháng</li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* Bảng thông số kỹ thuật */}
      <div className="mt-5">
        <h3 className="fw-bold text-success mb-3">⚙️ Thông số kỹ thuật</h3>
        <Table
          striped
          bordered
          hover
          responsive
          className="rounded-4 shadow-sm"
        >
          <tbody>
            {specs.map((spec, index) => (
              <tr key={index}>
                <td className="fw-semibold">{spec.label}</td>
                <td>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Sản phẩm tương tự */}
      <div className="mt-5">
        <h3 className="fw-bold text-success mb-4">📦 Sản phẩm tương tự</h3>
        <Row className="g-4">
          {relatedProducts.map((item) => (
            <Col md={4} key={item.id}>
              <Card className="shadow-sm border-0 h-100 text-center">
                <Card.Img
                  src={item.image}
                  alt={item.name}
                  className="p-3 rounded-top-4"
                  style={{ height: "220px", objectFit: "contain" }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold text-dark">
                    {item.name}
                  </Card.Title>
                  <Card.Text className="text-danger fw-semibold">
                    {item.price}
                  </Card.Text>
                  <Link
                    to={`/product/${item.id}`}
                    className="btn btn-outline-success rounded-pill px-3"
                  >
                    Xem chi tiết
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="text-center mt-5">
        <Link
          to="/products"
          className="btn btn-outline-secondary px-4 rounded-pill"
        >
          ⬅ Quay lại danh sách
        </Link>
      </div>
    </div>
  );
};

export default Product;
