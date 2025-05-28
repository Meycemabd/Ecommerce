import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Fehler beim Laden des Produkts:", err));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Lade Produkt...</p>;

  return (
    <div className="container" style={{ fontFamily: 'Arial, sans-serif', marginTop: '150px' }}>
      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid shadow-sm"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-light text-uppercase" style={{ letterSpacing: "2px", color: "#222" }}>
            {product.title}
          </h2>
          <p className="text-muted mt-3" style={{ fontSize: "15px" }}>{product.description}</p>
          <h4 className="mt-4 text-danger">${product.price}</h4>
          <button className="btn btn-outline-dark mt-3 px-4 py-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
