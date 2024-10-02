import React from "react";

export default function ProductTable({
  categories,
  products,
  handleUpdateProduct,
  handleDeleteProduct,
  onChangeOption,
}) {
  return (
    <>
      <h2>Danh sách Sản Phẩm</h2>

      <div className="row">
        <div className="col-3">
          <select
            className="form-select"
            name="category"
            onChange={onChangeOption}
          >
            <option value={0}>Tất cả loại</option>
            {categories.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th width="5%">Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Order Number</th>
            <th width="5%">Sửa</th>

            <th width="5%">Xóa</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, categoryId, name, orderNum }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <span className="badge bg-success">
                  {categories.map(({ id, name, orderNum }) => {
                    if (id === categoryId) {
                      return <span key={id}>{name}</span>;
                    }
                  })}
                </span>
              </td>
              <td>{orderNum}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    handleUpdateProduct({ id, categoryId, name, orderNum })
                  }
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteProduct(id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
