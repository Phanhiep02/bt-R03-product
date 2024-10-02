import React from "react";

export default function CategoriesTable({
  categories,
  handleUpdateCategory,
  handleDeleteCategory,
}) {
  return (
    <>
      <table className="table table-bordered mt-4 ">
        <thead>
          <tr>
            <th width="5%">Id category</th>
            <th>Tên Loại sản phẩm</th>

            <th>OrderNum</th>
            <th width="5%">Sửa</th>

            <th width="5%">Xóa</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ id, name, orderNum }) => (
            <tr key={id}>
              <td>{id}</td>

              <td>{name}</td>
              <td>{orderNum}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdateCategory({ id, name, orderNum })}
                >
                  Sửa
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteCategory(id)}
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
