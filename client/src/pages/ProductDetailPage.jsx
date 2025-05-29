import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pagesCSS/ProductDetailPage.css";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Fehler beim Laden des Produkts:", err));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading product...</p>;

  return (
    <div className="container product-detail-page">
      <div className="row">
        {/* Linke Seite: Hauptbild */}
        <div className="col-md-6 text-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="main-image"
          />
          {/* Galerie Platzhalter (kann später hinzugefügt werden) */}
          {/* <div className="thumbnail-gallery">
            <img src={product.image} className="thumbnail" alt="thumb" />
          </div> */}
        </div>

        {/* Rechte Seite: Produktinfos */}
        <div className="col-md-6">
          <h1 className="title">{product.title}</h1>

          {/* Bewertung */}
          <div className="rating mb-2">
            {"★".repeat(Math.round(product.rating?.rate || 0)) +
              "☆".repeat(5 - Math.round(product.rating?.rate || 0))}
            <span className="review-count">
              ({product.rating?.count} reviews)
            </span>
          </div>

          {/* Preisbereich */}
          <div className="price-section">
            <span className="new-price">${product.price}</span>
            <span className="old-price">$399.99</span>
            <span className="discount">25% OFF</span>
          </div>

          {/* Beschreibung */}
          <p className="description">{product.description}</p>

          {/* Farbauswahl */}
          <div className="color-selection">
            <p>Color</p>
            <button className="color-btn selected">Silver</button>
          </div>

          {/* Mengenauswahl */}
          <div className="quantity-selection mt-3">
            <label htmlFor="quantity">Quantity:</label>
            <select id="quantity">
              {[1, 2, 3, 4].map((qty) => (
                <option key={qty}>{qty}</option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <button className="btn btn-dark cart-btn mt-4">Add to Cart</button>
          <button className="btn wishlist-btn mt-2">♡ Add to Wishlist</button>

          {/* Vorteile */}
          <ul className="advantages mt-4">
            <li>✓ Free shipping on orders over $50</li>
            <li>✓ 30-day return policy</li>
            <li>✓ 2-year warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
