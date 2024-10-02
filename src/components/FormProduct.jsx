import React from "react";

export default function FormProduct({
  onSubmitAddProduct,
  onChangeValueProduct,
  formProduct,
  categories,
  onChangeCategory,
}) {
  return (
    <>
      <form action="" className="form-update" onSubmit={onSubmitAddProduct}>
        <h2>Thêm Sản Phẩm</h2>
        <div className="mb-3">
          <label>Tên</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tên sản phẩm..."
            required
            onChange={onChangeValueProduct}
            value={formProduct.name}
          />
        </div>

        <div className="mb-3">
          <label>Category</label>
          <select
            name="category"
            onChange={onChangeCategory}
            className="form-select"
            value={formProduct.categoryId}
          >
            {categories.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Lưu thay đổi</button>
      </form>
    </>
  );
}
