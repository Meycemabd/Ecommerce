// src/admin/pages/ProductNewPage.jsx
import React, { useState } from "react";

const ProductNewPage = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // Vorschau (Data URL)
      setImageBase64(reader.result);  // Zum Speichern im localStorage
    };
    reader.readAsDataURL(file);
  };

  const handleSaveProduct = () => {
    if (!productName || !price || !imageBase64) {
      alert("Bitte alle Felder ausfüllen und ein Bild hochladen.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(price),
      image: imageBase64,
    };

    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    alert("Produkt gespeichert!");

    // Felder leeren
    setProductName("");
    setPrice("");
    setImagePreview(null);
    setImageBase64(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Neues Produkt hinzufügen</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Produktname</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="z.B. T-Shirt Basic"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Preis (€)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          placeholder="z.B. 29.99"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Produktbild</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
      </div>

      {imagePreview && (
        <div className="mb-4">
          <p className="font-medium mb-1">Vorschau:</p>
          <img
            src={imagePreview}
            alt="Vorschau"
            className="w-48 h-48 object-cover rounded border"
          />
        </div>
      )}

      <button
        onClick={handleSaveProduct}
        className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Save product
      </button>
    </div>
  );
};

export default ProductNewPage;
