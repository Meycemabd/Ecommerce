import React, { useState } from "react";

export default function ProductNewPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Neues Produkt-Objekt erstellen
    const newProduct = {
      id: Date.now(), // einfache ID (Zeitstempel)
      title,
      description,
      price: parseFloat(price), // Preis als Zahl speichern
      category,
      imageFile, // Die Datei speichern wir so, für Upload später
    };

    // Produkte aus localStorage laden (falls vorhanden)
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Neues Produkt anhängen
    storedProducts.push(newProduct);

    // Produkte wieder speichern
    localStorage.setItem("products", JSON.stringify(storedProducts));

    alert("Product saved to localStorage!");

    // Formular zurücksetzen
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImageFile(null);
    e.target.reset();
  };

  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Price */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price (€)
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>
            <option value="shirts">Shirts</option>
            <option value="pants">Pants</option>
            <option value="accessories">Accessories</option>
            <option value="shoes">Shoes</option>
            <option value="jackets">Jackets</option>
            <option value="hats">Hats</option>
            <option value="socks">Socks</option>
            <option value="underwear">Underwear</option>
            <option value="bags">Bags</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload Product Image
          </label>
          <input
            className="form-control"
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {imageFile && (
            <div className="mt-3">
              <p>Preview:</p>
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Preview"
                style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary">
          Save Product
        </button>
      </form>
    </div>
  );
}
