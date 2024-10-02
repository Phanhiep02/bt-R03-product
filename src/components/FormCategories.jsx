import React from "react";

export default function FormCategories({
  onSubmitAddCategory,
  onchange,
  formCategory,
}) {
  return (
    <>
      <form action="" className="form-update" onSubmit={onSubmitAddCategory}>
        <h2>Thêm loại sản phẩm</h2>
        <div className="mb-3">
          <label>Loại sản phẩm</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tên loại phẩm..."
            onChange={onchange}
            value={formCategory.name}
          />
        </div>

        <button className="btn btn-primary">Lưu thay đổi</button>
      </form>
    </>
  );
}
