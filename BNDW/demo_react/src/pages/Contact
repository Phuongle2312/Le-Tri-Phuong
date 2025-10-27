import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-success fw-bold mb-4">📞 Liên hệ</h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto p-4 shadow rounded-3 bg-white"
        style={{ maxWidth: "600px" }}
      >
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
        <button type="submit" className="btn btn-success w-100">
          ✉️ Gửi liên hệ
        </button>
      </form>
    </div>
  );
};

export default Contact;
