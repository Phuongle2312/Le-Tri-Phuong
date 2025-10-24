import "./Product.css";

function Product() {
  return (
    <div class="modal fade" id="productModal" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-warning">
            <h1 class="modal-title" id="productModalLabel">
              Chi tiết sản phẩm
            </h1>
          </div>
          <div>
            <img
              src="./image/iphone-17-pro-256-gb.png"
              id="modal-image"
              class="img-fluid mb-3 rounded"
              alt="Sản phẩm"
            />
          </div>
          <div class="modal-body text-center">
            <p id="modal-desc" class="text-muted"></p>
            <button id="modal-add-cart" class="btn btn-warning">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
