import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const total = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/\D/g, ""));
    return sum + price;
  }, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.");
    navigate("/");
  };

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold text-success mb-4">
        💳 Thanh toán đơn hàng
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-muted">
          Giỏ hàng trống, vui lòng quay lại mua hàng.
        </p>
      ) : (
        <div className="row g-4">
          <div className="col-md-7">
            <Card className="p-4 shadow-sm border-0 rounded-4">
              <h4 className="fw-bold mb-3">🧾 Thông tin đơn hàng</h4>
              <ul className="list-group mb-3">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {item.name}
                    <span className="text-danger fw-bold">{item.price}</span>
                  </li>
                ))}
              </ul>
              <h5 className="text-end text-success fw-bold">
                Tổng cộng: {total.toLocaleString()}₫
              </h5>
            </Card>
          </div>

          <div className="col-md-5">
            <Card className="p-4 shadow-sm border-0 rounded-4 bg-light">
              <h4 className="fw-bold mb-3">🧍‍♂️ Thông tin thanh toán</h4>
              <Form onSubmit={handlePayment}>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập họ và tên"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Nhập email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Địa chỉ giao hàng</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập địa chỉ"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Phương thức thanh toán</Form.Label>
                  <Form.Select required>
                    <option value="">-- Chọn phương thức --</option>
                    <option value="cod">Thanh toán khi nhận hàng (COD)</option>
                    <option value="bank">Chuyển khoản ngân hàng</option>
                    <option value="momo">Ví MoMo</option>
                  </Form.Select>
                </Form.Group>
                <Button
                  type="submit"
                  variant="success"
                  className="w-100 rounded-pill"
                >
                  Xác nhận thanh toán
                </Button>
              </Form>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
