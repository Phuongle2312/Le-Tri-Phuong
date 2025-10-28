import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import productData from "../data/Productdata.json";
const Home = () => {
  const featuredProducts = productData.slice(0, 3); // Lấy 3 sản phẩm đầu tiên làm sản phẩm nổi bật
  return (
    <>
      {/*---phần chào mừng---*/}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h1 className="display-4 fw-bold text-success mb-3">
            🌿 Chào mừng đến MyShop!
          </h1>
          <p className="lead mb-4 text-secondary">
            Chúng tôi cung cấp những sản phẩm chất lượng và dịch vụ tận tâm.
          </p>
          <Link to="/products" className="btn btn-success btn-lg shadow">
            🛒 Xem sản phẩm
          </Link>
        </div>
      </section>
      {/*---(tại sao chọn chúng tôi)---*/}
      <section className="container py-5">
        <h2 className="text-center mb-5 fw-bold text-dark">
          ⭐ Tại sao chọn MyShop?
        </h2>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <i className="bi bi-truck text-warning display-4 mb-3"></i>
            <h5 className="fw-bold">Giao hàng miễn phí</h5>
            <p className="text-muted">
              Miễn phí giao hàng cho đơn hàng trên 500k.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <i className="bi bi-cash-stack text-warning display-4 mb-3"></i>
            <h5 className="fw-bold">Thanh toán dễ dàng</h5>
            <p className="text-muted">
              Nhiều phương thức thanh toán an toàn và tiện lợi.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <i className="bi bi-apple text-warning display-4 mb-3"></i>
            <h5 className="fw-bold">Sản phẩm đa dạng</h5>
            <p className="text-muted">
              Hàng trăm sản phẩm chất lượng cho bạn lựa chọn.
            </p>
          </Col>
        </Row>
      </section>
      {/* 3. FEATURED PRODUCTS (Sản phẩm nổi bật) */}
      <section className="bg-white py-5 border-top">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-dark">
            Sản phẩm nổi bật
          </h2>
          <Row>
            {/* Đây là các placeholder (giả lập) cho card sản phẩm */}
            {featuredProducts.map((product) => (
              <Col md={4} key={product.id} className="mb-4">
                <Card className="shadow-sm h-100 border-0">
                  <div className="text-center p-3">
                    <img
                      src={process.env.PUBLIC_URL + product.image}
                      alt={product.name}
                      className="img-fluid rounded-3"
                      style={{
                        height: "200px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold text-success">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="text-danger fw-bold">
                      {product.price}
                    </Card.Text>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-success btn-sm"
                    >
                      Xem chi tiết
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-outline-dark">
              Xem thêm sản phẩm
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
