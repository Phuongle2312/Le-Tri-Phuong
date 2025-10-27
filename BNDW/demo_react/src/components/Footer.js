import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} MyShop.</p>
        <p className="mb-0">
          📞 Hotline:{" "}
          <a
            href="tel:+84987654321"
            className="text-success text-decoration-none"
          >
            0987 654 321
          </a>{" "}
          | ✉️{" "}
          <a
            href="mailto:info@myshop.com"
            className="text-success text-decoration-none"
          >
            info@myshop.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
