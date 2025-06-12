import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Orders", value: "1,254" },
    { title: "Total Revenue", value: "€24,970" },
    { title: "Products", value: "132" },
    { title: "Users", value: "487" },
  ];

  return (
    <MDBContainer className="mt-4">
      <MDBRow>
        {stats.map((stat, index) => (
          <MDBCol md="6" lg="3" key={index} className="mb-4">
            <MDBCard shadow="0" border="light" className="h-100">
              <MDBCardBody>
                <h5 className="text-muted">{stat.title}</h5>
                <h2 className="fw-bold">{stat.value}</h2>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
