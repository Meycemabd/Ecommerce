import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    title: "",
    category: "",
    price: "",
    imageFile: "",
  });

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
      setProductData({
        title: product.title,
        category: product.category,
        price: product.price,
        imageFile: product.imageFile,
      });
    } else {
      alert("Produkt nicht gefunden");
      navigate("/admin/products");
    }
  }, [id, navigate]);

  function handleChange(e) {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("products")) || [];

    const updatedProducts = products.map((p) =>
      p.id === parseInt(id)
        ? { ...p, ...productData, price: parseFloat(productData.price) }
        : p
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/admin/products");
  }

  return (
    <div className="container py-4">
      <h2>Produkt bearbeiten</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Titel</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={productData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Kategorie</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Preis (€)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Bildbearbeitung vereinfachen wir erstmal, hier nur als Text-URL */}
        <div className="mb-3">
          <label>Bild-URL</label>
          <input
            type="text"
            className="form-control"
            name="imageFile"
            value={productData.imageFile}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Speichern
        </button>
      </form>
    </div>
  );
}
