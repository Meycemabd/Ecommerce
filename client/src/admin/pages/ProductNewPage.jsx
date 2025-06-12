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

    // Hier könntest du später das Produkt an API oder localStorage schicken

    console.log("Produkt speichern:");
    console.log({ title, description, price, category, imageFile });

    alert("Produkt wurde (theoretisch) gespeichert!");

    // Formular zurücksetzen (optional)
    setTitle("");
    setDescription("");
    setPrice("");
    setCategory("");
    setImageFile(null);
    e.target.reset();
  };

  return (
    <div className="container mt-4">
      <h2>Neues Produkt anlegen</h2>
      <form onSubmit={handleSubmit}>
        {/* Titel */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Produkt-Titel
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Titel eingeben"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Beschreibung */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Beschreibung
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Beschreibung eingeben"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Preis */}
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Preis (€)
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="price"
            placeholder="Preis eingeben"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Kategorie */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Kategorie
          </label>
          <select
              className="form-select"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Kategorie auswählen</option>
              <option value="shirts">Shirts</option>
              <option value="pants">Hosen</option>
              <option value="accessories">Accessoires</option>
              <option value="shoes">Schuhe</option>
              <option value="jackets">Jacken</option>
              <option value="hats">Mützen</option>
              <option value="socks">Socken</option>
              <option value="underwear">Unterwäsche</option>
              <option value="bags">Taschen</option>
            </select>
        </div>

        {/* Bild Upload */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Produktbild hochladen
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
              <p>Vorschau:</p>
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Vorschau"
                style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>

        {/* Absenden */}
        <button type="submit" className="btn btn-primary">
          Produkt speichern
        </button>
      </form>
    </div>
  );
}
