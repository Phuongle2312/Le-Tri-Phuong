import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/Productdata.json";
import { Card, Button, Row, Col } from "react-bootstrap";

const ProductCard = () => {
  const navigate = useNavigate();

  // 🧩 Lấy giỏ hàng từ localStorage khi khởi tạo
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // 💾 Cập nhật localStorage mỗi khi giỏ hàng thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    // Nếu sản phẩm đã có, chỉ tăng số lượng
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }
    navigate("/checkout", { state: { cart } });
  };

  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-success fw-bold mb-4">
        🛒 Danh sách sản phẩm
      </h1>

      <Row className="g-4">
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="shadow-sm h-100 border-0">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="p-3 rounded-4"
              />
              <Card.Body>
                <Card.Title className="fw-bold text-success">
                  {product.name}
                </Card.Title>
                <Card.Text className="text-danger fw-bold">
                  {product.price}
                </Card.Text>
                <Card.Text className="text-muted small">
                  {product.description}
                </Card.Text>
                <Button
                  variant="success"
                  className="w-100 rounded-pill"
                  onClick={() => addToCart(product)}
                >
                  Thêm vào giỏ hàng
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/*---Giỏ hàng và thanh toán---*/}
      <div className="mt-5 p-4 bg-light rounded-4 shadow-sm">
        <h3 className="text-center fw-bold mb-3">🧾 Giỏ hàng của bạn</h3>
        {cart.length > 0 ? (
          <>
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    {item.name}{" "}
                    <span className="text-muted">x{item.quantity}</span>
                  </div>
                  <div>
                    <span className="text-danger fw-bold">{item.price}</span>{" "}
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      X
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
            <Button
              variant="primary"
              className="w-100 rounded-pill"
              onClick={handleCheckout}
            >
              Tiến hành thanh toán
            </Button>
          </>
        ) : (
          <p className="text-center text-muted">Giỏ hàng hiện đang trống.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
