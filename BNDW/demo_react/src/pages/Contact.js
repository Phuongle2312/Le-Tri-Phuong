import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  // 🧩 Khởi tạo form, lấy dữ liệu cũ nếu có
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("contactForm");
    return saved ? JSON.parse(saved) : { name: "", email: "", message: "" };
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  // 💾 Lưu form vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(form));
  }, [form]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Lưu lại lịch sử các tin nhắn đã gửi
    const oldMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];
    const newMessage = {
      ...form,
      date: new Date().toLocaleString(),
    };
    localStorage.setItem(
      "contactMessages",
      JSON.stringify([...oldMessages, newMessage])
    );

    alert("✅ Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");

    // 🧹 Xóa form sau khi gửi
    setForm({ name: "", email: "", message: "" });
    localStorage.removeItem("contactForm");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold text-success mb-4">
        📞 Liên hệ với MyShop
      </h1>

      <div className="row g-4">
        {/* --- Form liên hệ --- */}
        <div className="col-lg-6" data-aos="fade-right">
          <div className="p-4 shadow rounded-4 bg-white">
            <h4 className="fw-bold text-success mb-3">
              📝 Gửi tin nhắn cho chúng tôi
            </h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className="form-control mb-3"
                placeholder="Họ và tên"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                className="form-control mb-3"
                rows="4"
                placeholder="Nội dung liên hệ"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <button
                type="submit"
                className="btn btn-success w-100 py-2 fw-semibold"
              >
                ✉️ Gửi liên hệ
              </button>
            </form>
          </div>
        </div>

        {/* --- Thông tin + Bản đồ --- */}
        <div className="col-lg-6">
          <div
            className="p-4 shadow rounded-4 bg-white mb-4"
            data-aos="fade-left"
          >
            <h4 className="fw-bold text-success mb-3">📍 Thông tin liên hệ</h4>
            <p>
              <FaMapMarkerAlt className="text-danger me-2" />
              <strong>Địa chỉ:</strong> 123 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội
            </p>
            <p>
              <FaEnvelope className="text-primary me-2" />
              <strong>Email:</strong> info@myshop.com
            </p>
            <p>
              <FaPhone className="text-success me-2" />
              <strong>Hotline:</strong> 0123 456 789
            </p>

            <h5 className="fw-bold mt-4 mb-2">🌐 Mạng xã hội</h5>
            <div className="d-flex gap-3">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary fs-4"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger fs-4"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* --- Google Map --- */}
          <div
            className="ratio ratio-16x9 shadow rounded-4 overflow-hidden"
            data-aos="zoom-in-up"
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2051807656844!2d105.83903627508077!3d21.02447468062371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9097230851%3A0x19907138ddda0e0a!2zMTIzIFRy4bqnbiBIxrBuZyDEkOG6oW8sIEPhu61hIE5hbSwgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1761708973780!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
