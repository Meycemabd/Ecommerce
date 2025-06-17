import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBTypography,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const foundProduct = products.find((p) => String(p.id) === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product)
    return (
      <MDBContainer className="py-5">
        <MDBTypography tag="h5" className="text-center text-muted">
          Product not found.
        </MDBTypography>
        <div className="text-center mt-3">
          <Link to="/admin/products">
            <MDBBtn color="secondary" size="sm">
              Zurück zur Produktliste
            </MDBBtn>
          </Link>
        </div>
      </MDBContainer>
    );

  return (
    <MDBContainer className="py-5" style={{ maxWidth: "700px" }}>
      <MDBCard className="shadow-sm border-0">
        <MDBCardHeader className="bg-light">
          <MDBTypography tag="h4" className="mb-0">
            Produkt Details
          </MDBTypography>
        </MDBCardHeader>

        <MDBCardBody>
          <MDBTable borderless>
            <MDBTableBody>
              <tr>
                <th style={{ width: "150px" }}>Bild</th>
                <td>
                  {product.imageFile ? (
                    <img
                      src={product.imageFile}
                      alt={product.title}
                      style={{ maxWidth: "150px", borderRadius: "4px" }}
                    />
                  ) : (
                    <span>Kein Bild vorhanden</span>
                  )}
                </td>
              </tr>
              <tr>
                <th>Titel</th>
                <td>{product.title || "–"}</td>
              </tr>
              <tr>
                <th>Kategorie</th>
                <td>{product.category || "–"}</td>
              </tr>
              <tr>
                <th>Preis</th>
                <td>€ {parseFloat(product.price || 0).toFixed(2)}</td>
              </tr>
              <tr>
                <th>Beschreibung</th>
                <td style={{ whiteSpace: "pre-line" }}>
                  {product.description || "Keine Beschreibung vorhanden."}
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>

        <MDBCardFooter className="d-flex justify-content-between bg-light">
          <Link to="/admin/products">
          <button className="btn btn-secondary btn-sm">Go Back</button>

          </Link>
          <Link to={`/admin/products/edit/${product.id}`}>
          <button className="btn btn-primary btn-sm">Edit</button>

          </Link>
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
}
