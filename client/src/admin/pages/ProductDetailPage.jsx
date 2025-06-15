import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p>product not Found.</p>;

  return (
    <div className="product-detail container py-4">
      <h2>{product.title}</h2>
      <img src={product.imageFile} alt={product.title} style={{ maxWidth: "300px" }} />
      <p>Kategorie: {product.category}</p>
      <p>Preis: € {product.price.toFixed(2)}</p>
      <p>Beschreibung: {product.description || "Keine Beschreibung vorhanden."}</p>
    </div>
  );
}
