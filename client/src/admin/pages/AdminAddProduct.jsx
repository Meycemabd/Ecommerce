// src/admin/pages/AdminAddProduct.jsx
import React, { useState } from "react";
import { MDBInput, MDBTextArea, MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const AdminAddProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product added:", formData);
    navigate("/admin/products"); // korrekt, da du von außen zurück navigierst
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <MDBInput
          label="Product Name"
          name="name"
          className="mb-3"
          required
          onChange={handleChange}
        />
        <MDBInput
          label="Category"
          name="category"
          className="mb-3"
          required
          onChange={handleChange}
        />
        <MDBInput
          label="Price (€)"
          name="price"
          type="number"
          className="mb-3"
          required
          onChange={handleChange}
        />
        <MDBInput
          label="Stock Quantity"
          name="stock"
          type="number"
          className="mb-3"
          required
          onChange={handleChange}
        />
        <MDBInput
          label="Image URL"
          name="imageUrl"
          className="mb-3"
          onChange={handleChange}
        />
        <MDBTextArea
          label="Description"
          name="description"
          rows={4}
          className="mb-4"
          onChange={handleChange}
        />
        <MDBBtn type="submit">Add Product</MDBBtn>
      </form>
    </div>
  );
};

export default AdminAddProduct;
