import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "🚚",
      title: "Giao hàng nhanh chóng",
      description:
        "Chúng tôi cam kết giao hàng trong vòng 24-48 giờ trên toàn quốc.",
    },
    {
      icon: "💬",
      title: "Hỗ trợ khách hàng 24/7",
      description:
        "Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc của bạn bất cứ lúc nào.",
    },
    {
      icon: "🛡️",
      title: "Bảo hành chính hãng",
      description: "Tất cả sản phẩm được bảo hành 1 đổi 1 trong 12 tháng.",
    },
  ];
  return (
    <>
      <div className="services-page container py-5">
        <h1 className="text-center text-success fw-bold mb-5 animate__animated animate__fadeInDown">
          💼 Dịch vụ của chúng tôi
        </h1>
        <div className="row g-4 justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="service-card p-4 text-center h-100">
                <div className="display-5 mb-3">{service.icon}</div>
                <h4 className="fw-bold text-success mb-2">{service.title}</h4>
                <p className="text-muted small">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*-- Phần CTA --*/}
      <section className="cta-section text-center text-white py-5 mt-5">
        <div className="container">
          <h2 className="fw-bold mb-3">
            ✨ Sẵn sàng trải nghiệm dịch vụ tuyệt vời của chúng tôi?
          </h2>
          <p className="mb-4 fs-5">
            Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn và hỗ trợ tốt
          </p>
          <Link
            to="/contact"
            className="btn btn-light btn-lg shadow fw-bold px-4"
          >
            📞 Liên hệ ngay
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
