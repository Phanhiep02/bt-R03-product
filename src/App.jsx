import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import FormCategories from "./components/FormCategories";
import CategoriesTable from "./components/CategoriesTable";
import ProductTable from "./components/ProductTable";
import FormProduct from "./components/FormProduct";
export default function App() {
  const [optionCtgr, setOptionCtgr] = useState(0);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Quần áo",
      orderNum: 2,
    },
    {
      id: 2,
      name: "Điện thoại",
      orderNum: 1,
    },
    {
      id: 3,
      name: "Đồ Ăn",
      orderNum: 3,
    },
  ]);
  const productAll = [
    {
      id: 1,
      categoryId: 2,
      name: "Iphone 11 pro max",
      orderNum: 1,
    },
    {
      id: 2,
      categoryId: 2,
      name: "Iphone 13 pro max",
      orderNum: 1,
    },
    {
      id: 3,
      categoryId: 3,
      name: "Đồ ăn nhanh",
      orderNum: 3,
    },
    {
      id: 4,
      categoryId: 1,
      name: "Áo len ",
      orderNum: 2,
    },
    {
      id: 5,
      categoryId: 1,
      name: "Quần âu ",
      orderNum: 2,
    },
    {
      id: 6,
      categoryId: 1,
      name: "Quần âu ",
      orderNum: 2,
    },
    {
      id: 7,
      categoryId: 3,
      name: "Mì trộn ",
      orderNum: 3,
    },
  ];
  const [products, setProducts] = useState(productAll);
  const [currentProductId, setCurrentProductId] = useState(8);
  const [formProduct, setFormProduct] = useState({
    id: 8,
    name: "",
    categoryId: 1,
    orderNum: 2,
  });
  const [formCategory, setFormCategory] = useState({
    id: "",
    name: "",
    orderNum: 1,
  });
  const [isUpdate, setIsUpdate] = useState(false);
  const onChangeOption = (e) => {
    setOptionCtgr(+e.target.value);
  };
  useEffect(() => {
    if (optionCtgr === 0) {
      setProducts(productAll);
    } else {
      setProducts(
        productAll.filter((product) => product.categoryId === optionCtgr)
      );
    }
  }, [optionCtgr]);
  console.log(isUpdate);

  const onSubmitAddProduct = (e) => {
    e.preventDefault();
    if (isUpdate) {
      console.log("update");
      const updateProduct = {
        ...formProduct,
      };
      setProducts(
        products.map((product) =>
          product.id === updateProduct.id ? updateProduct : product
        )
      );
      resetProductForm();
      setIsUpdate(false);
      toast.success("Cập nhật thành công");
    } else {
      const newProduct = {
        ...formProduct,
        id: currentProductId,
      };
      setProducts([...products, newProduct]);
      setCurrentProductId(currentProductId + 1);
      setFormProduct({
        id: currentProductId + 1,
        name: "",
        categoryId: 1,
        orderNum: 2,
      });

      toast.success("Thêm sản phẩm thành công");
    }
  };

  const onChangeValueProduct = (e) => {
    setFormProduct({ ...formProduct, [e.target.name]: e.target.value });
  };
  const orderMapping = {
    1: 2,
    2: 1,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
  };
  const onChangeCategory = (e) => {
    const selectedCategoryId = +e.target.value;
    const newOrderNum = orderMapping[selectedCategoryId];

    setFormProduct({
      ...formProduct,
      categoryId: selectedCategoryId,
      orderNum: newOrderNum,
    });
  };
  const onSubmitAddCategory = (e) => {
    e.preventDefault();

    if (formCategory.name.trim() === "") {
      toast.error("Tên loại sản phẩm không được để trống");
      return;
    }

    if (isUpdate) {
      const updateCategory = {
        ...formCategory,
      };
      setCategories(
        categories.map((category) =>
          category.id === updateCategory.id ? updateCategory : category
        )
      );
      setIsUpdate(false);
      resetCategoryForm();
      toast.success("Cập nhật thành công");
    } else {
      const newCategory = {
        id: categories.length + 1,
        name: formCategory.name,
        orderNum: categories.length + 1,
      };

      setCategories([...categories, newCategory]);

      setFormCategory({
        id: "",
        name: "",
        orderNum: 1,
      });

      orderMapping[newCategory.id] = newCategory.orderNum;

      toast.success("Thêm loại sản phẩm thành công");
      setProducts([...products]);
    }
  };
  const onchange = (e) => {
    setFormCategory({ ...formCategory, [e.target.name]: e.target.value });
  };
  // reset form
  const resetProductForm = () => {
    setFormProduct({
      id: currentProductId,
      name: "",
      categoryId: 1,
      orderNum: 2,
    });
  };
  const resetCategoryForm = () => {
    setFormCategory({
      id: "",
      name: "",
      orderNum: 1,
    });
  };
  // handleDelete Product
  const handleDeleteProduct = (id) => {
    confirmAlert({
      title: "Bạn muốn xóa!",
      message: "Bạn chắc chắn muốn xóa?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setProducts(products.filter((product) => product.id !== id));
            toast.success("Xóa thành công");
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
  // handleDelete Product
  const handleDeleteCategory = (id) => {
    confirmAlert({
      title: "Bạn muốn xóa!",
      message: "Bạn chắc chắn muốn xóa?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setCategories(categories.filter((category) => category.id !== id));
            setProducts(
              products.filter((product) => product.categoryId !== id)
            );
            toast.success("Xóa thành công");
          },
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
    });
  };
  // handleUpdate Product
  const handleUpdateProduct = (product) => {
    setFormProduct({
      id: product.id,
      name: product.name,
      categoryId: product.categoryId,
      orderNum: product.orderNum,
    });
    setIsUpdate(true);
  };
  const handleUpdateCategory = (category) => {
    console.log(category);
    setFormCategory({
      id: category.id,
      name: category.name,
      orderNum: category.orderNum,
    });
    setIsUpdate(true);
  };
  return (
    <div>
      <div className="container py-3">
        <FormCategories
          onSubmitAddCategory={onSubmitAddCategory}
          onchange={onchange}
          formCategory={formCategory}
        ></FormCategories>
        <CategoriesTable
          categories={categories}
          handleUpdateCategory={handleUpdateCategory}
          handleDeleteCategory={handleDeleteCategory}
        ></CategoriesTable>
      </div>
      <div className="container py-3">
        <ProductTable
          categories={categories}
          products={products}
          handleUpdateProduct={handleUpdateProduct}
          handleDeleteProduct={handleDeleteProduct}
          onChangeOption={onChangeOption}
        ></ProductTable>
        <FormProduct
          onSubmitAddProduct={onSubmitAddProduct}
          onChangeValueProduct={onChangeValueProduct}
          formProduct={formProduct}
          categories={categories}
          onChangeCategory={onChangeCategory}
        ></FormProduct>
      </div>
      <ToastContainer />
    </div>
  );
}
