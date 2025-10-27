import React from "react";

const Services = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-success fw-bold mb-4">
        💼 Dịch vụ của chúng tôi
      </h1>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center shadow border-0 p-4">
            <h4 className="fw-bold text-success mb-2">🚚 Giao hàng nhanh</h4>
            <p>Chúng tôi giao hàng toàn quốc trong 24h, an toàn và đúng hẹn.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow border-0 p-4">
            <h4 className="fw-bold text-success mb-2">💬 Hỗ trợ 24/7</h4>
            <p>Đội ngũ hỗ trợ trực tuyến luôn sẵn sàng phục vụ bạn.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center shadow border-0 p-4">
            <h4 className="fw-bold text-success mb-2">
              🛡️ Bảo hành chính hãng
            </h4>
            <p>
              Tất cả sản phẩm được bảo hành chính hãng 1 đổi 1 trong 12 tháng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
