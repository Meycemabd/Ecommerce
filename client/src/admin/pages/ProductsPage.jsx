import React from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
} from "mdb-react-ui-kit";

// Beispielprodukte – später mit echter API ersetzen
const products = [
  { id: 1, name: "T-Shirt", price: "19.99", category: "Shirts", stock: 25 },
  { id: 2, name: "Jeans", price: "49.99", category: "Pants", stock: 12 },
  { id: 3, name: "Sneakers", price: "89.99", category: "Shoes", stock: 8 },
];

export default function ProductsPage() {
  return (
    <MDBContainer className="mt-4">
      <h2 className="mb-4">All Products</h2>
      <MDBTable align="middle" responsive hover bordered>
        <MDBTableHead light>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>€{product.price}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
                <MDBBtn color="primary" size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </MDBContainer>
  );
}
